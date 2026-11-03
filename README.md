# Hunar Setu

A simple website for **Durgi stone carvers** (Palnadu region, Andhra Pradesh). It gives carvers a digital showcase, a way for buyers to send enquiries and custom orders, short skill lessons, and a community feed. The site works in **English and Telugu** and is designed for easy use on a phone.

## Features
- **Gallery:** carved pieces with filters, carver profiles, and an "Ask about this" button
- **Add my work:** carvers upload a photo, name and price
- **Custom order:** buyers request an idol, lamp, decor piece or temple pillar
- **Learn:** six short lessons (stone check, finishing, pricing, packing, photos, replying to buyers) with a progress bar
- **Community:** posts, likes and feedback
- **Login:** phone number and password (see the note below)

## Run it
No build step. Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Publish with GitHub Pages
1. Push this folder to a GitHub repository.
2. Go to **Settings > Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, pick `main` and `/ (root)`, then save.

## Project structure
```
index.html      page structure
css/style.css   styles (warm beige & terracotta artisanal palette)
js/app.js       all pages, English/Telugu text, login and saving
assets/         high-resolution artisan and stone carving photography
.gitignore      ignored system and editor files
```

## Prototype notes
- Pieces, carvers and posts marked **Sample** are examples. Replace them with real artisans after field visits.
- There is no server. Accounts, posts, orders and uploads are saved in the visitor's own browser (`localStorage`), so other people do not see them.
- Passwords are salted and hashed in the browser. This is fine for a demo and not real security.
- Lesson videos are placeholders.

## Future scope
- A backend and database so accounts, orders and posts are shared across devices
- OTP verification by SMS for login
- Recorded video lessons in Telugu
- Other Palnadu crafts, such as folk performance and weaving
