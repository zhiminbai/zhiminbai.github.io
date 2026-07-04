const MARGIN = { left: 0.5, right: 0.5, top: 0.4, bottom: 0.4 };

const slideConfig = {
  type: 'cover',
  index: 1,
  title: '众邦银行问题深度分析'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 2.8,
    fill: { color: theme.primary }
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 1.5, y: 2.8, w: 7, h: 0.04,
    fill: { color: theme.accent }
  });

  slide.addText("众邦银行问题深度分析", {
    x: MARGIN.left, y: 0.8, w: 9, h: 1.2,
    fontSize: 40, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center", valign: "middle"
  });

  slide.addText("从被接管看民营银行治理困局", {
    x: MARGIN.left, y: 1.9, w: 9, h: 0.6,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: "E0E0E0", align: "center"
  });

  slide.addText("内部培训资料", {
    x: 3.5, y: 4.2, w: 3, h: 0.7,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", align: "center", valign: "middle",
    fill: { color: theme.accent }, rectRadius: 0.08
  });

  slide.addText("2026年7月", {
    x: MARGIN.left, y: 5.0, w: 9, h: 0.3,
    fontSize: 12, fontFace: "Arial",
    color: theme.secondary, align: "center"
  });

  slide.addNotes("【演讲备注】\n" +
    "开场白建议：\n" +
    "各位同事好，今天我们来深入分析众邦银行被接管这个事件。" +
    "这不仅是近期金融领域的一个重大新闻，更是我们理解民营银行治理风险的典型案例。" +
    "我会从事件经过、股东结构、资产质量、合规问题、储户保障和行业启示几个方面展开。" +
    "预计用时20分钟。"
  );

  return slide;
}

module.exports = { createSlide, slideConfig };
