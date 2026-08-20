# Dibs for you

Cute Bacolod restaurant roulette for GitHub Pages.

## Included
- 76 Bacolod restaurant/eatery records embedded directly in the app
- Cute green 2D revolver roulette
- Six restaurant names inside the cylinder
- Tap any of the six cards to replace just that choice
- Animated sushi mascot
- Sound effects with mute toggle
- Area, nearby-area, cuisine, budget and open-now filters
- GPS used only to estimate your nearest Bacolod area cluster
- Favorites and skips saved in the browser
- Add missing restaurants locally
- Google Maps button for winner and searched restaurants
- Offline-capable PWA after first successful load

## Update your existing GitHub Pages site
Upload these files into the root of your existing repository and replace the old versions:

- index.html
- manifest.json
- service-worker.js
- icon-192.png
- icon-512.png
- apple-touch-icon.png

Then commit to `main`. GitHub Pages should redeploy automatically.

## Notes
The restaurant information is a local snapshot and can become outdated. Google Maps is opened only when the user chooses to verify a restaurant.
