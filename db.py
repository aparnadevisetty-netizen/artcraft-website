"""
Hunar Setu Database Connection Helper (Python)
Usage:
    python db.py
"""
import os
import ssl
import pg8000.native

# Load from environment variables (safe for GitHub)
DB_USER = os.getenv("DB_USER", "postgres.qtircpfapqtedajuvznk")
DB_PASS = os.getenv("DB_PASSWORD", "")
DB_HOST = os.getenv("DB_HOST", "aws-1-eu-central-1.pooler.supabase.com")
DB_PORT = int(os.getenv("DB_PORT", "5432"))
DB_NAME = os.getenv("DB_NAME", "postgres")

def get_connection():
    if not DB_PASS:
        raise ValueError("DB_PASSWORD environment variable is not set. Please set DB_PASSWORD or create a .env file.")
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

def test_db():
    print(f"Connecting to Supabase PostgreSQL at {DB_HOST}:{DB_PORT}...")
    try:
        con = get_connection()
        print("Connected successfully!")
        
        # Check tables
        tables = con.run("SELECT table_name FROM information_schema.tables WHERE table_schema='public';")
        print("Public Tables:", [t[0] for t in tables])
        
        # User count
        users = con.run("SELECT count(*) FROM public.app_users;")
        print(f"Total Registered Users: {users[0][0]}")
        
        # Orders count
        orders = con.run("SELECT count(*) FROM public.custom_orders;")
        print(f"Total Custom Orders: {orders[0][0]}")
        
        con.close()
    except Exception as e:
        print("Database connection error:", e)

if __name__ == "__main__":
    test_db()
