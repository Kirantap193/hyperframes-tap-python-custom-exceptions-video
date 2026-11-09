/* video-36 Custom Exceptions - shared helpers on top of kit.js (K) and pm-cards.js (PMCARD).
   CX.title(k, tl, text, x, y, size, at)   3-D lettering, rains in letter by letter (video-18 g1-a style)
   CX.box(k, host, o)                        glossy gl-frame box with a label  {x,y,w,h,text,color,font}
   CX.boxIn(k, tl, B, at)                    box pops, then its label types on
   CX.editor(k, tl, cw, MAXR)                scrolling file model (video-17 g7-a), see below
   CX.runner(k, tl, ow)                      output window runs: one printed line at a time       */
(function () {
  if (window.CX) return;
  var css = [
    '.cx-title{position:absolute;white-space:pre;font-family:"Nunito","Segoe UI",sans-serif;font-weight:400;line-height:1.1;}',
    '.cx-title .k-ch{background:linear-gradient(180deg,#ffffff 0%,#e4f7ff 40%,#7fd3f5 100%);-webkit-background-clip:text;background-clip:text;color:transparent;',
    '  filter:drop-shadow(0 2px 0 #2c7fae) drop-shadow(0 2px 0 #1f638b) drop-shadow(0 2px 0 #164a69) drop-shadow(0 2px 0 #0f3550) drop-shadow(0 12px 12px rgba(0,0,0,.6));}',
    '.cx-title.yellow .k-ch{background-image:linear-gradient(180deg,#fffbe0 0%,#ffe66b 45%,#f2b81e 100%);',
    '  filter:drop-shadow(0 2px 0 #b07a10) drop-shadow(0 2px 0 #8a5d08) drop-shadow(0 2px 0 #664404) drop-shadow(0 12px 12px rgba(0,0,0,.6));}',
    '.cx-title.green .k-ch{background-image:linear-gradient(180deg,#f0fff4 0%,#8ff0b4 45%,#2fc472 100%);',
    '  filter:drop-shadow(0 2px 0 #1d8a4c) drop-shadow(0 2px 0 #15693a) drop-shadow(0 2px 0 #0e4d2a) drop-shadow(0 12px 12px rgba(0,0,0,.6));}',
    '.cx-box{position:absolute;display:flex;align-items:center;justify-content:center;}',
    '.cx-box::before{content:"";position:absolute;inset:0;pointer-events:none;border:24px solid transparent;',
    '  border-image:url("assets/gl-frame-violet.png") 90 fill stretch;}',
    '.cx-box.blue::before{filter:hue-rotate(-40deg);} .cx-box.teal::before{filter:hue-rotate(-95deg);}',
    '.cx-box.green::before{filter:hue-rotate(-125deg);}',
    '.cx-box.pink::before,.cx-box.orange::before,.cx-box.red::before,.cx-box.amber::before{border-image-source:url("assets/gl-frame-pink.png");}',
    '.cx-box.orange::before{filter:hue-rotate(40deg);} .cx-box.amber::before{filter:hue-rotate(55deg);} .cx-box.red::before{filter:hue-rotate(18deg);}',
    '.cx-lbl{position:relative;white-space:pre;font-family:"Nunito","Segoe UI",sans-serif;font-weight:400;color:#fff;',
    '  text-shadow:0 1px 0 rgba(203,189,240,.7),0 3px 5px rgba(0,0,0,.45);}'
  ].join('\n');
  var st = document.createElement('style'); st.id = 'cx-css'; st.textContent = css;
  (document.head || document.documentElement).appendChild(st);

  function ex(o) { o.immediateRender = false; return o; }

  // 3-D lettering: every letter drops from above with stretch, squashes on landing.
  function title(k, tl, text, o) {
    var e = k.el('div', 'cx-title ' + (o.color || ''), 'left:' + o.x + 'px;top:' + o.y + 'px;font-size:' + o.size + 'px;' +
      (o.w ? 'width:' + o.w + 'px;text-align:center;' : ''), k.py ? K.esc(text) : text, o.host);
    e.setAttribute('data-layout-allow-overflow', 'true');
    var ch = k.splitChars(e);
    ch.forEach(function (s) { k.hide(s); s.style.transformOrigin = '50% 100%'; });
    e._chars = ch;
    return e;
  }
  function rain(k, tl, e, at, o) {
    o = o || {}; var st = o.stagger || 0.055, drop = o.drop == null ? 260 : o.drop;
    e._chars.forEach(function (s, i) {
      var t = at + i * st;
      tl.fromTo(s, { autoAlpha: 0 }, ex({ autoAlpha: 1, duration: 0.08, ease: 'none' }), t);
      tl.fromTo(s, { y: -drop, scaleY: 1.35, scaleX: 0.8 }, ex({ y: 0, scaleY: 0.78, scaleX: 1.16, duration: 0.3, ease: 'power2.in' }), t);
      tl.fromTo(s, { scaleY: 0.78, scaleX: 1.16 }, ex({ scaleY: 1, scaleX: 1, duration: 0.45, ease: 'power2.out' }), t + 0.3);
    });
    return at + e._chars.length * st + 0.75;
  }
  // type the lettering on (labels under a heading)
  function typeOn(k, tl, e, at, per) {
    per = per || 0.045;
    e._chars.forEach(function (s, i) { tl.fromTo(s, { autoAlpha: 0 }, ex({ autoAlpha: 1, duration: 0.01, ease: 'none' }), at + i * per); });
    return at + e._chars.length * per;
  }

  function box(k, host, o) {
    var b = k.el('div', 'cx-box ' + (o.color || 'violet'), 'left:' + o.x + 'px;top:' + o.y + 'px;width:' + o.w + 'px;height:' + (o.h || 74) + 'px;', null, host);
    b.setAttribute('data-layout-allow-overflow', 'true');
    var l = k.el('div', 'cx-lbl', 'font-size:' + (o.font || 26) + 'px;line-height:' + Math.round((o.font || 26) * 1.2) + 'px;', K.esc(o.text), b);
    l._chars = k.splitChars(l); l._chars.forEach(k.hide);
    k.hide(b); b.lbl = l; b.cx = o.x + o.w / 2; b.top = o.y; b.bot = o.y + (o.h || 74); b.left = o.x; b.right = o.x + o.w;
    return b;
  }
  function boxIn(k, tl, B, at, per) {
    k.pop(B, at);
    var t = at + 0.3;
    B.lbl._chars.forEach(function (s, i) { tl.fromTo(s, { autoAlpha: 0 }, ex({ autoAlpha: 1, duration: 0.01, ease: 'none' }), t + i * (per || 0.03)); });
    return t + B.lbl._chars.length * (per || 0.03);
  }

  // ---------------- scrolling editor (video-17 g7-a, generalised) ----------------
  // SRC entries: {b:true} half-row blank, {t:"code"} a line. e.L = live line object, e.p = pending (not typed yet)
  function editor(k, tl, cw, MAXR) {
    var LH = cw.LH, E = { SRC: [], TOPE: null, LASTB: null };
    E.N = function (s) { return { t: s, p: true }; };
    E.B = function () { return { b: true }; };
    E.load = function (arr, pending) {
      E.SRC = arr.map(function (s) { return s === '' ? { b: true } : (pending ? { t: s, p: true } : { t: s }); });
      E.TOPE = E.SRC[0]; return E.SRC;
    };
    function pos() { var p = [], r = 0; for (var i = 0; i < E.SRC.length; i++) { p[i] = r; r += E.SRC[i].b ? 0.5 : 1; } return p; }
    E.pos = pos;
    function reveal(L, at, yFrom, dur) {
      L.showAt = Math.min(L.showAt, at);
      L.chars.forEach(function (s) { tl.fromTo(s, { autoAlpha: 0 }, ex({ autoAlpha: 1, duration: 0.01, ease: 'none' }), at); });
      tl.fromTo(L.el, { y: yFrom, opacity: 0 }, ex({ y: 0, opacity: 1, duration: dur, ease: 'power2.inOut' }), at);
      return at + dur;
    }
    E.apply = function (at, dur, stag) {
      var p = pos(), base = p[E.SRC.indexOf(E.TOPE)], d = E.LASTB == null ? 0 : base - E.LASTB, enter = [], end = at + (dur || 0);
      E.LASTB = base;
      E.SRC.forEach(function (e, i) {
        if (e.b) return;
        var r = Math.round((p[i] - base) * 2) / 2, inv = r >= 0 && r <= MAXR;
        if (e.L) {
          if (!inv) {
            tl.fromTo(e.L.el, { y: 0 }, ex({ y: (r - e.L.row) * LH, duration: dur || 0.45, ease: 'power2.inOut' }), at);
            cw.fade(e.L, at, Math.min(0.3, dur || 0.3)); e.L = null;
          } else if (e.L.row !== r) cw.moveTo(e.L, r, at, dur || 0.45);
        } else if (inv && !e.p) { e.L = cw.add(e.t, r); enter.push(e.L); }
      });
      var stg = d ? 0 : (stag == null ? 0.05 : stag), rd = d ? (dur || 0.45) : 0.4;
      enter.forEach(function (L, i) { end = Math.max(end, reveal(L, at + i * stg, d ? d * LH : 10, rd)); });
      return end;
    };
    E.go = function (e, at, dur, stag) { E.TOPE = e; return E.apply(at, dur || 0.6, stag); };
    // insert entries after `after` (null = at the very top), rows below glide down
    E.ins = function (after, items, at, dur) {
      var i = after ? E.SRC.indexOf(after) + 1 : 0;
      if (!after && E.TOPE === E.SRC[0]) E.TOPE = items[0];
      E.SRC.splice.apply(E.SRC, [i, 0].concat(items));
      return E.apply(at, dur || 0.45, 0.05);
    };
    E.del = function (items, at, dur) {
      items.forEach(function (e) {
        var i = E.SRC.indexOf(e);
        if (e.L) { cw.fade(e.L, at, 0.3); e.L = null; }
        if (E.TOPE === e) E.TOPE = E.SRC[i + 1];
        E.SRC.splice(i, 1);
      });
      return E.apply(at + 0.3, dur || 0.45, 0.05);
    };
    E.row = function (e) { var p = pos(); return Math.round((p[E.SRC.indexOf(e)] - p[E.SRC.indexOf(E.TOPE)]) * 2) / 2; };
    E.typeAt = function (e, at, per) { e.p = false; e.L = cw.add(e.t, E.row(e)); return cw.type(e.L, at, per); };
    // type a list of pending entries the trainer's way (pause before each line, longer after headers)
    E.typeRun = function (es, at, opt) {
      opt = opt || {};
      es.forEach(function (e, i) {
        if (e.b) return;
        at = E.typeAt(e, at, opt.per) + 0.22;
        var nx = es[i + 1];
        if (nx) at += opt.line == null ? 0.5 : opt.line;
        if (/^\s*(class|def)\b.*:\s*$/.test(e.t)) at += opt.head == null ? 0.7 : opt.head;
      });
      return at;
    };
    E.ed = function (e, text, at, per) { var L2 = cw.edit(e.L, text, at, { per: per }); e.L = L2; e.t = text; return L2.t; };
    return E;
  }

  // ---------------- output runs ----------------
  function runner(k, tl, ow) {
    var R = { on: false };
    ow.type = function (L, at) { if (at < L.showAt) L.showAt = at; return ow._type(L, at, 0.004); };
    R.show = function (at) { if (!R.on) { R.on = true; return ow.pop(at) + 0.15; } return at; };
    // lines: [[text, cls], ...] - printed one at a time, 0.45 s apart
    R.run = function (lines, at, gap) {
      at = R.show(at);
      lines.forEach(function (l, i) { ow.print(l[0], l[1] || 'o-ok', at); at += (i < lines.length - 1 ? (gap || 0.45) : 0.1); });
      return at;
    };
    R.clear = function (at) { return ow.clear(at); };
    R.hide = function (at) { R.on = false; ow.clear(at); return k.out(ow.el, at, 0.35); };
    return R;
  }

  window.CX = { title: title, rain: rain, typeOn: typeOn, box: box, boxIn: boxIn, editor: editor, runner: runner };
})();
