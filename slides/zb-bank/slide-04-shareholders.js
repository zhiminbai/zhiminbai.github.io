const MARGIN = { left: 0.5, right: 0.5, top: 0.4, bottom: 0.4 };
const GRID = {
  x: [0.5, 1.25, 2.0, 2.75, 3.5, 4.25, 5.0, 5.75, 6.5, 7.25, 8.0, 8.75],
  y: [0.4, 1.3, 2.2, 3.1, 4.0, 4.9]
};

const slideConfig = {
  type: 'content',
  index: 4,
  title: '股东之殇'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addText("股东之殇", {
    x: MARGIN.left, y: MARGIN.top, w: 9, h: 0.7,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: MARGIN.left, y: 1.0, w: 0.8, h: 0.05,
    fill: { color: theme.accent }
  });

  slide.addText("6家湖北民企股东，股权高度集中，多家陷入债务危机", {
    x: MARGIN.left, y: 1.2, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent
  });

  const shareholders = [
    { name: "卓尔控股", pct: "30%", role: "主发起人", status: "董事阎志2025年退出\n有被执行人记录", level: "high" },
    { name: "壹网通科技", pct: "20%", role: "联合发起", status: "暂无明显风险信号", level: "low" },
    { name: "武汉当代科技", pct: "20%", role: "联合发起", status: "2022年起债务危机\n2024年9月进入重整", level: "critical" },
    { name: "钰龙集团", pct: "10%", role: "参与发起", status: "股权多次冻结并\n拍卖流拍", level: "critical" },
    { name: "奥山投资", pct: "10%", role: "参与发起", status: "2025年1月\n2亿股权被冻结", level: "high" },
    { name: "法斯克能源", pct: "10%", role: "参与发起", status: "暂无明显风险信号", level: "low" }
  ];

  const cardW = 2.8;
  const cardH = 2.7;
  const startX = MARGIN.left;
  const startY = 1.8;
  const gapX = 0.3;

  shareholders.forEach((s, i) => {
    const col = i % 3;
    const row = Math.floor(i / 3);
    const x = startX + col * (cardW + gapX);
    const y = startY + row * (cardH + 0.2);

    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: cardW, h: cardH,
      fill: { color: theme.light }, rectRadius: 0.08,
      line: { color: "E0E0E0", width: 0.5 }
    });

    let statusColor;
    if (s.level === "critical") statusColor = "D32F2F";
    else if (s.level === "high") statusColor = "F57C00";
    else statusColor = "388E3C";

    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: cardW, h: 0.06,
      fill: { color: statusColor }
    });

    slide.addText(s.pct, {
      x: x + 0.15, y: y + 0.2, w: 1.0, h: 0.45,
      fontSize: 28, fontFace: "Arial",
      color: theme.primary, bold: true
    });

    slide.addText(s.name, {
      x: x + 1.1, y: y + 0.2, w: 1.6, h: 0.25,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });

    slide.addText(s.role, {
      x: x + 1.1, y: y + 0.45, w: 1.6, h: 0.2,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });

    slide.addShape(pres.shapes.RECTANGLE, {
      x: x + 0.15, y: y + 0.75, w: cardW - 0.3, h: 0.01,
      fill: { color: "E0E0E0" }
    });

    slide.addText(s.status, {
      x: x + 0.15, y: y + 0.9, w: cardW - 0.3, h: 1.5,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary, valign: "top"
    });
  });

  slide.addText("04", {
    x: 8.75, y: 5.0, w: 0.5, h: 0.3,
    fontSize: 10, fontFace: "Arial",
    color: "BDBDBD", align: "right"
  });

  slide.addNotes("【演讲备注】\n" +
    "这是众邦银行问题的核心根源——股东层面的系统性风险。" +
    "银行有6个股东，全部是湖北本地民营企业，股权高度集中在单一产业资本手中。" +
    "卓尔控股是主发起人，也是阎志控制的核心企业，但近年来也面临经营压力。" +
    "当代科技是最严重的风险点——2022年开始债务危机，2024年9月正式进入重整。" +
    "钰龙集团的股权多次被司法冻结，上架拍卖却无人问津，说明市场对这些股权的价值评估很低。" +
    "奥山投资也在2025年被冻结了2亿股权。" +
    "6个股东中有4个出问题，这种程度的股东危机必然传导到银行自身。" +
    "这暴露了民营银行'产业资本办银行'的深层风险：当实业出问题时，银行就成了提款机。"
  );

  return slide;
}

module.exports = { createSlide, slideConfig };
