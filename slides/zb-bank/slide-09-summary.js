const MARGIN = { left: 0.5, right: 0.5, top: 0.4, bottom: 0.4 };

const slideConfig = {
  type: 'summary',
  index: 9,
  title: '总结与反思'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addText("总结与反思", {
    x: MARGIN.left, y: MARGIN.top, w: 9, h: 0.7,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: MARGIN.left, y: 1.0, w: 0.8, h: 0.05,
    fill: { color: theme.accent }
  });

  slide.addText("核心结论", {
    x: MARGIN.left, y: 1.3, w: 4.3, h: 0.4,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  const keyPoints = [
    {
      text: "股东风险是根源",
      sub: "6家民企股东中4家出险，产业资本办银行的模式缺陷暴露无遗"
    },
    {
      text: "前瞻指标早已预警",
      sub: "关注类贷款占比3年翻3.5倍，逾期余额增2.4倍，监管出手并非突然"
    },
    {
      text: "合规漏洞持续积累",
      sub: "股权管理被罚、千笔投诉、第三方平台合作失控，风险层层叠加"
    },
    {
      text: "处置路径清晰有序",
      sub: "接管+承接+存款保险，个人存款全额保障，系统风险可控"
    },
    {
      text: "行业启示深远",
      sub: "民营银行治理亟待优化，互联网信贷模式需要重构"
    }
  ];

  keyPoints.forEach((item, i) => {
    const y = 1.85 + i * 0.65;

    slide.addShape(pres.shapes.RECTANGLE, {
      x: MARGIN.left, y: y, w: 0.08, h: 0.5,
      fill: { color: theme.accent }
    });

    slide.addText(item.text, {
      x: GRID.x[1], y: y, w: 4.0, h: 0.25,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });

    slide.addText(item.sub, {
      x: GRID.x[1], y: y + 0.24, w: 4.0, h: 0.26,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.2, y: 1.3, w: 4.3, h: 3.7,
    fill: { color: "FFF3E0" }, rectRadius: 0.1,
    line: { color: "FFCC80", width: 1 }
  });

  slide.addText("关键思考题", {
    x: 5.4, y: 1.4, w: 3.9, h: 0.4,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  slide.addText([
    { text: "1", options: { fontSize: 20, color: theme.accent, bold: true, breakLine: true } },
    { text: "民营银行的股东准入和持续监管是否足够严格？", options: { fontSize: 12, breakLine: true } },
    { text: "", options: { breakLine: true, fontSize: 6 } },
    { text: "2", options: { fontSize: 20, color: theme.accent, bold: true, breakLine: true } },
    { text: "银行能否真正独立于产业资本行使风险管理职能？", options: { fontSize: 12, breakLine: true } },
    { text: "", options: { breakLine: true, fontSize: 6 } },
    { text: "3", options: { fontSize: 20, color: theme.accent, bold: true, breakLine: true } },
    { text: "互联网平台合作放贷的风险究竟由谁承担？如何监管？", options: { fontSize: 12, breakLine: true } },
    { text: "", options: { breakLine: true, fontSize: 6 } },
    { text: "4", options: { fontSize: 20, color: theme.accent, bold: true, breakLine: true } },
    { text: "存款保险制度在银行风险处置中如何更好发挥作用？", options: { fontSize: 12 } },
  ], {
    x: 5.4, y: 1.9, w: 3.9, h: 2.8,
    fontFace: "Microsoft YaHei",
    color: theme.secondary, valign: "top", paraSpaceAfter: 2
  });

  slide.addText("09", {
    x: 8.75, y: 5.0, w: 0.5, h: 0.3,
    fontSize: 10, fontFace: "Arial",
    color: "BDBDBD", align: "right"
  });

  slide.addNotes("【演讲备注】\n" +
    "最后做一个总结。\n\n" +
    "众邦银行被接管不是一个孤立事件，而是中国民营银行发展十年来的一个标志性案例。" +
    "它告诉我们：银行的本质是信用中介，不是产业资本的融资工具。" +
    "当股东的实业出现危机，银行不能成为'提款机'。\n\n" +
    "从监管角度看，这次处置体现了几个积极变化：\n" +
    "一是市场化法治化程度提高，不再是一味兜底；\n" +
    "二是跨部门协同（央行、金融监管局、地方政府、存款保险）更加顺畅；\n" +
    "三是保障方案清晰透明，有利于稳定市场预期。\n\n" +
    "最后的四个思考题，大家可以回去思考，也欢迎在讨论环节交流。\n" +
    "谢谢大家！"
  );

  return slide;
}

const GRID = {
  x: [0.5, 1.25, 2.0, 2.75, 3.5, 4.25, 5.0, 5.75, 6.5, 7.25, 8.0, 8.75],
  y: [0.4, 1.3, 2.2, 3.1, 4.0, 4.9]
};

module.exports = { createSlide, slideConfig };
