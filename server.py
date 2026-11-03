"""
Hunar Setu - Full-Stack Local Server with Direct Supabase PostgreSQL Connection
Connects the web application directly to Supabase cloud database.
"""
import os
import sys
import json
import ssl
import hashlib
import urllib.parse
from http.server import HTTPServer, SimpleHTTPRequestHandler
import pg8000.native

# Supabase PostgreSQL Connection configuration
DB_USER = os.getenv("DB_USER", "postgres.qtircpfapqtedajuvznk")
DB_PASS = os.getenv("DB_PASSWORD", "aparna8466941644")
DB_HOST = os.getenv("DB_HOST", "aws-1-eu-central-1.pooler.supabase.com")
DB_PORT = int(os.getenv("DB_PORT", "5432"))
DB_NAME = os.getenv("DB_NAME", "postgres")

def get_db():
    ctx = ssl.create_default_context()
    ctx.check_hostname = False
    ctx.verify_mode = ssl.CERT_NONE
    return pg8000.native.Connection(
        user=DB_USER,
        password=DB_PASS,
        host=DB_HOST,
        port=DB_PORT,
        database=DB_NAME,
        ssl_context=ctx
    )

class SupabaseHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        # Enable CORS and disable aggressive caching for development
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type, Authorization")
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(200)
        self.end_headers()

    def send_json(self, status_code, data):
        payload = json.dumps(data).encode("utf-8")
        self.send_response(status_code)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(payload)))
        self.end_headers()
        self.wfile.write(payload)

    def read_json_body(self):
        try:
            length = int(self.headers.get("Content-Length", 0))
            if length > 0:
                raw = self.rfile.read(length).decode("utf-8")
                return json.loads(raw)
        except Exception as e:
            print("read_json_body error:", e)
        return {}

    def do_GET(self):
        parsed = urllib.parse.urlparse(self.path)
        path = parsed.path

        if path == "/api/status":
            try:
                con = get_db()
                cnt = con.run("SELECT count(*) FROM public.app_users;")[0][0]
                con.close()
                return self.send_json(200, {
                    "status": "connected",
                    "database": "Supabase PostgreSQL",
                    "host": DB_HOST,
                    "project": "qtircpfapqtedajuvznk",
                    "users_count": cnt
                })
            except Exception as e:
                return self.send_json(500, {"status": "error", "message": str(e)})

        elif path == "/api/orders":
            try:
                con = get_db()
                rows = con.run("SELECT id, item, name, phone, size, budget, when_needed, details, created_at FROM public.custom_orders ORDER BY created_at DESC LIMIT 50;")
                con.close()
                orders = []
                for r in rows:
                    orders.append({
                        "id": str(r[0]),
                        "item": r[1],
                        "name": r[2],
                        "phone": r[3],
                        "size": r[4],
                        "budget": float(r[5]) if r[5] else 0,
                        "when": str(r[6]) if r[6] else "",
                        "text": r[7] or ""
                    })
                return self.send_json(200, {"orders": orders})
            except Exception as e:
                return self.send_json(500, {"error": str(e)})

        elif path == "/api/works":
            try:
                con = get_db()
                rows = con.run("SELECT id, by_name, village, title, kind, price, about, photo_url, created_at FROM public.artisan_works ORDER BY created_at DESC LIMIT 50;")
                con.close()
                works = []
                for r in rows:
                    works.append({
                        "id": str(r[0]),
                        "by": r[1],
                        "village": r[2],
                        "title": r[3],
                        "kind": r[4],
                        "price": float(r[5]) if r[5] else 0,
                        "about": r[6] or "",
                        "photo": r[7] or ""
                    })
                return self.send_json(200, {"works": works})
            except Exception as e:
                return self.send_json(500, {"error": str(e)})

        elif path == "/api/posts":
            try:
                con = get_db()
                rows = con.run("SELECT id, who, text, photo_url, likes, created_at FROM public.community_posts ORDER BY created_at DESC LIMIT 50;")
                con.close()
                posts = []
                for r in rows:
                    posts.append({
                        "id": str(r[0]),
                        "who": r[1],
                        "text": r[2],
                        "photo": r[3] or "",
                        "likes": r[4] or 0
                    })
                return self.send_json(200, {"posts": posts})
            except Exception as e:
                return self.send_json(500, {"error": str(e)})

        # Default static file handler
        return super().do_GET()

    def do_POST(self):
        parsed = urllib.parse.urlparse(self.path)
        path = parsed.path

        if path == "/api/auth/register":
            body = self.read_json_body()
            phone = str(body.get("phone", "")).strip()
            name = str(body.get("name", "")).strip()
            pw_hash = body.get("hash", "")
            salt = body.get("salt", "")

            if not phone or not name or not pw_hash or not salt:
                return self.send_json(400, {"error": "Missing required fields"})

            try:
                con = get_db()
                existing = con.run("SELECT id FROM public.app_users WHERE phone = :phone;", phone=phone)
                if existing:
                    con.close()
                    return self.send_json(409, {"error": "Phone number already registered"})

                con.run(
                    "INSERT INTO public.app_users (phone, name, password_hash, salt) VALUES (:phone, :name, :hash, :salt);",
                    phone=phone, name=name, hash=pw_hash, salt=salt
                )
                con.close()
                return self.send_json(200, {"success": True, "phone": phone, "name": name})
            except Exception as e:
                return self.send_json(500, {"error": str(e)})

        elif path == "/api/auth/login":
            body = self.read_json_body()
            phone = str(body.get("phone", "")).strip()

            if not phone:
                return self.send_json(400, {"error": "Missing phone number"})

            try:
                con = get_db()
                user = con.run("SELECT name, password_hash, salt FROM public.app_users WHERE phone = :phone;", phone=phone)
                con.close()
                if not user:
                    return self.send_json(404, {"error": "User not found"})

                return self.send_json(200, {
                    "phone": phone,
                    "name": user[0][0],
                    "hash": user[0][1],
                    "salt": user[0][2]
                })
            except Exception as e:
                return self.send_json(500, {"error": str(e)})

        elif path == "/api/orders":
            body = self.read_json_body()
            try:
                con = get_db()
                con.run(
                    "INSERT INTO public.custom_orders (item, name, phone, size, budget, when_needed, details) VALUES (:item, :name, :phone, :size, :budget, :when_needed, :details);",
                    item=body.get("item", "decor"),
                    name=body.get("name", ""),
                    phone=body.get("phone", ""),
                    size=body.get("size", ""),
                    budget=float(body.get("budget", 0) or 0),
                    when_needed=body.get("when") or None,
                    details=body.get("text", "")
                )
                con.close()
                return self.send_json(200, {"success": True})
            except Exception as e:
                return self.send_json(500, {"error": str(e)})

        elif path == "/api/works":
            body = self.read_json_body()
            try:
                con = get_db()
                con.run(
                    "INSERT INTO public.artisan_works (by_name, village, title, kind, price, about, photo_url) VALUES (:by_name, :village, :title, :kind, :price, :about, :photo_url);",
                    by_name=body.get("by", ""),
                    village=body.get("village", "Durgi"),
                    title=body.get("title", ""),
                    kind=body.get("kind", "decor"),
                    price=float(body.get("price", 0) or 0),
                    about=body.get("about", ""),
                    photo_url=body.get("photo", None)
                )
                con.close()
                return self.send_json(200, {"success": True})
            except Exception as e:
                return self.send_json(500, {"error": str(e)})

        elif path == "/api/posts":
            body = self.read_json_body()
            try:
                con = get_db()
                con.run(
                    "INSERT INTO public.community_posts (who, text, photo_url, likes) VALUES (:who, :text, :photo_url, :likes);",
                    who=body.get("who", ""),
                    text=body.get("text", ""),
                    photo_url=body.get("photo", None),
                    likes=int(body.get("likes", 0) or 0)
                )
                con.close()
                return self.send_json(200, {"success": True})
            except Exception as e:
                return self.send_json(500, {"error": str(e)})

        return self.send_json(404, {"error": "Not Found"})

def main():
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 8000
    server_address = ("", port)
    httpd = HTTPServer(server_address, SupabaseHandler)
    print(f"Hunar Setu server running at http://localhost:{port}/")
    print(f"Connected to Supabase PostgreSQL at {DB_HOST}:{DB_PORT}")
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nShutting down server.")
        httpd.server_close()

if __name__ == "__main__":
    main()
