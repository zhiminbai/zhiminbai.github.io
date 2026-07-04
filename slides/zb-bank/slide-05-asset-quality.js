const MARGIN = { left: 0.5, right: 0.5, top: 0.4, bottom: 0.4 };
const GRID = {
  x: [0.5, 1.25, 2.0, 2.75, 3.5, 4.25, 5.0, 5.75, 6.5, 7.25, 8.0, 8.75],
  y: [0.4, 1.3, 2.2, 3.1, 4.0, 4.9]
};

const slideConfig = {
  type: 'content',
  index: 5,
  title: '资产质量恶化'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addText("资产质量恶化", {
    x: MARGIN.left, y: MARGIN.top, w: 9, h: 0.7,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: MARGIN.left, y: 1.0, w: 0.8, h: 0.05,
    fill: { color: theme.accent }
  });

  slide.addText("账面不良率可控，但前瞻指标早已拉响警报", {
    x: MARGIN.left, y: 1.2, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent
  });

  slide.addText("2024年年报核心指标", {
    x: MARGIN.left, y: 1.7, w: 4.3, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  const tableRows = [
    [
      { text: "指标", options: { fontSize: 11, bold: true, color: "FFFFFF", align: "center", fill: { color: theme.primary } } },
      { text: "2024年", options: { fontSize: 11, bold: true, color: "FFFFFF", align: "center", fill: { color: theme.primary } } },
      { text: "2023年", options: { fontSize: 11, bold: true, color: "FFFFFF", align: "center", fill: { color: theme.primary } } },
      { text: "变动", options: { fontSize: 11, bold: true, color: "FFFFFF", align: "center", fill: { color: theme.primary } } }
    ],
    [
      { text: "资产总额", options: { fontSize: 11, align: "center" } },
      { text: "1,235亿", options: { fontSize: 11, align: "center", bold: true } },
      { text: "1,146亿", options: { fontSize: 11, align: "center" } },
      { text: "+7.8%", options: { fontSize: 11, align: "center", color: "388E3C" } }
    ],
    [
      { text: "营业收入", options: { fontSize: 11, align: "center" } },
      { text: "18.12亿", options: { fontSize: 11, align: "center", bold: true } },
      { text: "19.32亿", options: { fontSize: 11, align: "center" } },
      { text: "-6.2%", options: { fontSize: 11, align: "center", color: "D32F2F" } }
    ],
    [
      { text: "净利润", options: { fontSize: 11, align: "center" } },
      { text: "5.11亿", options: { fontSize: 11, align: "center", bold: true } },
      { text: "4.05亿", options: { fontSize: 11, align: "center" } },
      { text: "+26%", options: { fontSize: 11, align: "center", color: "388E3C" } }
    ],
    [
      { text: "不良贷款率", options: { fontSize: 11, align: "center" } },
      { text: "1.50%", options: { fontSize: 11, align: "center", bold: true } },
      { text: "1.73%", options: { fontSize: 11, align: "center" } },
      { text: "-0.23pp", options: { fontSize: 11, align: "center", color: "388E3C" } }
    ],
    [
      { text: "拨备覆盖率", options: { fontSize: 11, align: "center" } },
      { text: "267.29%", options: { fontSize: 11, align: "center", bold: true } },
      { text: "248.04%", options: { fontSize: 11, align: "center" } },
      { text: "+19.25pp", options: { fontSize: 11, align: "center", color: "388E3C" } }
    ],
    [
      { text: "资本充足率", options: { fontSize: 11, align: "center" } },
      { text: "10.67%", options: { fontSize: 11, align: "center", bold: true } },
      { text: "10.67%", options: { fontSize: 11, align: "center" } },
      { text: "持平", options: { fontSize: 11, align: "center", color: theme.secondary } }
    ]
  ];

  slide.addTable(tableRows, {
    x: MARGIN.left, y: 2.15, w: 4.5,
    colW: [1.1, 1.1, 1.1, 1.0],
    rowH: [0.35, 0.32, 0.32, 0.32, 0.32, 0.32, 0.32],
    border: { type: "solid", color: "E0E0E0", pt: 0.5 },
    fontFace: "Microsoft YaHei",
    color: theme.secondary,
    alternateRow: true,
    autoPage: false
  });

  slide.addText("前瞻风险指标（更值得警惕）", {
    x: 5.2, y: 1.7, w: 4.5, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "D32F2F", bold: true
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.2, y: 2.15, w: 4.3, h: 2.6,
    fill: { color: "FFF3E0" }, rectRadius: 0.08,
    line: { color: "FFCC80", width: 1 }
  });

  slide.addText([
    { text: "关注类贷款占比", options: { bold: true, breakLine: true } },
    { text: "2021年 1.25%  →  2024年中 4.32%", options: { color: "D32F2F", fontSize: 14, breakLine: true } },
    { text: "（+3.07个百分点，三年翻3.5倍）", options: { color: theme.secondary, fontSize: 10, breakLine: true } },
    { text: "", options: { breakLine: true, fontSize: 6 } },
    { text: "逾期贷款余额", options: { bold: true, breakLine: true } },
    { text: "2021年 7.49亿  →  2024年中 25.62亿", options: { color: "D32F2F", fontSize: 14, breakLine: true } },
    { text: "（+18.13亿，三年增2.4倍）", options: { color: theme.secondary, fontSize: 10, breakLine: true } },
    { text: "", options: { breakLine: true, fontSize: 6 } },
    { text: "2025年：19家民营银行中唯一", options: { bold: true, breakLine: true } },
    { text: "未按时披露年报的机构", options: { color: "D32F2F", fontSize: 14, bold: true } },
  ], {
    x: 5.4, y: 2.3, w: 3.9, h: 2.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary, valign: "top", paraSpaceAfter: 2
  });

  slide.addText("数据来源：国家金融监管总局公告 / 众邦银行2024年年报 / 公开报道", {
    x: MARGIN.left, y: 5.0, w: 9, h: 0.3,
    fontSize: 8, fontFace: "Microsoft YaHei",
    color: "BDBDBD"
  });

  slide.addText("05", {
    x: 8.75, y: 5.0, w: 0.5, h: 0.3,
    fontSize: 10, fontFace: "Arial",
    color: "BDBDBD", align: "right"
  });

  slide.addNotes("【演讲备注】\n" +
    "这张幻灯片是整个分析中最核心的一页。\n\n" +
    "左边是2024年年报的账面数据。从这些数据看，众邦银行似乎还不错：\n" +
    "资产规模超千亿，净利润增长26%，不良率下降到了1.5%。\n" +
    "但如果只看这些数字，就会陷入'表面光鲜'的误区。\n\n" +
    "右边的前瞻指标才是真正的警报：\n" +
    "关注类贷款占比从1.25%飙升到4.32%，这是不良贷款的预备队。" +
    "逾期贷款余额三年增加了2.4倍，从7.49亿到25.62亿。" +
    "更关键的是：众邦银行是2025年全国19家民营银行中唯一没有按时披露年报的。\n" +
    "所以监管出手的定性是'严重信用风险'，而不是'轻微风险'。" +
    "账面不良率可控，但风险的积累已经超出了报表所能反映的范围。"
  );

  return slide;
}

module.exports = { createSlide, slideConfig };
