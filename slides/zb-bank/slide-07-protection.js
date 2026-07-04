const MARGIN = { left: 0.5, right: 0.5, top: 0.4, bottom: 0.4 };

const slideConfig = {
  type: 'content',
  index: 7,
  title: '储户保障与处置方案'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addText("储户保障与处置方案", {
    x: MARGIN.left, y: MARGIN.top, w: 9, h: 0.7,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: MARGIN.left, y: 1.0, w: 0.8, h: 0.05,
    fill: { color: theme.accent }
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: MARGIN.left, y: 1.3, w: 4.3, h: 3.6,
    fill: { color: "E8F5E9" }, rectRadius: 0.1,
    line: { color: "A5D6A7", width: 1 }
  });

  slide.addText("保障方案", {
    x: 0.7, y: 1.45, w: 3.9, h: 0.4,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: "2E7D32", bold: true
  });

  slide.addText([
    { text: "个人存款", options: { bold: true, fontSize: 13, breakLine: true } },
    { text: "本息全额保障，不受任何影响", options: { fontSize: 14, color: "2E7D32", bold: true, breakLine: true } },
    { text: "", options: { breakLine: true, fontSize: 4 } },
    { text: "对公存款 / 同业负债", options: { bold: true, fontSize: 13, breakLine: true } },
    { text: "本息5000万元（含）以下全额保障", options: { fontSize: 13, breakLine: true } },
    { text: "超出部分按规定保障方案执行", options: { fontSize: 12, color: theme.secondary, breakLine: true } },
    { text: "", options: { breakLine: true, fontSize: 4 } },
    { text: "接管后新增存款及同业负债", options: { bold: true, fontSize: 13, breakLine: true } },
    { text: "本息同样享受全额保障", options: { fontSize: 13, color: "2E7D32", bold: true, breakLine: true } },
    { text: "", options: { breakLine: true, fontSize: 4 } },
    { text: "各项业务", options: { bold: true, fontSize: 13, breakLine: true } },
    { text: "接管期间照常办理", options: { fontSize: 13 } },
  ], {
    x: 0.7, y: 1.9, w: 3.9, h: 2.8,
    fontFace: "Microsoft YaHei",
    color: theme.secondary, valign: "top", paraSpaceAfter: 2
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.2, y: 1.3, w: 4.3, h: 3.6,
    fill: { color: "E3F2FD" }, rectRadius: 0.1,
    line: { color: "90CAF9", width: 1 }
  });

  slide.addText("后续处置路径", {
    x: 5.4, y: 1.45, w: 3.9, h: 0.4,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  slide.addText([
    { text: "汉口银行承接", options: { bold: true, fontSize: 13, breakLine: true } },
    { text: "在监管监督下，汉口银行依法依规承接", options: { fontSize: 12, breakLine: true } },
    { text: "众邦银行全部资产、负债、业务和人员", options: { fontSize: 12, breakLine: true } },
    { text: "", options: { breakLine: true, fontSize: 4 } },
    { text: '"接管+承接"模式', options: { bold: true, fontSize: 13, breakLine: true } },
    { text: "市场化、法治化处置高风险机构的", options: { fontSize: 12, breakLine: true } },
    { text: "一贯做法", options: { fontSize: 12, breakLine: true } },
    { text: "", options: { breakLine: true, fontSize: 4 } },
    { text: "存款保险机制", options: { bold: true, fontSize: 13, breakLine: true } },
    { text: "存款保险基金管理有限责任公司", options: { fontSize: 12, breakLine: true } },
    { text: "参与接管组，保障存款人权益", options: { fontSize: 12 } },
  ], {
    x: 5.4, y: 1.9, w: 3.9, h: 2.8,
    fontFace: "Microsoft YaHei",
    color: theme.secondary, valign: "top", paraSpaceAfter: 2
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.3, y: 5.0, w: 4, h: 0.35,
    fill: { color: "FFF3E0" }, rectRadius: 0.05
  });

  slide.addText("⚠ 个人存款本息全额保障，无需恐慌挤提", {
    x: 0.4, y: 5.0, w: 3.8, h: 0.35,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: "E65100", valign: "middle"
  });

  slide.addText("07", {
    x: 8.75, y: 5.0, w: 0.5, h: 0.3,
    fontSize: 10, fontFace: "Arial",
    color: "BDBDBD", align: "right"
  });

  slide.addNotes("【演讲备注】\n" +
    "这一页讲储户最关心的问题：钱安全吗？\n\n" +
    "官方的保障方案是非常明确的：\n" +
    "个人存款本息全额保障——这是最高等级的保障，没有上限。\n" +
    "对公存款5000万以下也是全额保障，体现了对中小企业的保护。\n" +
    "接管后新增存款同样全额保障，这是为了稳定信心、防止挤兑。\n\n" +
    "处置路径采用的是'接管+承接'模式，和包商银行的处置方式类似。" +
    "汉口银行作为承接方，是一家经营稳健的本地银行，由它来承接是比较稳妥的安排。\n\n" +
    "关键提醒：存款保险制度在起作用，储户不需要恐慌性挤提，" +
    "挤提反而会增加银行流动性压力，对处置工作不利。"
  );

  return slide;
}

module.exports = { createSlide, slideConfig };
