/* GENERATED from kit-src/ by build.py - edit kit-src, then rebuild */
(function(){if(document.getElementById('k-kit-css'))return;var s=document.createElement('style');s.id='k-kit-css';s.textContent="/* ============================================================================\n   Decorators in Python \u2014 shared design kit (video-10)\n   Black stage, jewel-tone colour coding, soft 3-D depth.\n   Colour meaning is fixed for the whole video:\n     orange  = the decorator / outer layer        teal   = inner / wrapper\n     violet  = the original function              pink   = the decorated name / ref\n     blue    = power_of / middle layer            amber  = notes, conditions\n     green   = good output / \"no\" branch          red    = errors\n   ========================================================================== */\n.k-stage { position: absolute; inset: 0; }\n.k-layer { position: absolute; left: 0; top: 0; transform-origin: 0 0; }\n.k-svg { position: absolute; left: 0; top: 0; overflow: visible; pointer-events: none; }\n\n/* colour channels: --c is \"r, g, b\" so rgba(var(--c), a) works, --ch is the solid hue */\n.c-orange { --c: 255, 158, 100; --ch: #ff9e64; --cd: #7a3a12; }\n.c-teal   { --c: 61, 220, 190;  --ch: #3ddcbe; --cd: #0f5a4d; }\n.c-neon   { --c: 234, 255, 0;   --ch: #eaff00; --cd: #5c6600; }\n.c-violet { --c: 180, 150, 255; --ch: #b496ff; --cd: #43307e; }\n.c-pink   { --c: 255, 107, 154; --ch: #ff6b9a; --cd: #7a1f3d; }\n.c-blue   { --c: 122, 162, 247; --ch: #7aa2f7; --cd: #22407e; }\n.c-amber  { --c: 255, 199, 119; --ch: #ffc777; --cd: #7a5612; }\n.c-green  { --c: 110, 231, 160; --ch: #6ee7a0; --cd: #16603a; }\n.c-red    { --c: 255, 95, 109;  --ch: #ff5f6d; --cd: #7a1620; }\n.c-white  { --c: 200, 211, 245; --ch: #e6ebff; --cd: #2a3450; }\n\n/* ---------- type ---------- */\n.k-sans { font-family: \"Nunito\", \"Segoe UI\", sans-serif; }\n.k-mono { font-family: \"JetBrains Mono\", Consolas, monospace; font-variant-ligatures: none; }\n.k-3d {\n  text-shadow: 0 -1px 0 rgba(255, 255, 255, 0.22), 0 2px 0 rgba(0, 0, 0, 0.7),\n               0 4px 0 rgba(0, 0, 0, 0.5), 0 10px 18px rgba(0, 0, 0, 0.65);\n}\n.k-3d-soft { text-shadow: 0 2px 0 rgba(0, 0, 0, 0.6), 0 6px 12px rgba(0, 0, 0, 0.55); }\n.k-ch { display: inline-block; white-space: pre; }\n\n/* ---------- section header ---------- */\n.k-head { position: absolute; left: 64px; top: 38px; height: 76px; display: flex; align-items: center; gap: 22px; }\n.k-badge {\n  width: 66px; height: 66px; border-radius: 50%; flex: none;\n  display: flex; align-items: center; justify-content: center;\n  font-family: \"Nunito\", \"Segoe UI\", sans-serif; font-weight: 800; font-size: 36px; color: #10131c;\n  background: radial-gradient(circle at 35% 30%, #fff7e6, #ffc777 45%, #e08a2c 100%);\n  box-shadow: inset 0 -4px 0 rgba(0, 0, 0, 0.25), 0 5px 0 #6b3c0c, 0 14px 26px rgba(0, 0, 0, 0.6);\n}\n.k-htitle {\n  font-family: \"Nunito\", \"Segoe UI\", sans-serif; font-weight: 800; font-size: 50px; color: #f4f6ff;\n  white-space: pre; letter-spacing: 0.01em;\n}\n\n/* ---------- windows (code + output) ---------- */\n.k-win { position: absolute; transform-origin: 0 0; border-radius: 20px; }\n.k-win-body {\n  position: absolute; inset: 0; border-radius: 20px; overflow: hidden;\n  background: #101b2c; box-shadow: none;\n}\n.k-win-panel { position: absolute; left: 8px; top: 63px; right: 8px; bottom: 8px; border-radius: 10px; background: #101b2c; border: 1.5px solid #26344b; }\n.k-win-art { position: absolute; left: 22px; top: 11px; height: 37.6px; }\n.k-win.k-out .k-win-body { background: #0c1620; }\n.k-win.k-out .k-win-panel { background: #0c1620; border-color: #1f2c3d; }\n.k-win-bar { position: absolute; left: 0; top: 0; right: 0; height: 60px; background: #1b2536; border-bottom: 1.5px solid #2a3649; }\n.k-win.k-out .k-win-bar { background: #16202c; border-bottom-color: #222e3e; }\n.k-dot { position: absolute; top: 20px; width: 18px; height: 18px; border-radius: 50%; }\n.k-dot1 { left: 24px; background: #ff5f57; box-shadow: inset 0 -2px 0 rgba(0,0,0,.25); }\n.k-dot2 { left: 52px; background: #febc2e; box-shadow: inset 0 -2px 0 rgba(0,0,0,.25); }\n.k-dot3 { left: 80px; background: #28c840; box-shadow: inset 0 -2px 0 rgba(0,0,0,.25); }\n.k-win-title {\n  position: absolute; left: 118px; top: 0; height: 58px; line-height: 58px;\n  font-family: \"JetBrains Mono\", Consolas, monospace; font-size: 24px; color: #9aa6c4; white-space: pre;\n}\n.k-win-dash { position: absolute; left: -17px; top: -17px; width: calc(100% + 34px); height: calc(100% + 34px); overflow: visible; }\n.k-win-dash rect {\n  x: 1.5px; y: 1.5px; width: calc(100% - 3px); height: calc(100% - 3px); rx: 36px;\n  fill: none; stroke: rgba(255, 255, 255, 0.85); stroke-width: 3; stroke-dasharray: 3 13; stroke-linecap: round;\n}\n.k-code {\n  position: absolute; left: 26px; top: 76px;\n  font-family: \"JetBrains Mono\", Consolas, monospace; font-variant-ligatures: none;\n  font-weight: 500; color: #ffffff;\n}\n.k-line { position: absolute; left: 0; white-space: pre; }\n.k-line > span { white-space: pre; }\n.k-win.k-out .k-code { color: #ffffff; font-weight: 500; }\n\n/* syntax colours (approved palette + fn names + decorators) */\n.t-kw  { color: #c099ff; }\n.t-str { color: #e0c78b; font-style: italic; }\n.t-num { color: #f5a97f; }\n.t-bi  { color: #8fb3ff; }\n.t-fn  { color: #8fb3ff; }\n.t-self { color: #d48fcf; }\n.t-com { color: #a6a6a6; font-style: italic; }\n.t-dec { color: #e3d55a; }\n.t-op  { color: #ffffff; }\n.o-ok  { color: #ffffff; }\n.o-err { color: #ff6b6b; }\n.o-dim { color: #7a849e; font-style: italic; }\n.o-amb { color: #ffc777; }\n\n/* token ring: the storyboard's outlined token, glowing */\n.k-ring {\n  position: absolute; border-radius: 6px; border: none; border-left: 6px solid var(--ch);\n  background: rgba(var(--c), 0.24); box-shadow: none; pointer-events: none;\n}\n.k-line > span { position: relative; }\n/* line highlight bar */\n.k-bar { position: absolute; left: -14px; border-radius: 8px; background: rgba(var(--c), 0.16); border-left: 6px solid var(--ch); }\n\n/* ---------- memory boxes ---------- */\n.k-var { position: absolute; }\n.k-var-label {\n  position: absolute; left: 2px; bottom: 100%; margin-bottom: 8px; white-space: pre;\n  font-family: \"Nunito\", \"Segoe UI\", sans-serif; font-weight: 800; font-size: 30px; color: var(--ch);\n}\n.k-var-box {\n  position: absolute; inset: 0; border-radius: 14px; border: 3px solid var(--ch);\n  display: flex; align-items: center; justify-content: center;\n  font-family: \"JetBrains Mono\", Consolas, monospace; font-weight: 500; font-size: 34px; color: #ffffff;\n  background: linear-gradient(180deg, color-mix(in srgb, var(--ch) 46%, #182030), color-mix(in srgb, var(--ch) 22%, #0c121d));\n  box-shadow: inset 0 3px 0 rgba(255, 255, 255, 0.28), inset 0 -4px 0 rgba(0, 0, 0, 0.35), 0 3px 0 var(--cd), 0 6px 0 var(--cd), 0 9px 0 var(--cd), 0 11px 0 rgba(0, 0, 0, 0.65), 0 24px 30px rgba(0, 0, 0, 0.6);\n  text-shadow: 0 2px 0 rgba(0, 0, 0, 0.6), 0 4px 0 rgba(0, 0, 0, 0.35);\n}\n.k-obj {\n  position: absolute; border-radius: 26px; border: 3px solid var(--ch);\n  background: linear-gradient(180deg, color-mix(in srgb, var(--ch) 26%, #141c2b), color-mix(in srgb, var(--ch) 10%, #0b111b));\n  box-shadow: inset 0 3px 0 rgba(255, 255, 255, 0.28), inset 0 -4px 0 rgba(0, 0, 0, 0.35), 0 3px 0 var(--cd), 0 6px 0 var(--cd), 0 9px 0 var(--cd), 0 11px 0 rgba(0, 0, 0, 0.65), 0 24px 30px rgba(0, 0, 0, 0.6);\n}\n.k-obj-title {\n  position: absolute; left: 24px; top: 16px; white-space: pre;\n  font-family: \"Nunito\", \"Segoe UI\", sans-serif; font-weight: 800; font-size: 30px; color: var(--ch);\n}\n.k-obj-code {\n  position: absolute; left: 24px; top: 62px; white-space: pre;\n  font-family: \"JetBrains Mono\", Consolas, monospace; font-variant-ligatures: none;\n  font-size: 25px; line-height: 36px; color: #c8d3f5;\n}\n\n/* ---------- panel, note, chip, table, diamond ---------- */\n.k-panel {\n  position: absolute; border-radius: 28px;\n  background: linear-gradient(180deg, #0c111b, #090d15);\n  border: 1.5px solid #1f2838;\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04), 0 30px 70px rgba(0, 0, 0, 0.6);\n}\n.k-note {\n  position: absolute; border-radius: 18px; padding: 22px 28px 22px 34px;\n  background: linear-gradient(160deg, rgba(var(--c), 0.16), rgba(var(--c), 0.05));\n  border: 1.5px solid rgba(var(--c), 0.35);\n  box-shadow: inset 6px 0 0 var(--ch), 0 8px 0 rgba(0, 0, 0, 0.55), 0 20px 40px rgba(0, 0, 0, 0.55);\n  font-family: \"Nunito\", \"Segoe UI\", sans-serif; font-weight: 600; font-size: 30px; line-height: 42px; color: #e9edf8;\n}\n.k-note b { color: var(--ch); font-weight: 800; }\n.k-note code, .k-cap code, .k-sum code {\n  font-family: \"JetBrains Mono\", Consolas, monospace; font-size: 0.88em; color: #ffffff;\n  background: rgba(255, 255, 255, 0.08); border-radius: 6px; padding: 0 6px;\n}\n.k-cap {\n  position: absolute; font-family: \"Nunito\", \"Segoe UI\", sans-serif; font-weight: 600;\n  font-size: 30px; line-height: 42px; color: #b9c2d8;\n}\n.k-cap b { color: #ffffff; font-weight: 800; }\n.k-chip {\n  position: absolute; border-radius: 16px; border: 3px solid var(--ch);\n  padding: 10px 22px; text-align: center; white-space: pre;\n  background: linear-gradient(180deg, color-mix(in srgb, var(--ch) 46%, #182030), color-mix(in srgb, var(--ch) 22%, #0c121d));\n  box-shadow: inset 0 3px 0 rgba(255, 255, 255, 0.28), inset 0 -4px 0 rgba(0, 0, 0, 0.35), 0 3px 0 var(--cd), 0 6px 0 var(--cd), 0 9px 0 var(--cd), 0 11px 0 rgba(0, 0, 0, 0.65), 0 24px 30px rgba(0, 0, 0, 0.6);\n}\n.k-chip-main { font-family: \"JetBrains Mono\", Consolas, monospace; font-weight: 600; font-size: 30px; line-height: 40px; color: #ffffff;\n  text-shadow: 0 2px 0 rgba(0, 0, 0, 0.6), 0 4px 0 rgba(0, 0, 0, 0.35); }\n.k-chip-sub { font-family: \"Nunito\", \"Segoe UI\", sans-serif; font-weight: 700; font-size: 21px; line-height: 28px; color: #e8ecf6; text-shadow: 0 2px 0 rgba(0, 0, 0, 0.5); }\n.k-table {\n  position: absolute; border-radius: 20px; overflow: hidden;\n  border: 2px solid #2a3650; background: #0b1019;\n  box-shadow: 0 8px 0 #04060a, 0 30px 60px rgba(0, 0, 0, 0.6);\n}\n.k-tr { position: absolute; left: 0; right: 0; display: flex; align-items: center; }\n.k-th { background: linear-gradient(180deg, #1c2740, #151d30); border-bottom: 2px solid #2a3650; }\n.k-th .k-td { font-family: \"Nunito\", \"Segoe UI\", sans-serif; font-weight: 800; font-size: 28px; color: #ffffff; }\n.k-td { padding: 0 24px; font-family: \"JetBrains Mono\", Consolas, monospace; font-size: 26px; line-height: 34px; color: #dfe5f5; white-space: pre; flex: none; }\n.k-tr.k-row + .k-tr.k-row { border-top: 1.5px solid #1c2538; }\n.k-pill {\n  display: inline-block; border-radius: 999px; padding: 2px 14px; font-size: 22px; font-weight: 700;\n  font-family: \"JetBrains Mono\", Consolas, monospace;\n  color: var(--ch); background: rgba(var(--c), 0.16); border: 1.5px solid rgba(var(--c), 0.5);\n}\n.k-diamond {\n  position: absolute; transform-origin: 50% 50%;\n}\n.k-diamond-shape {\n  position: absolute; inset: 0; transform: rotate(45deg) scale(0.7071); border-radius: 14px;\n  border: 3px solid var(--ch);\n  background: linear-gradient(135deg, rgba(var(--c), 0.24), rgba(var(--c), 0.06));\n  box-shadow: 0 6px 0 var(--cd), 0 14px 26px rgba(0, 0, 0, 0.55);\n}\n.k-diamond-text {\n  position: absolute; inset: 0; display: flex; align-items: center; justify-content: center;\n  font-family: \"JetBrains Mono\", Consolas, monospace; font-size: 28px; color: #ffffff; white-space: pre;\n}\n.k-sum {\n  position: absolute; border-radius: 30px; padding: 46px 60px;\n  background: linear-gradient(170deg, #141c2e, #0c1220);\n  border: 2px solid #26324b;\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.06), 0 12px 0 #05080e, 0 40px 90px rgba(0, 0, 0, 0.7);\n  font-family: \"Nunito\", \"Segoe UI\", sans-serif; color: #e9edf8;\n}\n.k-sum code { color: #ffc777; }\n\n/* pointer: a glowing chevron that glides to a target and taps it */\n.k-pointer { position: absolute; width: 56px; height: 56px; transform-origin: 50% 50%; pointer-events: none; }\n\n/* video-12: no section headings, no explanation boxes */\n.k-head, .k-note, .k-cap { display: none !important; }\n/* video-12: no pointer marks while highlighting */\n.k-pointer { display: none !important; }\n/* video-12: no code / output highlighting */\n.k-ring, .k-bar { display: none !important; }\n\n/* video-12: boxes in the user's glossy style (gl-frame-*.png, nine-sliced), white 3-D lettering */\n.k-chip, .k-obj, .k-var-box {\n  background: none !important; border: none !important; border-radius: 0 !important; box-shadow: none !important;\n}\n.k-chip::before, .k-obj::before, .k-var-box::before {\n  content: \"\"; position: absolute; inset: 0; pointer-events: none;\n  border: 32px solid transparent; border-image: url(\"assets/gl-frame-violet.png\") 90 fill stretch;\n}\n.k-chip > *, .k-obj > *, .k-var-box > * { position: relative; }\n.c-teal::before   { filter: hue-rotate(-95deg); }\n.c-blue::before   { filter: hue-rotate(-40deg); }\n.c-green::before  { filter: hue-rotate(-125deg); }\n.c-white::before, .c-grey::before { filter: saturate(0.25); }\n.c-pink::before, .c-orange::before, .c-amber::before, .c-red::before { border-image-source: url(\"assets/gl-frame-pink.png\") !important; }\n.c-orange::before { filter: hue-rotate(40deg); }\n.c-amber::before  { filter: hue-rotate(55deg); }\n.c-red::before    { filter: hue-rotate(18deg); }\n.k-chip { display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 0 30px !important; }\n.k-chip-main, .k-obj-title, .k-var-box {\n  font-family: \"Nunito\", \"Segoe UI\", sans-serif !important; font-weight: 800 !important; color: #ffffff !important;\n  text-shadow: 0 2px 0 #d8ccf6, 0 4px 0 #9c8ad8, 0 8px 10px rgba(0, 0, 0, 0.45) !important;\n}\n.k-chip-main span { color: #ffffff !important; }\n.k-chip-sub {\n  font-family: \"Nunito\", \"Segoe UI\", sans-serif !important; font-weight: 800 !important; color: #efe4ff !important;\n  text-shadow: 0 2px 0 rgba(110, 80, 180, 0.85), 0 5px 8px rgba(0, 0, 0, 0.4) !important;\n}\n.k-obj-title { left: 40px !important; top: 26px !important; }\n.k-obj-code { left: 40px !important; top: 66px !important; color: #ffffff !important; }\n/* the user's glossy arrow for straight box-to-box arrows */\n.k-glarrow { position: absolute; background: url(\"assets/gl-arrow.png\") center / contain no-repeat; pointer-events: none; }\n/* roomier glossy boxes: taller, centred on their old position, larger lettering */\n.k-chip { min-height: 140px; margin-top: -22px; padding: 18px 26px !important; gap: 2px; }\n.k-chip-main { font-size: 34px !important; line-height: 42px !important;\n  text-shadow: 0 2px 0 #cbbdf0, 0 3px 0 #8f7ccf, 0 6px 8px rgba(0, 0, 0, 0.4) !important; }\n.k-chip-sub { font-size: 28px !important; line-height: 34px !important; }\n.k-obj-title { font-size: 34px !important; text-shadow: 0 2px 0 #cbbdf0, 0 3px 0 #8f7ccf, 0 6px 8px rgba(0, 0, 0, 0.4) !important; }\n/* the one highlight kept: the line being edited inside existing code */\n.k-ring.k-edit { display: block !important; }\n/* video-12: no bold anywhere - every text at normal weight, and no heavy stacked text edges */\n.k-stage *, [data-composition-id] * { font-weight: 400 !important; }\n.k-chip-main, .k-obj-title, .k-var-box, .g2-gb, .g5-cover {\n  text-shadow: 0 1px 0 rgba(203, 189, 240, 0.7), 0 3px 5px rgba(0, 0, 0, 0.45) !important;\n}\n.k-chip-sub { text-shadow: 0 2px 4px rgba(0, 0, 0, 0.45) !important; }\n.k-3d, .k-3d-soft { text-shadow: 0 3px 6px rgba(0, 0, 0, 0.5) !important; }\n/* normal-weight lettering, a size up to stay readable */\n.k-chip-main { font-size: 38px !important; line-height: 46px !important; }\n.k-chip-sub { font-size: 26px !important; line-height: 32px !important; }\n.g4-ch .k-chip-main { font-size: 29px !important; line-height: 36px !important; }\n.g4-ch .k-chip-sub { font-size: 23px !important; }\n.g2-mg .k-chip-main { font-size: 34px !important; line-height: 42px !important; }\n.g2-gb { font-size: 33px !important; }\n/* larger normal-weight box lettering */\n.k-chip-main { font-size: 42px !important; line-height: 50px !important; }\n.k-chip-sub { font-size: 28px !important; line-height: 34px !important; }\n.g2-mg .k-chip-main { font-size: 38px !important; line-height: 46px !important; }\n";(document.head||document.documentElement).appendChild(s);})();
/* ============================================================================
   Decorators in Python — shared motion + layout kit (video-10).
   Every scene composition calls K.make(rootEl, tl) and builds with the returned ctx.
   All motion is seek-safe: elements start hidden as static DOM state (set at build
   time, not on the timeline) and every tween is a fromTo with immediateRender:false.
   ========================================================================== */
