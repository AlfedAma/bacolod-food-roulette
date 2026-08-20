# Dibs for you

Cute Bacolod restaurant roulette for GitHub Pages.

## What's in this build
- 104 Bacolod restaurant/eatery records built into the app
- Cute green 2D revolver roulette
- Six restaurant names inside the cylinder
- Tap any choice card to replace only that restaurant
- Animated sushi mascot
- iPhone-friendly sound unlock button and persistent sound engine
- Click-click roulette audio and cute pew sound
- Open-now filter is OFF by default so the initial pool stays large
- Area, nearby-area, cuisine and budget filters
- GPS estimates your nearest Bacolod area cluster
- Favorites and skips saved on-device
- Browse all local restaurants
- Add a restaurant by pasting a Google Maps link
- Long Google Maps links can auto-fill the restaurant name
- Short maps.app.goo.gl links are saved exactly, but you type the restaurant name once because the short URL hides it
- Exact pasted Google Maps link is saved and reopened for that restaurant
- Custom restaurants can be deleted
- Google Maps winner button
- Offline-capable PWA after first successful load

## Important local-storage note
Restaurants that you add yourself are saved in that browser/device's local storage. Clearing Safari website data or using a different phone will not carry those personal additions over.

## Update an existing GitHub Pages repository
Replace:
- index.html
- manifest.json
- service-worker.js
- icon-192.png
- icon-512.png
- apple-touch-icon.png

Commit to main. GitHub Pages should redeploy automatically.
