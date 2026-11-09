/* Messenger class cards built from the user's artwork (Asset's/Polymorphism).
   Plates baked by kit-src/prep_poly_cards.py.  Shared by g2 (phone tree) and g3 / g7 / g8 (UML)
   so every class card in the video is identical.

     var C = PMCARD.make(k, host, {x, y, w, h, rows, color: "blue"|"orange", plate: "tree"|"uml"});
     C.name.textContent = "WhatsApp";
     t = PMCARD.cardIn(k, tl, C, t);                       // 3-D flip in, the name is simply there
     t = PMCARD.rowIn(k, tl, C, 0, "use_keyboard( )", "key",  "pm-teal", t);
     PMCARD.toPink(tl, C, 1, t);                           // overridden: teal -> pink

   Row kinds -> the artwork's own icons: key = gear, send = paper plane, recv = speech bubble,
   spec = coins (the specialized method).  */
(function () {
  if (window.PMCARD) return;

  var CSS = [
    '.pm-card{position:absolute;background-repeat:no-repeat;background-size:100% 100%;}',
    '.pm-name{position:absolute;left:0;right:0;text-align:center;white-space:pre;',
    '  font-family:"Nunito","Segoe UI",sans-serif;font-weight:400;color:#fff;',
    '  text-shadow:0 1px 0 rgba(0,0,0,.45),0 3px 5px rgba(0,0,0,.5);}',
    '.pm-row{position:absolute;}',
    '.pm-ico{position:absolute;left:0;top:0;display:block;}',
    '.pm-pill{position:absolute;background-repeat:no-repeat;background-size:100% 100%;',
    '  background-image:url("assets/pm-pill.png");}',
    '.pm-mt{position:absolute;text-align:center;white-space:pre;',
    '  font-family:"JetBrains Mono",Consolas,monospace;font-weight:400;',
    '  text-shadow:0 2px 3px rgba(0,0,0,.55);}',
    '.pm-teal{color:#3fd9b0;} .pm-pink{color:#ffd54a;} .pm-white{color:#f0f0f0;}'
  ].join('\n');

  if (!document.getElementById('pm-cards-css')) {
    var st = document.createElement('style');
    st.id = 'pm-cards-css'; st.textContent = CSS;
    (document.head || document.documentElement).appendChild(st);
  }

  // card geometry as fractions of the card WIDTH, measured off the user's final image.
  // height follows the row count:  H(rows) = (0.181 + 0.1048*rows + 0.0286) * W
  var F = {
    headTop: 0.0383, headH: 0.135, row0: 0.181, pitch: 0.1048, pad: 0.0286,
    ico: 0.0952, icoX: 0.0571, pillX: 0.178, pillR: 0.048, pillH: 0.092,
    nameF: 0.085, mF: 0.058
  };
  function cardH(W, rows) { return (F.row0 + F.pitch * rows + F.pad) * W; }
  var ICO = { key: 'pm-ico-key', send: 'pm-ico-send', recv: 'pm-ico-recv', spec: 'pm-ico-spec' };

  function px(n) { return Math.round(n * 100) / 100 + 'px'; }

  function make(k, host, o) {
    var W = o.w, rows = o.rows, H = o.h || cardH(W, rows), plate = o.plate || 'uml';
    var c = k.el('div', 'pm-card',
      'left:' + px(o.x) + ';top:' + px(o.y) + ';width:' + px(W) + ';height:' + px(H) +
      ';background-image:url("assets/pm-card-' + o.color + '-' + plate + '.png");', '', host);
    c.setAttribute('data-layout-allow-overlap', 'true');

    var nameF = F.nameF * W;
    var n = k.el('div', 'pm-name',
      'top:' + px(F.headTop * W + (F.headH * W - nameF * 1.25) / 2) +
      ';font-size:' + px(nameF) + ';line-height:' + px(nameF * 1.25) + ';', '', c);

    var slots = [], pitch = F.pitch * W, icoS = F.ico * W, pillH = F.pillH * W;
    var pillX = F.pillX * W, pillW = W - pillX - F.pillR * W, mF = F.mF * W;
    for (var i = 0; i < rows; i++) {
      var ry = F.row0 * W + i * pitch;
      var pill = k.el('div', 'pm-pill', 'left:' + px(pillX) + ';top:' + px(ry + (pitch - pillH) / 2) +
        ';width:' + px(pillW) + ';height:' + px(pillH) + ';', '', c);
      var ico = k.el('img', 'pm-ico', 'left:' + px(F.icoX * W) + ';top:' + px(ry + (pitch - icoS) / 2) +
        ';width:' + px(icoS) + ';height:' + px(icoS) + ';', '', c);
      var m = k.el('div', 'pm-mt', 'left:' + px(pillX) + ';width:' + px(pillW) +
        ';top:' + px(ry + (pitch - mF * 1.3) / 2) +
        ';font-size:' + px(mF) + ';line-height:' + px(mF * 1.3) + ';', '', c);
      k.hide(pill); k.hide(ico); k.hide(m);
      slots.push({ pill: pill, ico: ico, text: m, y: ry, h: pitch,
                   ty: ry + (pitch - mF * 1.3) / 2 });
    }
    k.hide(c);
    return { el: c, name: n, slots: slots, w: W, h: H, x: o.x, y: o.y };
  }

  // The class NAME is simply there as the card arrives - the user asked for no type-on on the
  // class names (only the methods inside a card type on).
  function cardIn(k, tl, C, at, dur) {
    dur = dur || 0.6;
    tl.fromTo(C.el, { autoAlpha: 0, rotationY: -70, z: -260, transformPerspective: 900 },
      { autoAlpha: 1, rotationY: 0, z: 0, duration: dur, ease: 'power3.out',
        immediateRender: false }, at);
    k.fade(C.name, at + dur * 0.45, 0.25);
    return at + dur + 0.2;
  }

  // a method row appears: icon pops, pill wipes in (scaleX - never clipPath), text types on
  function rowIn(k, tl, C, i, text, kind, cls, at) {
    var s = C.slots[i];
    s.ico.setAttribute('src', 'assets/' + (ICO[kind] || ICO.send) + '.png');
    s.text.className = 'pm-mt ' + cls;
    s.text.textContent = text;
    tl.fromTo(s.pill, { autoAlpha: 0, scaleX: 0.3, transformOrigin: '0% 50%' },
      { autoAlpha: 1, scaleX: 1, duration: 0.35, ease: 'power2.out', immediateRender: false }, at);
    tl.fromTo(s.ico, { autoAlpha: 0, scale: 0.4, transformOrigin: '50% 50%' },
      { autoAlpha: 1, scale: 1, duration: 0.32, ease: 'power3.out', immediateRender: false }, at + 0.08);
    return k.typeText(s.text, at + 0.26, 0.028) + 0.15;
  }

  // the row is already on screen (a flown copy landed): reveal it without re-animating
  function rowShow(k, tl, C, i, text, kind, cls, at) {
    var s = C.slots[i];
    s.ico.setAttribute('src', 'assets/' + (ICO[kind] || ICO.send) + '.png');
    s.text.className = 'pm-mt ' + cls;
    s.text.textContent = text;
    tl.fromTo(s.pill, { autoAlpha: 0, scaleX: 0.3, transformOrigin: '0% 50%' },
      { autoAlpha: 1, scaleX: 1, duration: 0.3, ease: 'power2.out', immediateRender: false }, at - 0.22);
    tl.fromTo(s.ico, { autoAlpha: 0, scale: 0.4, transformOrigin: '50% 50%' },
      { autoAlpha: 1, scale: 1, duration: 0.3, ease: 'power3.out', immediateRender: false }, at - 0.18);
    k.fade(s.text, at, 0.1);
    return at + 0.25;
  }

  function toPink(tl, C, i, at) {
    tl.fromTo(C.slots[i].text, { color: '#3fd9b0' },
      { color: '#ffd54a', duration: 0.5, ease: 'none', immediateRender: false }, at);
    return at + 0.5;
  }

  window.PMCARD = { make: make, cardH: cardH, cardIn: cardIn, rowIn: rowIn, rowShow: rowShow, toPink: toPink, F: F };
})();
