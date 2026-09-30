/* Converts the Maieutic blog PDF pack + metadata CSV into blog data for src/data/blogs-services.js
 * Usage: node tools/build-blogs.mjs report | extract | write
 *   report  - print the detected structure of every PDF for review
 *   extract - pull the embedded illustration JPEGs into public/images/blogs
 *   write   - regenerate src/data/blogs-services.js
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';

const HERE = path.dirname(fileURLToPath(import.meta.url));
// Folder holding blog_metadata.csv and individual_blogs/*.pdf (override with BLOG_PACK=...)
const PACK = process.env.BLOG_PACK || 'C:/Users/Srushti.CY/Downloads/Maieutic_Edutech_23_Blogs_PDF (1)';
const REPO = path.resolve(HERE, '..');
const IMG_DIR = path.join(REPO, 'public/images/blogs');
const OUT_JS = path.join(REPO, 'src/data/blogs-services.js');
const COVERS = path.join(HERE, 'blog-covers.json'); // cover image ids, alt text and credits per slug
const mode = process.argv[2] || 'report';

/* ---------- CSV ---------- */
function parseCSV(txt) {
  const rows = []; let row = [], cell = '', q = false;
  for (let i = 0; i < txt.length; i++) {
    const c = txt[i];
    if (q) { if (c === '"') { if (txt[i + 1] === '"') { cell += '"'; i++; } else q = false; } else cell += c; }
    else if (c === '"') q = true;
    else if (c === ',') { row.push(cell); cell = ''; }
    else if (c === '\n') { row.push(cell); rows.push(row); row = []; cell = ''; }
    else if (c !== '\r') cell += c;
  }
  if (cell.length || row.length) { row.push(cell); rows.push(row); }
  const [head, ...body] = rows.filter((r) => r.length > 1);
  return body.map((r) => Object.fromEntries(head.map((h, i) => [h.trim(), (r[i] ?? '').trim()])));
}

/* ---------- PDF helpers ---------- */
const extractJpeg = (pdf) => {
  const buf = fs.readFileSync(pdf); const latin = buf.toString('latin1');
  const idx = latin.indexOf('/DCTDecode'); if (idx < 0) return null;
  let s = latin.indexOf('stream', idx) + 6; if (latin[s] === '\r') s++; if (latin[s] === '\n') s++;
  let e = latin.indexOf('endstream', s); while (e > s && (buf[e - 1] === 0x0a || buf[e - 1] === 0x0d)) e--;
  return buf.subarray(s, e);
};
const pdfText = (pdf) => execFileSync('pdftotext', ['-layout', '-enc', 'UTF-8', pdf, '-'], { encoding: 'utf8', maxBuffer: 1 << 24 });

