const fs = require("node:fs");
const path = require("node:path");

const output = "dist";
const files = [
  "index.html",
  "404.html",
  "favicon.png",
  "robots.txt",
  "sitemap.xml",
  "_headers",
  "_redirects",
  "llms.txt",
  "og-image.svg",
];

fs.rmSync(output, { recursive: true, force: true });
fs.mkdirSync(output, { recursive: true });

for (const file of files) {
  if (fs.existsSync(file) && fs.statSync(file).isFile()) {
    fs.copyFileSync(file, path.join(output, file));
  }
}

if (fs.existsSync("images")) {
  fs.cpSync("images", path.join(output, "images"), { recursive: true });
}

console.log("Sitio estático listo en dist/");
