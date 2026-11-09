import json, pathlib
here = pathlib.Path(__file__).parent
css = (here / "kit.css").read_text(encoding="utf-8")
js = (here / "kit.js").read_text(encoding="utf-8")
inject = ("(function(){if(document.getElementById('k-kit-css'))return;var s=document.createElement('style');"
          "s.id='k-kit-css';s.textContent=" + json.dumps(css) + ";(document.head||document.documentElement).appendChild(s);})();\n")
(here.parent / "assets" / "kit.js").write_text("/* GENERATED from kit-src/ by build.py - edit kit-src, then rebuild */\n" + inject + js, encoding="utf-8")
print("built assets/kit.js")
