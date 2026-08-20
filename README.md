# Dibs for you v5

This build keeps the 319-place Bacolod database and changes two major things:

## General meal filters
The old detailed cuisine picker is replaced with:
- Dinner
- Anything
- Cafe
- Burgers
- Asian
- Fast food
- Filipino
- Pizza
- Dessert
- Breakfast / brunch

Dinner intentionally filters out coffee/dessert/snack-only places such as Starbucks,
milk-tea shops, ice-cream stalls and dessert kiosks.

## Audio fix
The roulette SFX use the same persistent Web Audio approach as v2.
There is one `TAP FOR SOUND` button again.

That button:
1. unlocks the iPhone audio context,
2. plays a test chime,
3. starts the local cute looping background track.

Winner SFX and the sushi dance remain enabled.

If an installed Home Screen version still behaves like an old build, remove the old
Home Screen icon, open the refreshed GitHub Pages URL in Safari, then Add to Home Screen again.
