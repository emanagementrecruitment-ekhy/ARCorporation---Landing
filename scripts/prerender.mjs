// Menyisipkan HTML hasil prerender ke dist/index.html dan membuat JSON-LD FAQ
// dari data FAQ yang sama dengan yang tampil di halaman (satu sumber data).
import { readFile, writeFile } from "node:fs/promises";
import { pathToFileURL } from "node:url";
import path from "node:path";

const root = process.cwd();
const { render, faqs } = await import(pathToFileURL(path.join(root, ".ssr", "entry-server.js")).href);
const html = await render();

const file = path.join(root, "dist", "index.html");
let page = await readFile(file, "utf8");
if (!page.includes('<div id="root"></div>')) throw new Error("Elemen #root tidak ditemukan di dist/index.html");

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
};
page = page
  .replace('<div id="root"></div>', () => `<div id="root">${html}</div>`)
  .replace("</head>", () => `<script type="application/ld+json">${JSON.stringify(faqLd)}</script></head>`);
await writeFile(file, page);

const text = html.replace(/<script[\s\S]*?<\/script>/g, "").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
console.log(`Prerender selesai: ${text.length} karakter teks, ${faqs.length} FAQ di JSON-LD`);