/* ---------- text -> blocks ---------- */
const endsSentence = (t) => /[.!?:"\u201d\u2019)]$/.test(t.trim());
const words = (t) => t.trim().split(/\s+/).length;
const tidy = (t) => t.replace(/\s+--\s+/g, ' \u2014 ').replace(/\s+/g, ' ').trim();

function parseBody(text) {
  const raw = text.split('\n');
  const lines = raw.map((l) => {
    const s = l.replace(/\f/g, '');
    return { text: s.trimEnd(), indent: s.match(/^ */)[0].length };
  });
  const wc = lines.findIndex((l) => /^Word count:/.test(l.text));
  if (wc < 0) throw new Error('no metadata block');
  let start = wc + 1; while (start < lines.length && lines[start].text.trim() !== '') start++;
  const body = lines.slice(start);
  const maxWidth = Math.max(...body.filter((l) => l.indent < 4).map((l) => l.text.trim().length));
  const full = (t) => t.trim().length >= 0.88 * maxWidth;

  const blocks = []; let cur = null;
  const close = () => { if (cur) { blocks.push(cur); cur = null; } };
  const nextNonBlank = (i) => { for (let j = i + 1; j < body.length; j++) if (body[j].text.trim()) return body[j]; return null; };

  for (let i = 0; i < body.length; i++) {
    const { text, indent } = body[i]; const t = text.trim();
    if (!t) {
      if (cur) {
        const last = cur.lines[cur.lines.length - 1];
        const nx = nextNonBlank(i);
        const midSentence = !endsSentence(last) || (nx && nx.indent === 0 && /^[a-z]/.test(nx.text.trim()) && full(last));
        if (!midSentence) close();
      }
      continue;
    }
    const ill = t.match(/^(.*?)\s+(?:--|—|–)\s+illustration by Maieutic Edutech\s*$/);
    if (ill) { close(); blocks.push({ kind: 'figure', label: ill[1].trim() }); continue; }

    if (indent >= 4) {
      // a new bullet starts when the previous line finished a sentence, was not wrapped at full width,
      // and this line starts with a capital/digit; anything else is a continuation of the wrapped item
      if (cur && cur.kind === 'li') {
        const prev = cur.lines[cur.lines.length - 1];
        const speaker = /^[A-Z][A-Za-z]+:\s/; // dialogue lists: every item starts with "Name:"
        // a wrapped continuation line starts lowercase; a new item starts a new sentence with a capital
        const newItem = endsSentence(prev) && /^[A-Z0-9"“]/.test(t) && (!speaker.test(cur.lines[0]) || speaker.test(t));
        if (!newItem) { cur.lines.push(t); cur.lastRaw = text; continue; }
      }
      close(); cur = { kind: 'li', lines: [t], lastRaw: text };
      continue;
    }
    if (cur && cur.kind === 'p') {
      const last = cur.lines[cur.lines.length - 1];
      if (endsSentence(last) && !full(last)) close();
      else { cur.lines.push(t); continue; }
    } else if (cur) close();

    // starting a new non-indented block
    if (!full(t)) {
      if (/:$/.test(t) && t.length <= 40) { blocks.push({ kind: 'label', lines: [t] }); continue; }
      if (t.length <= 100 && words(t) <= 16 && !/^["\u201c]/.test(t) && !/[,;:]$/.test(t) && !/[.!]$/.test(t)) {
        const h = { kind: 'h2', lines: [t] };
        // headings use a larger font and wrap earlier: absorb a short lowercase continuation line
        const nx = body[i + 1];
        if (nx && nx.indent < 4 && /^[a-z]/.test(nx.text.trim()) && !full(nx.text) && !/[.!?:]$/.test(t)) { h.lines.push(nx.text.trim()); i++; }
        blocks.push(h); continue;
      }
    }
    cur = { kind: 'p', lines: [t] };
  }
  close();
  return blocks;
}

/* Capitalise a lowercase keyword phrase and restore proper casing of acronyms / product names. */
const PROPER = ['UGC', 'SWAYAM', 'LMS', 'SCORM', 'xAPI', 'MOOC', 'MOOCs', 'SME', 'SMEs', 'L&D', 'MBA', 'SSO', 'SEO', 'AI', '2D', '3D', 'India',
  'Storyline', 'Rise', 'Articulate', 'Camtasia', 'Bloom’s', "Bloom's"];
const fixCase = (s) => {
  let out = s.charAt(0).toUpperCase() + s.slice(1);
  for (const p of PROPER) out = out.replace(new RegExp(`(^|[^A-Za-z0-9])${p.replace(/[&'’]/g, (c) => `\\${c}`)}(?=$|[^A-Za-z0-9])`, 'gi'), (m, pre) => pre + p);
  return out;
};

const boldLead = (t) => {
  const m = t.match(/^([^:]{2,60}):\s+(.+)$/);
  return m && words(m[1]) <= 8 ? `**${m[1]}:** ${m[2]}` : t;
};

function toBody(blocks, slug) {
  const out = []; let seenP = false;
  const ps = blocks.filter((b) => b.kind === 'p');
  const lastP = ps[ps.length - 1];
  for (let i = 0; i < blocks.length; i++) {
    const b = blocks[i]; const text = tidy(b.lines ? b.lines.join(' ') : '');
    switch (b.kind) {
      case 'h2': out.push({ type: 'h2', text }); break;
      case 'label': out.push({ type: 'p', text: `**${text}**` }); break;
      case 'figure':
        out.push({
          type: 'figure',
          src: `/images/blogs/${slug}-illustration.jpg`,
          alt: `${fixCase(b.label)} \u2014 illustration by Maieutic Edutech`,
          caption: 'Illustration by Maieutic Edutech',
        });
        break;
      case 'li': {
        const items = [boldLead(text)];
        while (blocks[i + 1] && blocks[i + 1].kind === 'li') { i++; items.push(boldLead(tidy(blocks[i].lines.join(' ')))); }
        out.push({ type: 'ul', items }); break;
      }
      case 'p':
        if (!seenP) { out.push({ type: 'lede', text }); seenP = true; }
        else if (b === lastP && /Maieutic Edutech/.test(text)) out.push({ type: 'callout', title: 'How Maieutic Edutech can help', text });
        else out.push({ type: 'p', text });
        break;
      default: break;
    }
  }
  return out;
}

/* ---------- main ---------- */
const rows = parseCSV(fs.readFileSync(path.join(PACK, 'blog_metadata.csv'), 'utf8'));
const covers = fs.existsSync(COVERS) ? JSON.parse(fs.readFileSync(COVERS, 'utf8')) : {};
const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);
const posts = [];
for (const r of rows) {
  const slug = r.Slug; const pdf = path.join(PACK, 'individual_blogs', `${slug}.pdf`);
  const blocks = parseBody(pdfText(pdf));
  const body = toBody(blocks, slug);
  if (mode === 'report') {
    const types = body.map((b) => b.type);
    const counts = ['lede', 'p', 'h2', 'ul', 'figure', 'callout'].map((t) => `${t}=${types.filter((x) => x === t).length}`).join(' ');
    console.log(`\n### ${slug}  (${types.length} blocks: ${counts})`);
    body.forEach((b, i) => {
      if (b.type === 'h2') console.log(`  H2  ${b.text}`);
      else if (b.type === 'ul') console.log(`  UL  ${b.items.length} items: ${b.items[0].slice(0, 80)}...`);
      else if (b.type === 'figure') console.log(`  FIG ${b.caption}`);
      else if (b.type === 'callout') console.log(`  CTA ${b.text.slice(0, 70)}...`);
      else if (b.type === 'p' && (b.text.length < 70 || b.text.startsWith('**'))) console.log(`  P?  ${b.text}`);
      if (b.type === 'p' && /^[a-z]/.test(b.text)) console.log(`  !! lowercase start: ${b.text.slice(0, 60)}`);
      if (b.type === 'lede' && i !== 0) console.log('  !! lede not first');
    });
    if (!body.some((b) => b.type === 'callout')) console.log('  !! no callout');
  }
  if (mode === 'extract') {
    const jpg = extractJpeg(pdf);
    fs.writeFileSync(path.join(IMG_DIR, `${slug}-illustration.jpg`), jpg);
    console.log(`${slug}-illustration.jpg ${jpg.length}`);
  }
  const secondary = r['Secondary Keywords'].split(',').map((k) => fixCase(k.trim())).filter(Boolean);
  const c = covers[slug] || {};
  posts.push({
    slug,
    tag: r['Service Category'],
    title: r['Blog Title'],
    seoTitle: r['SEO Title'],
    subtitle: r['Meta Description'],
    excerpt: r['Meta Description'],
    date: 'Sep 2026',
    dateISO: '2026-09-28',
    cover: `/images/blogs/${slug}-cover.webp`,
    coverAlt: c.alt || r['Blog Title'],
    coverCredit: c.credit || undefined,
    focusKeyword: r['Focus Keyword'],
    keywords: [fixCase(r['Focus Keyword']), ...secondary],
    body,
  });
}
if (mode === 'write') {
  const header = `/* ─── Service-line blog posts ───────────────────────────────────────────
 * Generated from the "Maieutic_Edutech_23_Blogs_PDF" content pack and its
 * blog_metadata sheet (SEO title, meta description, focus/secondary keywords,
 * service category). Body blocks use the same schema as blogs.js.
 * Cover photos are from Unsplash (see coverCredit); in-article illustrations
 * were extracted from the PDFs. Regenerate with: node tools/build-blogs.mjs write
 */

export const serviceBlogs = `;
  fs.writeFileSync(OUT_JS, header + JSON.stringify(posts, null, 2) + ';\n');
  console.log(`wrote ${OUT_JS} (${posts.length} posts)`);
}
