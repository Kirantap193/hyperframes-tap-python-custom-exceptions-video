# cut the user's "Validate:" lettering off its white background, find the letter columns
import sys, json, numpy as np
from PIL import Image, ImageFilter
from collections import deque
src = sys.argv[1]
im = Image.open(src).convert('RGB'); a = np.asarray(im).astype(int)
H, W, _ = a.shape
mn = a.min(2); mx = a.max(2)
bgish = (mn > 222) & (mx - mn < 18)          # white paper + soft grey shadow
seen = np.zeros((H, W), bool); q = deque()
for x in range(W):
    for y in (0, H - 1): q.append((y, x))
for y in range(H):
    for x in (0, W - 1): q.append((y, x))
while q:
    y, x = q.popleft()
    if y < 0 or y >= H or x < 0 or x >= W or seen[y, x] or not bgish[y, x]: continue
    seen[y, x] = True
    q.extend(((y + 1, x), (y - 1, x), (y, x + 1), (y, x - 1)))
alpha = Image.fromarray(np.where(seen, 0, 255).astype('uint8')).filter(ImageFilter.MinFilter(3)).filter(ImageFilter.GaussianBlur(1.2))
out = im.convert('RGBA'); out.putalpha(alpha)
bb = out.getbbox(); out = out.crop(bb)
out.save('assets/validate-title.png')
al = np.asarray(out)[:, :, 3] > 40
cols = al.any(0); segs = []; i = 0
while i < len(cols):
    if cols[i]:
        j = i
        while j < len(cols) and cols[j]: j += 1
        segs.append([i, j]); i = j
    else: i += 1
print(out.size, segs)
json.dump({'w': out.size[0], 'h': out.size[1], 'segs': segs}, open('kit-src/validate-segs.json', 'w'))
