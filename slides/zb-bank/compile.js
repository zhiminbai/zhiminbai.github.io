const pptxgen = require("pptxgenjs");
const fs = require("fs");
const path = require("path");

const theme = {
  primary: "1A3A6E",
  secondary: "455A64",
  accent: "D84315",
  light: "F5F5F5",
  bg: "FFFFFF"
};

const pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.author = "PPT Master";
pres.title = "众邦银行问题深度分析";
pres.subject = "从被接管看民营银行治理困局";

const outputDir = path.join(__dirname, "output");
if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

const slides = [
  "slide-01-cover.js",
  "slide-02-toc.js",
  "slide-03-event.js",
  "slide-04-shareholders.js",
  "slide-05-asset-quality.js",
  "slide-06-compliance.js",
  "slide-07-protection.js",
  "slide-08-industry.js",
  "slide-09-summary.js"
];

let ok = 0, fail = 0;
slides.forEach(f => {
  try {
    const mod = require(path.join(__dirname, f));
    mod.createSlide(pres, theme, {});
    console.log(`✓ ${f}`);
    ok++;
  } catch (err) {
    console.error(`✗ ${f}: ${err.message}`);
    fail++;
  }
});

console.log(`\n编译完成: ${ok} 成功, ${fail} 失败`);

const dateStr = new Date().toISOString().slice(0, 10).replace(/-/g, "");
const out = path.join(outputDir, `众邦银行问题分析-${dateStr}.pptx`);

pres.writeFile({ fileName: out })
  .then(() => console.log(`✓ 生成成功: ${out}`))
  .catch(err => console.error(`✗ 生成失败: ${err.message}`));