(function () {
  if (window.K) return;

  var CHAR = 0.07, NEWLINE = 0.22, OUT_CHAR = 0.03;
  var KW = { def: 1, return: 1, if: 1, else: 1, elif: 1, for: 1, in: 1, lambda: 1, not: 1, and: 1, or: 1,
             True: 1, False: 1, None: 1, class: 1, while: 1, import: 1, from: 1, pass: 1, try: 1, except: 1, finally: 1, raise: 1, as: 1 };
  var BI = { property: 1, print: 1, input: 1, set: 1, isupper: 1, islower: 1, isdigit: 1, add: 1, list: 1, map: 1, len: 1, range: 1, zip: 1, int: 1, str: 1, tuple: 1, set: 1, dict: 1, append: 1 };

  // ---- a tiny Python highlighter: "def outer(ref):" -> [[cls, text], ...] ----
  function py(src) {
    var out = [], i = 0, prevWord = "";
    function push(c, t) { if (t) out.push([c, t]); }
    while (i < src.length) {
      var ch = src[i], rest = src.slice(i), m;
      if (ch === "#") { push("t-com", rest); break; }
      if (ch === "'" || ch === '"') {
        var j = src.indexOf(ch, i + 1); if (j < 0) j = src.length - 1;
        push("t-str", src.slice(i, j + 1)); i = j + 1; continue;
      }
      if (ch === "@" && (m = /^@[A-Za-z_]\w*/.exec(rest))) { push("t-dec", m[0]); i += m[0].length; continue; }
      if ((m = /^\d+(\.\d+)?/.exec(rest)) && !/[\w]/.test(src[i - 1] || "")) { push("t-num", m[0]); i += m[0].length; continue; }
      if ((m = /^[A-Za-z_]\w*/.exec(rest))) {
        var w = m[0], cls = "";
        if (KW[w]) cls = "t-kw";
        else if (prevWord === "def" || prevWord === "class") cls = "t-fn";
        else if (w === "self") cls = "t-self";
        else if (BI[w] && (src[i + w.length] === "(" || src[i + w.length] === ")")) cls = "t-bi";
        push(cls, w); prevWord = w; i += w.length; continue;
      }
      if (ch !== " ") prevWord = (prevWord === "def" || prevWord === "class") ? "" : prevWord;
      push("", ch); i++;
    }
    return out;
  }

  function make(root, tl) {
    root.style.top = "-56px"; root.style.bottom = "56px";
    // Dead-time squeeze: once the scene is built (after the windows' own sizing microtasks),
    // any stretch longer than GAP seconds in which nothing VISIBLE changes is cut down to KEEP
    // seconds, and everything after it moves earlier. Deterministic; the cut is reported on
    // window.__hfSqueeze[compositionId] so data-duration can be set to match.
    (function () {
      var GAP = 2.0, KEEP = 1.0;
      function rendered(e) {
        if (!e || !e.getClientRects) return true;
        var m = e.closest ? e.closest("mask") : null; if (m) e = m.parentNode;
        return e.getClientRects().length > 0;
      }
      Promise.resolve().then(function () {}).then(function () {
        var kids = tl.getChildren(false, true, true), iv = [];
        kids.forEach(function (c) {
          var tg = c.targets ? c.targets() : [];
          if (tg.length && !tg.some(rendered)) return;
          iv.push([c.startTime(), Math.max(c.endTime(), c.startTime() + 0.05)]);
        });
        iv.sort(function (a, b) { return a[0] - b[0]; });
        var cuts = [], end = iv.length ? iv[0][1] : 0;
        for (var i = 1; i < iv.length; i++) {
          if (iv[i][0] - end > GAP) cuts.push([iv[i][0], iv[i][0] - end - KEEP]);
          end = Math.max(end, iv[i][1]);
        }
        var dur = parseFloat(root.getAttribute("data-duration")) || end, tail = dur - end, total = 0;
        if (cuts.length) {
          kids.forEach(function (c) {
            var s = c.startTime(), sh = 0;
            cuts.forEach(function (g) { if (s >= g[0] - 1e-6) sh += g[1]; });
            if (sh) c.startTime(s - sh);
          });
        }
        cuts.forEach(function (g) { total += g[1]; });
        var id = root.getAttribute("data-composition-id");
        window.__hfSqueeze = window.__hfSqueeze || {};
        window.__hfSqueeze[id] = { cuts: cuts.map(function (g) { return [+g[0].toFixed(2), +g[1].toFixed(2)]; }), total: +total.toFixed(2),
          lastEnd: +(end - total).toFixed(2), newDuration: +((end - total) + Math.min(tail, KEEP)).toFixed(2), oldDuration: dur };
      });
    })();
    var IR = { immediateRender: false };
    function ex(o) { o.immediateRender = false; return o; }

    function el(tag, cls, css, html, parent) {
      var d = document.createElement(tag || "div");
      if (cls) d.className = cls;
      if (css) d.style.cssText = css;
      if (html != null) d.innerHTML = html;
      (parent || root).appendChild(d);
      return d;
    }
    function hide(e) { e.style.opacity = "0"; e.style.visibility = "hidden"; return e; }
    function list(x) { return Array.isArray(x) ? x : [x]; }

    // ---------------- motion primitives ----------------
    function fade(e, at, dur) {
      tl.fromTo(e, { autoAlpha: 0 }, ex({ autoAlpha: 1, duration: dur || 0.4, ease: "power1.out" }), at);
      return at + (dur || 0.4);
    }
    function out(els, at, dur) {
      list(els).forEach(function (e) {
        tl.fromTo(e, { autoAlpha: 1 }, ex({ autoAlpha: 0, duration: dur || 0.45, ease: "power1.inOut" }), at);
      });
      return at + (dur || 0.45);
    }
    // Pop with squash & stretch: scale up stretched, overshoot squashed, settle elastic.
    function pop(e, at, o) {
      o = o || {};
      tl.fromTo(e, { autoAlpha: 0 }, ex({ autoAlpha: 1, duration: 0.15, ease: "none" }), at);
      tl.fromTo(e, { scaleX: 0.35, scaleY: 0.5 }, ex({ scaleX: 1.08, scaleY: 0.93, duration: 0.28, ease: "power3.out" }), at);
      tl.fromTo(e, { scaleX: 1.08, scaleY: 0.93 }, ex({ scaleX: 1, scaleY: 1, duration: 0.6, ease: "power2.out" }), at + 0.28);
      return at + (o.hold || 0.5);
    }
    // Drop in from above: stretched while falling, squash on impact, spring back.
    function land(e, at, o) {
      o = o || {};
      var h = o.from == null ? 110 : o.from;
      e.style.transformOrigin = o.origin || "50% 100%";
      tl.fromTo(e, { autoAlpha: 0 }, ex({ autoAlpha: 1, duration: 0.14, ease: "power1.out" }), at);
      tl.fromTo(e, { y: -h, scaleX: 0.82, scaleY: 1.22 }, ex({ y: 0, scaleX: 1.14, scaleY: 0.84, duration: 0.3, ease: "power2.in" }), at);
      tl.fromTo(e, { scaleX: 1.14, scaleY: 0.84 }, ex({ scaleX: 1, scaleY: 1, duration: 0.7, ease: "power2.out" }), at + 0.3);
      return at + 0.55;
    }
    // Rise: fade up from below (calm entrance for text blocks).
    function rise(e, at, o) {
      o = o || {};
      tl.fromTo(e, { autoAlpha: 0, y: o.dy == null ? 28 : o.dy }, ex({ autoAlpha: 1, y: 0, duration: o.dur || 0.55, ease: "power3.out" }), at);
      return at + (o.dur || 0.55);
    }
    // Wipe: reveal left to right (for panels, bars, tables).
    function wipe(e, at, dur) {
      tl.fromTo(e, { autoAlpha: 1, scaleX: 0, transformOrigin: "0% 50%" }, ex({ scaleX: 1, duration: dur || 0.6, ease: "power2.inOut" }), at);   // no clipPath: Studio does not play it
      return at + (dur || 0.6);
    }
    // Bump: a squash pulse to draw the eye to something already on screen.
    function bump(e, at, k) {
      return at;   // video-12: no pulse / shake effects anywhere
      k = k || 1.12;
      tl.fromTo(e, { scaleX: 1, scaleY: 1 }, ex({ scaleX: k, scaleY: 2 - k, duration: 0.14, ease: "power2.out" }), at);
      tl.fromTo(e, { scaleX: k, scaleY: 2 - k }, ex({ scaleX: 1, scaleY: 1, duration: 0.6, ease: "power2.out" }), at + 0.14);
      return at + 0.5;
    }
    // Move / scale something on screen (match-move). to = {x, y, scale, ...}
    function move(e, from, to, at, dur, ease) {
      tl.fromTo(e, from, ex(Object.assign({ duration: dur || 0.8, ease: ease || "power3.inOut" }, to)), at);
      return at + (dur || 0.8);
    }
    function show(e, at, kind, o) {
      kind = kind || "rise";
      if (kind === "pop") return pop(e, at, o);
      if (kind === "land") return land(e, at, o);
      if (kind === "wipe") return wipe(e, at, o && o.dur);
      if (kind === "fade") return fade(e, at, o && o.dur);
      return rise(e, at, o);
    }

    // Split an element's text into per-character spans (keeps inner coloured spans).
    function splitChars(e) {
      var chars = [];
      (function walk(n) {
        Array.prototype.slice.call(n.childNodes).forEach(function (c) {
          if (c.nodeType === 3) {
            var frag = document.createDocumentFragment();
            for (var i = 0; i < c.textContent.length; i++) {
              var s = document.createElement("span");
              s.className = "k-ch";
              s.textContent = c.textContent[i];
              frag.appendChild(s); chars.push(s);
            }
            n.replaceChild(frag, c);
          } else if (c.nodeType === 1) walk(c);
        });
      })(e);
      return chars;
    }
    // Type a text element on, one character at a time (no caret).
    function typeText(e, at, per) {
      per = per || 0.035;
      var chars = e._chars || (e._chars = splitChars(e));
      chars.forEach(function (s) { hide(s); });
      if (e.style.visibility === "hidden") fade(e, at, 0.01);
      chars.forEach(function (s, i) { tl.fromTo(s, { autoAlpha: 0 }, ex({ autoAlpha: 1, duration: 0.01, ease: "none" }), at + i * per); });
      return at + chars.length * per;
    }
    // Headline letters bounce in with squash & stretch, staggered.
    function bounceText(e, at, stagger) {
      stagger = stagger || 0.035;
      var chars = e._chars || (e._chars = splitChars(e));
      chars.forEach(function (s, i) {
        s.style.transformOrigin = "50% 100%";
        var t = at + i * stagger;
        tl.fromTo(s, { autoAlpha: 0 }, ex({ autoAlpha: 1, duration: 0.12, ease: "none" }), t);
        tl.fromTo(s, { y: -46, scaleX: 0.75, scaleY: 1.35 }, ex({ y: 0, scaleX: 1.18, scaleY: 0.8, duration: 0.24, ease: "power2.in" }), t);
        tl.fromTo(s, { scaleX: 1.18, scaleY: 0.8 }, ex({ scaleX: 1, scaleY: 1, duration: 0.55, ease: "power2.out" }), t + 0.24);
      });
      return at + chars.length * stagger + 0.5;
    }

    // ---------------- layers ----------------
    function layer(o, parent) {
      o = o || {};
      var L = el("div", "k-layer", "left:" + (o.x || 0) + "px;top:" + (o.y || 0) + "px;width:" + (o.w || 1920) + "px;height:" + (o.h || 1080) + "px;", null, parent || root);
      L.setAttribute("data-layout-allow-overflow", "true");
      var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.setAttribute("class", "k-svg");
      svg.setAttribute("width", o.w || 1920); svg.setAttribute("height", o.h || 1080);
      svg.setAttribute("viewBox", "0 0 " + (o.w || 1920) + " " + (o.h || 1080));
      svg.innerHTML = "<defs></defs>";
      L.appendChild(svg);
      return api(L, svg);
    }

    var uid = 0, PFX = (root.getAttribute("data-composition-id") || "k") + "-";
    function api(host, svg) {
      var A = { el: host, svg: svg };
      function put(cls, x, y, w, h, html, color) {
        var css = "left:" + x + "px;top:" + y + "px;" + (w != null ? "width:" + w + "px;" : "") + (h != null ? "height:" + h + "px;" : "");
        var e = el("div", cls + (color ? " c-" + color : ""), css, html, host);
        e.setAttribute("data-layout-allow-overflow", "true");
        return hide(e);
      }
      A.put = put;
      // A labelled value box:  label above, value inside.   o = {x,y,w,h,label,value,color}
      A.varBox = function (o) {
        var e = put("k-var", o.x, o.y, o.w || 150, o.h || 66, '<div class="k-var-label">' + (o.label || "") + '</div><div class="k-var-box">' + o.value + "</div>", o.color || "orange");
        e.box = e.lastChild; e.label = e.firstChild;
        return e;
      };
      // An object / memory region.  o = {x,y,w,h,title,code:[lines],color}
      A.objBox = function (o) {
        var code = (o.code || []).map(function (s) { return s; }).join("\n");
        var e = put("k-obj", o.x, o.y, o.w, o.h, '<div class="k-obj-title">' + (o.title || "") + "</div>" + (code ? '<div class="k-obj-code">' + hl(code) + "</div>" : ""), o.color || "orange");
        e.title = e.firstChild;
        return e;
      };
      A.note = function (o) { return put("k-note", o.x, o.y, o.w, o.h, o.html, o.color || "amber"); };
      A.cap = function (o) { return put("k-cap", o.x, o.y, o.w, o.h, o.html); };
      A.chip = function (o) {
        var e = A._chip(o); if (o.w) { e.style.width = ""; e.style.minWidth = o.w + "px"; } return e;
      };
      A._chip = function (o) {
        return put("k-chip", o.x, o.y, o.w, o.h, '<div class="k-chip-main">' + esc(o.main) + "</div>" + (o.sub ? '<div class="k-chip-sub">' + o.sub + "</div>" : ""), o.color || "teal");
      };
      A.panel = function (o) { return put("k-panel", o.x, o.y, o.w, o.h, ""); };
      A.diamond = function (o) {
        return put("k-diamond", o.x, o.y, o.w || 200, o.h || 200, '<div class="k-diamond-shape"></div><div class="k-diamond-text">' + esc(o.text) + "</div>", o.color || "amber");
      };
      // Table: o = {x,y,cols:[w...], head:[...], rows:[[html...]], headH, rowH}
      A.table = function (o) {
        var headH = o.headH || 70, rowH = o.rowH || 74, W = o.cols.reduce(function (a, b) { return a + b; }, 0);
        var t = put("k-table", o.x, o.y, W, headH + rowH * o.rows.length, "");
        function row(cells, top, h, cls) {
          var r = el("div", "k-tr " + cls, "top:" + top + "px;height:" + h + "px;", null, t);
          cells.forEach(function (c, i) { el("div", "k-td", "width:" + o.cols[i] + "px;", c, r); });
          return r;
        }
        t.head = row(o.head, 0, headH, "k-th");
        t.rows = o.rows.map(function (cells, i) { return hide(row(cells, headH + i * rowH, rowH, "k-row")); });
        // the frame wipes on with its header; rows come later with t.showRow
        return t;
      };
      A.showTable = function (t, at) { return wipe(t, at, 0.6); };
      A.showRow = function (t, i, at) { return rise(t.rows[i], at, { dy: 16, dur: 0.45 }); };

      // Arrow: path d in layer coords; drawn on through a mask so dashed arrows work too.
      // o = {d, color, dash:true|false, width, head:true}
      A.arrow = function (o) {
        var hm = /^M\s*([\d.]+)[\s,]+([\d.]+)\s*H\s*([\d.]+)\s*$/.exec(o.d);
        if (hm) {
          var x1 = +hm[1], y1 = +hm[2], x2 = +hm[3], L = Math.abs(x2 - x1), H = Math.min(L * 0.65, 64);
          var im = hide(el("div", "k-glarrow", "left:" + Math.min(x1, x2) + "px;top:" + (y1 - H / 2) + "px;width:" + L + "px;height:" + H + "px;" +
            (x2 < x1 ? "transform:scaleX(-1);" : ""), null, host));
          return { g: im, img: im };
        }
        var id = PFX + "a" + (++uid);
        var col = "#4fd1ff";   // video-12: every arrow is smooth sky blue
        var w = o.width || 4; o.dash = false;
        var g = document.createElementNS("http://www.w3.org/2000/svg", "g");
        g.setAttribute("id", id);
        g.innerHTML =
          '<mask id="' + id + 'm" maskUnits="userSpaceOnUse" x="-2000" y="-2000" width="6000" height="6000">' +
          '<path d="' + o.d + '" fill="none" stroke="#fff" stroke-width="' + (w + 18) + '" stroke-linecap="round"/></mask>' +
          '<path d="' + o.d + '" fill="none" stroke="#0a5a86" stroke-width="' + (w + 5) + '" stroke-linecap="round" transform="translate(0 3)" mask="url(#' + id + 'm)"/>' +
          '<path d="' + o.d + '" fill="none" stroke="#c9f2ff" stroke-width="1.6" stroke-linecap="round" transform="translate(0 -1.5)" mask="url(#' + id + 'm)" opacity="0.9"/>' +
          '<path d="' + o.d + '" fill="none" stroke="' + col + '" stroke-width="' + (w + 2) + '" stroke-linecap="round" mask="url(#' + id + 'm)" style="filter: drop-shadow(0 4px 3px rgba(0,0,0,.6))"/>';
        svg.appendChild(g);
        var mp = g.querySelector("mask path"), vis = g.lastChild;  // the bright core path
        var len = Math.ceil(vis.getTotalLength()) + 2;
        mp.setAttribute("stroke-dasharray", len + " " + len);
        mp.setAttribute("stroke-dashoffset", len);
        var head = null;
        if (o.head !== false) {
          var p1 = vis.getPointAtLength(len - 2), p0 = vis.getPointAtLength(Math.max(0, len - 14));
          var a = Math.atan2(p1.y - p0.y, p1.x - p0.x), s = o.headSize || 17;
          var tip = { x: p1.x + Math.cos(a) * 4, y: p1.y + Math.sin(a) * 4 };
          var pts = [tip, { x: tip.x - Math.cos(a) * s * 1.5 + Math.sin(a) * s, y: tip.y - Math.sin(a) * s * 1.5 - Math.cos(a) * s },
                     { x: tip.x - Math.cos(a) * s * 1.5 - Math.sin(a) * s, y: tip.y - Math.sin(a) * s * 1.5 + Math.cos(a) * s }];
          head = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
          head.setAttribute("points", pts.map(function (p) { return p.x.toFixed(1) + "," + p.y.toFixed(1); }).join(" "));
          head.setAttribute("fill", col);
          head.setAttribute("style", "filter: drop-shadow(0 3px 0 #0a5a86) drop-shadow(0 5px 4px rgba(0,0,0,.6))"); head.setAttribute("stroke", "#c9f2ff"); head.setAttribute("stroke-width", "1.2");
          head.setAttribute("opacity", "0");
          g.appendChild(head);
        }
        return { g: g, mask: mp, head: head, len: len };
      };
      A.draw = function (ar, at, dur) {
        dur = dur || 0.6;
        if (ar.img) {
          tl.fromTo(ar.img, { autoAlpha: 0, scaleX: 0, transformOrigin: (ar.img.style.transform.indexOf("scaleX(-1)") >= 0 ? "100% 50%" : "0% 50%") }, ex({ autoAlpha: 1, scaleX: ar.img.style.transform.indexOf("scaleX(-1)") >= 0 ? -1 : 1, duration: dur, ease: "power2.out" }), at);
          return at + dur + 0.2;
        }
        tl.fromTo(ar.mask, { attr: { "stroke-dashoffset": ar.len } }, ex({ attr: { "stroke-dashoffset": 0 }, duration: dur, ease: "power2.inOut" }), at);
        if (ar.head) tl.fromTo(ar.head, { opacity: 0, scale: 0.2, transformOrigin: "50% 50%" }, ex({ opacity: 1, scale: 1, duration: 0.3, ease: "back.out(3)" }), at + dur - 0.08);
        return at + dur + 0.2;
      };
      A.undraw = function (ar, at, dur) {
        tl.fromTo(ar.g, { opacity: 1 }, ex({ opacity: 0, duration: dur || 0.4, ease: "power1.inOut" }), at);
        return at + (dur || 0.4);
      };
      // Pointer: a glowing chevron that glides in from `from` to point at (x, y) and taps.
      // dir = the way the pointer faces: "right" (default), "left", "down", "up".
      A.pointer = function (o) {
        var rot = { right: 0, down: 90, left: 180, up: 270 }[o.dir || "right"];
        var col = COLORS[o.color || "amber"] || o.color;
        var p = put("k-pointer", o.x - 56, o.y - 28, 56, 56,
          '<svg width="56" height="56" viewBox="0 0 56 56" style="overflow:visible;transform:rotate(' + rot + 'deg);filter:drop-shadow(0 3px 0 rgba(0,0,0,.6)) drop-shadow(0 8px 8px rgba(0,0,0,.5))">' +
          '<path d="M6 8 L50 28 L6 48 L16 28 Z" fill="' + col + '" stroke="#fff" stroke-width="2" stroke-linejoin="round"/></svg>');
        if (o.dir === "left") { p.style.left = o.x + "px"; }
        if (o.dir === "down") { p.style.left = (o.x - 28) + "px"; p.style.top = (o.y - 56) + "px"; }
        if (o.dir === "up") { p.style.left = (o.x - 28) + "px"; p.style.top = o.y + "px"; }
        return p;
      };
      A.point = function (p, at, o) {
        o = o || {};
        var dir = o.dir || "right", d = 70;
        var off = { right: { x: -d, y: 0 }, left: { x: d, y: 0 }, down: { x: 0, y: -d }, up: { x: 0, y: d } }[dir];
        var tap = { right: { x: 10, y: 0 }, left: { x: -10, y: 0 }, down: { x: 0, y: 10 }, up: { x: 0, y: -10 } }[dir];
        tl.fromTo(p, { autoAlpha: 0 }, ex({ autoAlpha: 1, duration: 0.2, ease: "none" }), at);
        tl.fromTo(p, { x: off.x, y: off.y }, ex({ x: 0, y: 0, duration: 0.5, ease: "power3.out" }), at);
        tl.fromTo(p, { x: 0, y: 0 }, ex({ x: tap.x, y: tap.y, duration: 0.16, ease: "power2.in", yoyo: true, repeat: 3 }), at + 0.55);
        return at + 1.2;
      };
      return A;
    }

    // ---------------- windows ----------------
    // o = {x, y, w, h, title, out:false, dash:false, font:30, lh:42, scale:1}
    function o0x(W) { return parseFloat(W.el.style.left) || 0; }
    function win(o) {
      var FS = o.font || 30, LH = o.lh || Math.round(FS * 1.4), CW = FS * 0.6;
      var w = el("div", "k-win" + (o.out ? " k-out" : ""), "left:" + o.x + "px;top:" + o.y + "px;width:" + o.w + "px;height:" + o.h + "px;", null);
      w.setAttribute("data-layout-allow-overflow", "true");
      if (o.dash || o.out) w.insertAdjacentHTML("beforeend", '<svg class="k-win-dash"><rect></rect></svg>');
      var body = el("div", "k-win-body", null, '<div class="k-win-bar"></div><div class="k-win-panel"></div><img class="k-win-art" alt="" src="assets/' + (o.out ? "output" : "code") + '-titlebar.webp">', w);
      var code = el("div", "k-code", "font-size:" + FS + "px;line-height:" + LH + "px;", null, body);
      if (o.scale) w.style.transform = "scale(" + o.scale + ")";
      hide(w);
      var W = { el: w, code: code, FS: FS, LH: LH, CW: CW, lines: [], row: 0, titleEl: body.querySelector(".k-win-title") };
      // Add one code line at row (rows: code line = 1, blank = 0.5). Hidden until typed / shown.
      W.add = function (text, row, opt) {
        opt = opt || {};
        var line = el("div", "k-line", "top:" + (row * LH) + "px;height:" + LH + "px;", null, code);
        var toks = o.out ? [[opt.cls || "", text]] : py(text);
        var chars = [];
        toks.forEach(function (t) {
          for (var i = 0; i < t[1].length; i++) {
            var s = document.createElement("span");
            if (t[0]) s.className = t[0];
            s.textContent = t[1][i];
            hide(s);
            line.appendChild(s); chars.push(s);
          }
        });
        var L = { el: line, chars: chars, row: row, text: text, showAt: Infinity, hideAt: Infinity, rows: [[-1e9, row]] };
        W.lines.push(L);
        return L;
      };
      // Add a block of lines; "" is a half-height blank line. Returns the line objects (blanks skipped).
      W.block = function (texts, row) {
        var r = row == null ? 0 : row, res = [];
        texts.forEach(function (t) {
          if (t === "") { r += 0.5; return; }
          res.push(W.add(t, r)); r += 1;
        });
        res.endRow = r;
        return res;
      };
      function rev(s, at) { tl.fromTo(s, { autoAlpha: 0 }, ex({ autoAlpha: 1, duration: 0.01, ease: "none" }), at); }
      function typeChars(chars, at, per) {
        var lead = true;
        chars.forEach(function (s) {
          if (lead && s.textContent === " ") { rev(s, at); return; }
          lead = false; rev(s, at); at += per;
        });
        return at;
      }
      // Type a line. Assignments type the value first, then "=", then the name.
      W.type = function (L, at, per) {
        if (at < L.showAt) L.showAt = at;
        if (!o.out && W.lines.some(function (x) { return x !== L && x.showAt < at && at < x.hideAt && x.row > L.row; })) {
          var endAt = W._type(L, at, per); editHL(L, at, endAt + 0.9); return endAt;
        }
        return W._type(L, at, per);
      };
      W._type = function (L, at, per) {
        per = per || (o.out ? OUT_CHAR : CHAR);
        var m = o.out ? null : /^(\s*)([A-Za-z_][\w.]*(?:\s*,\s*[A-Za-z_][\w.]*)*) = (?!=)/.exec(L.text);
        if (!m || o.ltr) return typeChars(L.chars, at, per);
        var lhsEnd = m[1].length + m[2].length, rhsAt = m[0].length;
        L.chars.slice(0, m[1].length).forEach(function (s) { rev(s, at); });
        at = typeChars(L.chars.slice(rhsAt), at, per);
        at = typeChars(L.chars.slice(lhsEnd, rhsAt), at, per);
        return typeChars(L.chars.slice(m[1].length, lhsEnd), at, per);
      };
      W.typeAll = function (lines, at, per) {
        lines.forEach(function (L) { at = W.type(L, at, per) + NEWLINE; });
        return at;
      };
      // Type code the way a trainer writes it: after a header line ("class X:", "def f():",
      // "if …:") pause before stepping inside to type the body; when a block ends (the next line
      // dedents) hold a beat before the next method. The pauses become the PPT click points.
      W.typeCode = function (lines, at, opt) {
        opt = opt || {};
        var HEAD = opt.head == null ? 1.0 : opt.head, END = opt.end == null ? 0.8 : opt.end, LINE = opt.line == null ? 0.5 : opt.line;
        function ind(s) { return /^\s*/.exec(s)[0].length; }
        lines.forEach(function (L, i) {
          at = W.type(L, at, opt.per) + NEWLINE;
          var nx = lines[i + 1];
          if (nx) at += LINE;
          if (/^\s*(class|def)\b.*:\s*$/.test(L.text)) at += HEAD;
          else if (nx && ind(nx.text) < ind(L.text) && (ind(nx.text) === 0 || /^\s*(def|class|@)/.test(nx.text))) at += END;
        });
        return at;
      };
      // Show a whole line at once (rise), for code the viewer has already seen.
      W.show = function (L, at, stagger) {
        list(L).forEach(function (l, i) {
          l.showAt = Math.min(l.showAt, at + i * (stagger || 0.08));
          l.chars.forEach(function (s) { rev(s, at + i * (stagger || 0.08)); });
          tl.fromTo(l.el, { y: 10, opacity: 0 }, ex({ y: 0, opacity: 1, duration: 0.4, ease: "power2.out" }), at + i * (stagger || 0.08));
        });
        return at + list(L).length * (stagger || 0.08) + 0.4;
      };
      W.fade = function (L, at, dur) { list(L).forEach(function (l) { l.hideAt = Math.min(l.hideAt, at + (dur || 0.35)); out(l.el, at, dur || 0.35); }); return at + (dur || 0.35); };
      W.moveTo = function (L, row, at, dur) {
        tl.fromTo(L.el, { top: L.row * LH }, ex({ top: row * LH, duration: dur || 0.45, ease: "power2.inOut" }), at);
        L.row = row; L.rows.push([at, row]); return at + (dur || 0.45);
      };
      // Resize the window (px). from = current {w,h}, to = new {w,h}.
      W.size = function (to, at, dur) {
        if (hug) return at + (dur || 0.45);   // the code window sizes itself to its lines
        var from = { width: W.cur.w, height: W.cur.h }, tw = to.w;
        tl.fromTo(w, from, ex({ width: tw, height: to.h, duration: dur || 0.45, ease: "power2.inOut" }), at);
        W.cur = { w: to.w, h: to.h }; return at + (dur || 0.45);
      };
      W.cur = { w: o.w, h: o.h };
      if (o.dash) ctx.mainCode = W;
      // Width = the longest line this window ever shows (+ padding), fixed for its whole life,
      // so the window hugs the code like the reference. Resolved once the scene has been built.
      var hug = !o.out && !o.noHug, defBars = [];
      W.hugW = function () { var m = 0; W.lines.forEach(function (l) { m = Math.max(m, l.text.length); }); return Math.round(26 + m * CW + 34); };
      // Output windows: size to the printed lines (longest line x rows), growing as each line
      // prints and shrinking after a clear - never any empty padding, never a wrapped line.
      var outStates = [];
      function outFit() {
        var live = W.lines.filter(function (l) { return !l.cleared; }), m = 0;
        live.forEach(function (l) { m = Math.max(m, l.text.length); });
        return { w: Math.max(300, Math.round(26 + m * CW + 34)), h: Math.round(76 + live.length * LH + 22) };
      }
      if (o.out) Promise.resolve().then(function () {
        var mc = ctx.mainCode;
        if (mc && mc.hugW) { var clear = o0x(mc) + mc.hugW() + 17 + 50; if (clear > o.x) w.style.left = clear + "px"; }
        if (!outStates.length) return;
        var s0 = outStates[0];
        w.style.width = s0.w + "px"; w.style.height = s0.h + "px";
        for (var i = 1; i < outStates.length; i++) {
          var a = outStates[i - 1], b = outStates[i];
          if (a.w === b.w && a.h === b.h) continue;
          tl.fromTo(w, { width: a.w, height: a.h }, ex({ width: b.w, height: b.h, duration: 0.25, ease: "power2.out" }), b.at);
        }
      });
      if (hug) Promise.resolve().then(function () {
        // height = the lines visible at each moment: grows as a line is typed, shrinks when one goes
        function rowAt(L, t) { var r = L.rows[0][1]; L.rows.forEach(function (e) { if (e[0] <= t) r = e[1]; }); return r; }
        function hAt(t) {
          var m = 0;
          W.lines.forEach(function (L) { if (L.showAt <= t && t < L.hideAt) m = Math.max(m, rowAt(L, t) + 1); });
          return Math.round(76 + Math.max(m, 1) * LH + 26);
        }
        var ev = [];
        W.lines.forEach(function (L) {
          [L.showAt, L.hideAt].forEach(function (x) { if (isFinite(x)) ev.push(x); });
          L.rows.slice(1).forEach(function (e) { ev.push(e[0]); });
        });
        ev.sort(function (a, b) { return a - b; });
        var prev = hAt(-1e9); w.style.height = prev + "px";
        ev.forEach(function (t, i) {
          if (i && t === ev[i - 1]) return;
          var h = hAt(t);
          if (h !== prev) tl.fromTo(w, { height: prev }, ex({ height: h, duration: 0.25, ease: "power2.out" }), t);
          prev = h;
        });
        var hw = W.hugW(); w.style.width = hw + "px";
        defBars.forEach(function (b) { b.style.width = (hw - 30) + "px"; });
      });
      // Height that fits `rows` rows of code.
      W.fit = function (rows) { return Math.round(76 + rows * LH + 26); };
      // A glowing ring around chars [col, col+len) of a line.
      W.ring = function (L, col, len, color, at) {
        var ind = o.out ? 0 : /^\s*/.exec(L.text)[0].length;
        var r = el("div", "k-ring c-neon", "left:" + Math.round(ind * CW - 10) + "px;width:" + Math.round((L.text.length - ind) * CW + 20) +
          "px;top:" + Math.round(LH * 0.04) + "px;bottom:" + Math.round(LH * 0.04) + "px;", null, L.el);
        L.el.insertBefore(r, L.el.firstChild);
        hide(r); r._line = L;
        if (at != null) W.ringOn(r, at);
        return r;
      };
      W.ringOn = function (r, at) {
        tl.fromTo(r, { autoAlpha: 0, scaleX: 0, transformOrigin: "0% 50%" }, ex({ autoAlpha: 1, scaleX: 1, duration: 0.35, ease: "power2.out" }), at);
        return at + 0.35;
      };
      W.bar = function (L, color, at, width) {
        var b = el("div", "k-bar c-neon", "top:" + (L.row * LH) + "px;height:" + LH + "px;width:" + (width || (W.cur.w - 30)) + "px;", null, code);
        code.insertBefore(b, code.firstChild);
        if (!width) defBars.push(b);
        hide(b);
        if (at != null) tl.fromTo(b, { autoAlpha: 0, scaleX: 0, transformOrigin: "0 50%" }, ex({ autoAlpha: 1, scaleX: 1, duration: 0.35, ease: "power2.out" }), at);
        return b;
      };
      W.pop = function (at) {
        w.style.transformOrigin = "50% 50%";
        tl.fromTo(w, { autoAlpha: 0 }, ex({ autoAlpha: 1, duration: 0.2, ease: "none" }), at);
        tl.fromTo(w, { scaleX: 0.4, scaleY: 0.25 }, ex({ scaleX: 1.04, scaleY: 1.03, duration: 0.32, ease: "power3.out" }), at);
        tl.fromTo(w, { scaleX: 1.04, scaleY: 1.03 }, ex({ scaleX: 1, scaleY: 1, duration: 0.5, ease: "power2.out" }), at + 0.32);
        return at + 0.6;
      };
      // Output window: print the next line (types at 0.03 s a character).
      W.print = function (text, cls, at) {
        var L = W.add(text, W.row, { cls: cls }); W.row += 1;
        if (o.out) { var f = outFit(); outStates.push({ at: at, w: f.w, h: f.h }); W.cur = { w: f.w, h: f.h }; }
        return W.type(L, at);
      };
      // Edit a line in place, like an editor: the unchanged prefix/suffix stay put, only the
      // changed middle types in (deletions are instant). Works for _bal -> __bal, get_bal -> bal,
      // commenting ("x" -> "# x") and uncommenting. Returns the NEW line object; its end time is
      // on L2.t. Pass opt.row to move the edited line to another row at the same instant.
      // neon-yellow bar across a whole line, shown from `from` to `to` (the line being edited)
      function editHL(L, from, to) {
        var ind = /^\s*/.exec(L.text)[0].length;
        var r = el("div", "k-ring k-edit c-neon", "left:" + Math.round(ind * CW - 10) + "px;width:" + Math.round((L.text.length - ind) * CW + 20) +
          "px;top:" + Math.round(LH * 0.04) + "px;bottom:" + Math.round(LH * 0.04) + "px;", null, L.el);
        L.el.insertBefore(r, L.el.firstChild);
        hide(r);
        tl.fromTo(r, { autoAlpha: 0, scaleX: 0, transformOrigin: "0% 50%" }, ex({ autoAlpha: 1, scaleX: 1, duration: 0.3, ease: "power2.out" }), from);
        tl.fromTo(r, { autoAlpha: 1 }, ex({ autoAlpha: 0, duration: 0.3, ease: "power1.inOut" }), to);
      }
      W.edit = function (L, text, at, opt) {
        opt = opt || {};
        var a = L.text, p = 0, s = 0;
        while (p < a.length && p < text.length && a[p] === text[p]) p++;
        while (s < a.length - p && s < text.length - p && a[a.length - 1 - s] === text[text.length - 1 - s]) s++;
        var L2 = W.add(text, opt.row == null ? L.row : opt.row);
        L.hideAt = Math.min(L.hideAt, at); L2.showAt = at;
        // The old line must be GONE before the new one appears.  When both switched at the
        // same instant the two texts were drawn on top of each other for the length of the
        // swap, which reads as garbled characters on any frame sampled inside it.
        tl.fromTo(L.el, { autoAlpha: 1 }, ex({ autoAlpha: 0, duration: 0.004, ease: "none" }), at);
        L.chars.forEach(function (c) { tl.fromTo(c, { autoAlpha: 1 }, ex({ autoAlpha: 0, duration: 0.004, ease: "none" }), at); });
        L2.chars.slice(0, p).concat(L2.chars.slice(text.length - s)).forEach(function (c) { rev(c, at + 0.005); });
        L2.t = typeChars(L2.chars.slice(p, text.length - s), at + 0.015, opt.per || CHAR);
        if (!o.out) editHL(L2, at, L2.t + 0.9);
        return L2;
      };
      W.clear = function (at) {
        var ls = W.lines.filter(function (l) { return !l.cleared; });
        ls.forEach(function (l) { l.cleared = true; l.hideAt = Math.min(l.hideAt, at + 0.3); out(l.el, at, 0.3); });
        W.row = 0; return at + 0.3;
      };
      return W;
    }

    var ctx = api(root, null);
    // the root layer has its own full-frame svg
    var rootLayer = layer({ x: 0, y: 0, w: 1920, h: 1080 });
    Object.keys(rootLayer).forEach(function (k) { if (k !== "el") ctx[k] = rootLayer[k]; });
    ctx.el = el; ctx.hide = hide; ctx.layer = layer; ctx.win = win; ctx.py = py; ctx.tl = tl;
    ctx.fade = fade; ctx.out = out; ctx.pop = pop; ctx.land = land; ctx.rise = rise; ctx.wipe = wipe;
    ctx.bump = bump; ctx.move = move; ctx.show = show; ctx.typeText = typeText; ctx.bounceText = bounceText;
    ctx.splitChars = splitChars;
    ctx.CHAR = CHAR; ctx.NEWLINE = NEWLINE;

    // Section header: badge + title.  Returns {el, badge, title, swap(n, title, at)}
    // visible = true: the header is already on screen at t = 0 (carried over from the previous scene)
    ctx.header = function (n, title, at, visible) {
      var h = el("div", "k-head", null, '<div class="k-badge"><span class="k-bn" style="display:inline-block">' + n +
        '</span></div><div class="k-htitle k-3d"></div>');
      h.style.overflow = "visible";
      var H = { el: h, badge: h.firstChild, num: h.firstChild.firstChild, titles: [] };
      H.badge.style.position = "relative"; H.badge.style.overflow = "hidden";
      hide(H.badge);
      function addTitle(t) {
        var d = el("div", "k-htitle k-3d", "position:absolute;left:88px;top:0;line-height:76px;", esc(t), h);
        d._chars = splitChars(d); d._chars.forEach(hide);
        H.titles.push(d); return d;
      }
      h.removeChild(h.lastChild);
      H.title = addTitle(title);
      H.enter = function (t) {
        pop(H.badge, t);
        return bounceText(H.title, t + 0.25, 0.028);
      };
      // Keep the badge, roll its number, drop the old title out and bounce the new one in.
      H.swap = function (n2, title2, t) {
        var oldT = H.title, oldN = H.num;
        var nn = el("span", "k-bn", "display:inline-block;position:absolute;left:0;right:0;text-align:center;", String(n2), H.badge);
        hide(nn);
        tl.fromTo(oldN, { y: 0, autoAlpha: 1 }, ex({ y: -60, autoAlpha: 0, duration: 0.35, ease: "power2.in" }), t);
        tl.fromTo(nn, { y: 60, autoAlpha: 0 }, ex({ y: 0, autoAlpha: 1, duration: 0.45, ease: "back.out(2)" }), t + 0.25);
        bump(H.badge, t + 0.3, 1.15);
        oldT._chars.forEach(function (s, i) {
          tl.fromTo(s, { y: 0, autoAlpha: 1 }, ex({ y: 40, autoAlpha: 0, duration: 0.25, ease: "power2.in" }), t + i * 0.008);
        });
        H.title = addTitle(title2); H.num = nn;
        return bounceText(H.title, t + 0.45, 0.028);
      };
      H.leave = function (t) {
        H.title._chars.forEach(function (s, i) {
          tl.fromTo(s, { y: 0, autoAlpha: 1 }, ex({ y: 40, autoAlpha: 0, duration: 0.25, ease: "power2.in" }), t + i * 0.008);
        });
        out(H.badge, t + 0.2, 0.3);
        return t + 0.6;
      };
      if (visible) {
        H.badge.style.opacity = ""; H.badge.style.visibility = "";
        H.title._chars.forEach(function (c) { c.style.opacity = ""; c.style.visibility = ""; });
      } else if (at != null) H.enter(at);
      return H;
    };
    return ctx;
  }

  var COLORS = { orange: "#ff9e64", teal: "#3ddcbe", violet: "#b496ff", pink: "#ff6b9a", blue: "#7aa2f7",
                 amber: "#ffc777", green: "#6ee7a0", red: "#ff5f6d", white: "#c8d3f5", grey: "#8d97ad" };
  // highlighted HTML for multi-line code (used inside memory boxes and chips)
  function hl(src) {
    return String(src).split(String.fromCharCode(10)).map(function (line) {
      return py(line).map(function (t) { return t[0] ? '<span class="' + t[0] + '">' + esc(t[1]) + "</span>" : esc(t[1]); }).join("");
    }).join(String.fromCharCode(10));
  }
  function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }
  function hash(s) { var h = 0; for (var i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0; return h; }

  window.K = { make: make, py: py, hl: hl, COLORS: COLORS, esc: esc };
})();
