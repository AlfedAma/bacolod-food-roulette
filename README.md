# Dibs4u v28 - Reliability Fix

This version fixes three intermittent bugs.

## Audio reliability
- Music is re-armed on real iPhone taps.
- AudioContext is resumed after Safari/app interruptions.
- Music retries when returning to the page after screen lock, app switching,
  Control Center, or Safari tab suspension.
- Pull Trigger and New Six explicitly re-arm audio.

## Winner dance reliability
- All 14 animation frames are preloaded.
- The animation now uses requestAnimationFrame rather than a fragile timeout loop.
- Every roll explicitly restarts at frame 1.
- The dance restarts once preload finishes if the first roll happened before
  every image was cached.

## Favorites button
- Every winner now gets its own correct button state.
- New unsaved winner: `♡ SAVE TO FAVORITES`
- Already saved winner: `♥ SAVED TO FAVORITES`
- Tapping it now toggles save/remove correctly.
- The previous winner's `SAVED` text can no longer leak into the next roll.

All restaurant data, filters, sushi tray, drum roll, confetti, Maps importer,
favorites, recent history, delete/restore and PWA features remain unchanged.
