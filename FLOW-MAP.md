# video-36 — Python: Custom Exceptions — FLOW MAP

Source storyboard: https://claude.ai/artifact/5gx7dcpFJLhxd97jC3M57B (copy: kit-src/storyboard.html, text dump kit-src/sb.txt).
81 scenes, 58:08 of lecture -> 367.3 s video. Every composition records its storyboard rows on `window.__gXaBeats`
(S##rN = the time that row fires) — cut the trainer PPT on those.

| Comp | Start | Scenes | What happens (in storyboard order) |
|---|---|---|---|
| g1-a | 0.0 | S02–S04 | user art "Validate:" rains in (Asset'sCustomExceptionsalidate-title.webp); each valid combination in its own Main.py window; try typed; 5 skeleton columns one per click; columns clear; nested try skeleton, closing except |
| g2-a | 39.4 | S05–S11 | 'Exception Hierarchy' rains in; BaseException; Exception; row 2 + connectors; row 3 (box → label → connector); ValueError; Arithmetic / Lookup / OS children; hold |
| g3-a | 65.9 | S12–S29 | validator typed; run → ValueError; code slides down; class InvalidMobileNumberError → (Exception): pass; UML Exception → Is-A → InvalidMobileNumberError; raise In → raise InvalidMobileNumberError; run; message; run; () → plain class, UML out; run TypeError takes no arguments; message removed; run TypeError must derive from BaseException |
| g4-a | 123.7 | S30–S35 | menu typed; run pasta → NameError; ItemNotInMenuError class + raise with message; run; try / except ... as e: print(e); run → Item not present in menu |
| g5-a | 175.7 | S36–S39 | Sign up page slides in; Pythonfan / 9975268922 / ********** typed; DuplicateUserError; WeakPasswordError |
| g6-a | 191.7 | S40–S67 | class User built line by line exactly as the storyboard (user_name.add corrected to User.user_name.add, 'else' typed then removed, scrolls to each scene's top line), main(), WeakPasswordError class, try / 3 excepts / else, main() |
| g7-a | 306.7 | S68–S77 | memory view: Stack / Class variable / Heap; main() frame values; __init__ frame + object 1000; self → 1000; __dict__; 'Pythonfan' flies into user_name; validate() frame counters + self; panel shrinks, pwd strip, ring walks #rooman123 (sp 1, lc 6, num 3); WeakPasswordError burst; scroll to main() |
| g8-a | 353.9 | S78–S81 | main() code; u2 = User(...) typed; pythonfan / un → 'pythonfan'; run → Enter Username / Mobile / Password, Username already exist; hold |

Skipped (pauses only): S01 logo sting, presenter, matrix monitor prompt / `cls`, highlight boxes (approved rule: no highlighting
except the neon edit bar), the S78 empty prompt.
Normalisations: errors show the last traceback line only (red); the storyboard's counter label 'up' is shown as `uc`
(the code's name); TimeOutError shown as Python's real `TimeoutError`.
