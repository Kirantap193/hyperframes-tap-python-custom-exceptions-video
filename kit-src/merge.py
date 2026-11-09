"""Stitch the parallel part-projects (video-17-parts/gN) into video-17.

Reads each part's index.html mounts in order, copies the composition files into
video-17/compositions (and every asset, incl. subfolders), and writes video-17/index.html
with the clips back to back.  Order: g1 .. g9.
"""
import pathlib, re, shutil

ROOT = pathlib.Path(__file__).resolve().parents[2]
DST = ROOT / "video-17"
PARTS = ROOT / "video-17-parts"
GROUPS = ("g1", "g2", "g3", "g4", "g5", "g6", "g7", "g8", "g9")
MOUNT = re.compile(r'<div[^>]*data-composition-src="([^"]+)"[^>]*>', re.S)


def mounts(group):
    html = (PARTS / group / "index.html").read_text(encoding="utf-8")
    out = []
    for m in MOUNT.finditer(html):
        tag = m.group(0)
        cid = re.search(r'data-composition-id="([^"]+)"', tag).group(1)
        start = float(re.search(r'data-start="([^"]+)"', tag).group(1))
        dur = float(re.search(r'data-duration="([^"]+)"', tag).group(1))
        out.append((start, cid, m.group(1), dur, group))
    return [x[1:] for x in sorted(out)]


seq = []
for g in GROUPS:
    if not (PARTS / g / "index.html").exists():
        print("skip (no index.html):", g)
        continue
    seq += [m for m in mounts(g) if (PARTS / g / m[1]).exists()]

rows, t = [], 0.0
for i, (cid, src, dur, group) in enumerate(seq):
    shutil.copy2(PARTS / group / src, DST / src)
    for a in (PARTS / group / "assets").iterdir():
        if a.is_file() and a.name != "kit.js":   # always take the part's latest version
            d = DST / "assets" / a.name
            if (not d.exists()) or d.stat().st_mtime != a.stat().st_mtime or d.stat().st_size != a.stat().st_size:
                shutil.copy2(a, d)
        elif a.is_dir():
            shutil.copytree(a, DST / "assets" / a.name, dirs_exist_ok=True)
    rows.append(
        f'      <div id="el-{cid}" data-composition-id="{cid}" data-composition-src="{src}" '
        f'data-start="{t:g}" data-duration="{dur:g}" data-track-index="{i % 2}" '
        f'data-width="1920" data-height="1080"></div>'
    )
    print(f"{t:8.2f}  {dur:7.2f}  {cid}")
    t = round(t + dur, 3)

total = t
idx = (DST / "index.html").read_text(encoding="utf-8")
body = "\n".join(rows)
idx = re.sub(r'(<div[^>]*id="root"[^>]*data-duration=")[^"]+(")', lambda m: m.group(1) + f"{total:g}" + m.group(2), idx, count=1)
idx = re.sub(r'(<div[^>]*id="root"[^>]*>).*?(\n    </div>\n    <script>)', lambda m: m.group(1) + "\n" + body + m.group(2), idx, count=1, flags=re.S)
(DST / "index.html").write_text(idx, encoding="utf-8")
print(f"total {total:.2f}s  ({len(seq)} clips)")
