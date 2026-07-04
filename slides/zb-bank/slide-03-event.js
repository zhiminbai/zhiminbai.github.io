const MARGIN = { left: 0.5, right: 0.5, top: 0.4, bottom: 0.4 };
const GRID = {
  x: [0.5, 1.25, 2.0, 2.75, 3.5, 4.25, 5.0, 5.75, 6.5, 7.25, 8.0, 8.75],
  y: [0.4, 1.3, 2.2, 3.1, 4.0, 4.9]
};

const slideConfig = {
  type: 'content',
  index: 3,
  title: '事件概览'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addText("事件概览", {
    x: MARGIN.left, y: MARGIN.top, w: 9, h: 0.7,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: MARGIN.left, y: 1.0, w: 0.8, h: 0.05,
    fill: { color: theme.accent }
  });

  slide.addText("2026年7月3日，国家金融监督管理总局联合湖北省人民政府\n对武汉众邦银行实施接管", {
    x: MARGIN.left, y: 1.3, w: 9, h: 0.7,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.secondary, valign: "top"
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: MARGIN.left, y: 2.1, w: 4.3, h: 3.0,
    fill: { color: theme.light }, rectRadius: 0.1
  });

  slide.addText("接管安排", {
    x: 0.7, y: 2.2, w: 3.9, h: 0.4,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  slide.addText([
    { text: "原因：出现严重信用风险", options: { bullet: true, breakLine: true } },
    { text: "期限：2026.7.3 — 2027.7.2，为期1年", options: { bullet: true, breakLine: true } },
    { text: "接管组：湖北省地方金融管理局、武汉市人民政府牵头", options: { bullet: true, breakLine: true } },
    { text: "三会停止履职，接管组行使经营管理权", options: { bullet: true, breakLine: true } },
    { text: "汉口银行承接全部资产负债和人员", options: { bullet: true } },
  ], {
    x: 0.7, y: 2.65, w: 3.9, h: 2.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary, valign: "top", paraSpaceAfter: 6
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.2, y: 2.1, w: 4.3, h: 3.0,
    fill: { color: theme.light }, rectRadius: 0.1
  });

  slide.addText("法律依据", {
    x: 5.4, y: 2.2, w: 3.9, h: 0.4,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  slide.addText([
    { text: "《中华人民共和国银行业监督管理法》", options: { bullet: true, breakLine: true } },
    { text: "《中华人民共和国商业银行法》", options: { bullet: true, breakLine: true } },
    { text: "存款保险基金管理有限责任公司参与", options: { bullet: true, breakLine: true } },
    { text: "依据：为保护存款人和其他客户合法权益", options: { bullet: true } },
  ], {
    x: 5.4, y: 2.65, w: 3.9, h: 2.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary, valign: "top", paraSpaceAfter: 6
  });

  slide.addText("03", {
    x: 8.75, y: 5.0, w: 0.5, h: 0.3,
    fontSize: 10, fontFace: "Arial",
    color: "BDBDBD", align: "right"
  });

  slide.addNotes("【演讲备注】\n" +
    "这是整个事件的核心事实。2026年7月3日，国家金融监管总局联合湖北省政府发布了接管公告。" +
    "这是民营银行领域首例被接管案例，也是继包商银行之后又一个重要的银行风险处置事件。" +
    "接管组由地方政府和监管部门联合组成，体现了中央和地方协同处置风险的模式。" +
    "特别注意：三会停止履职是一个重大信号，意味着原治理架构已经完全失灵。" +
    "汉口银行的承接安排，实际上是'以大带小'、'以国有带民营'的风险化解路径。"
  );

  return slide;
}

module.exports = { createSlide, slideConfig };
