# Python: Custom Exceptions — TAP Academy lesson video

HyperFrames project (1920×1080, 30 fps, no audio), 5 min 58 s, built from the Custom Exceptions storyboard
(81 scenes, 58:08 of lecture). Scene-by-scene build order: [FLOW-MAP.md](FLOW-MAP.md).

## Preview

```bash
npx --yes hyperframes@0.8.58 preview --port 3036
```

Then open http://127.0.0.1:3036/#project/video-36

## Scenes

| Start | Composition | Storyboard | Content |
|---|---|---|---|
| 0:00 | g1-a | S02–S04 | "Validate:" title, the five valid try / except / else / finally windows, nested try |
| 0:30 | g2-a | S05–S11 | Exception hierarchy tree |
| 0:57 | g3-a | S12–S29 | Mobile-number validator → InvalidMobileNumberError + UML |
| 1:55 | g4-a | S30–S35 | Food menu → ItemNotInMenuError, try / except as e |
| 2:47 | g5-a | S36–S39 | Sign up page, DuplicateUserError, WeakPasswordError |
| 3:03 | g6-a | S40–S67 | class User coded line by line, main() |
| 4:58 | g7-a | S68–S77 | Memory view: Stack / Class variable / Heap, password walk |
| 5:45 | g8-a | S78–S81 | Two users with the same name → Username already exist |

`assets/kit.js` = shared code/output window kit, `assets/cx.js` = this video's helpers,
`kit-src/mount.py` + `kit-src/durs.json` chain the compositions into `index.html`.
