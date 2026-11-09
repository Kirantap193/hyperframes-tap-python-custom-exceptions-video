import json, re
D = json.load(open('kit-src/durs.json'))
rows = []; t = 0.0
for i, (cid, d) in enumerate(D):
    rows.append(f'      <div id="el-{cid}" data-composition-id="{cid}" data-composition-src="compositions/{cid}.html" data-start="{round(t, 2)}" data-duration="{d}" data-track-index="{i % 2}" data-width="1920" data-height="1080"></div>')
    print(cid, round(t, 2)); t += d
s = open('index.html', encoding='utf8').read()
a = re.search(r'<div[^>]*id="root"', s).start()
b = s.index('    </div>\n    <script>')
s = s[:a] + f'<div id="root" data-composition-id="main" data-start="0" data-duration="{round(t, 2)}" data-width="1920" data-height="1080">\n' + '\n'.join(rows) + '\n' + s[b:]
open('index.html', 'w', encoding='utf8').write(s)
for cid, d in D:
    p = f'compositions/{cid}.html'; c = open(p, encoding='utf8').read()
    c = re.sub(r'(data-composition-id="' + cid + r'"[^>]*data-duration=")[\d.]+"', r'\g<1>' + str(d) + '"', c)
    open(p, 'w', encoding='utf8').write(c)
print('total', round(t, 2))
