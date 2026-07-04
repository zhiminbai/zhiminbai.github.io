const MARGIN = { left: 0.5, right: 0.5, top: 0.4, bottom: 0.4 };
const GRID = {
  x: [0.5, 1.25, 2.0, 2.75, 3.5, 4.25, 5.0, 5.75, 6.5, 7.25, 8.0, 8.75],
  y: [0.4, 1.3, 2.2, 3.1, 4.0, 4.9]
};

const slideConfig = {
  type: 'toc',
  index: 2,
  title: '目录'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addText("目录", {
    x: MARGIN.left, y: MARGIN.top, w: 9, h: 0.7,
    fontSize: 36, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: MARGIN.left, y: 1.0, w: 1.2, h: 0.06,
    fill: { color: theme.accent }
  });

  const tocItems = [
    { num: "01", title: "事件概览", sub: "被接管的核心事实与时间线" },
    { num: "02", title: "股东之殇", sub: "六家民企股东的连环危机" },
    { num: "03", title: "资产质量恶化", sub: "关键指标的趋势分析" },
    { num: "04", title: "合规与经营缺陷", sub: "罚款、投诉与平台合作风险" },
    { num: "05", title: "行业警示", sub: "民营银行治理的反思" }
  ];

  tocItems.forEach((item, index) => {
    const yPos = GRID.y[1] + index * 0.9;

    slide.addShape(pres.shapes.RECTANGLE, {
      x: MARGIN.left, y: yPos, w: 0.08, h: 0.6,
      fill: { color: theme.accent }
    });

    slide.addText(item.num, {
      x: GRID.x[1], y: yPos, w: 0.6, h: 0.35,
      fontSize: 20, fontFace: "Arial",
      color: theme.accent, bold: true
    });

    slide.addText(item.title, {
      x: GRID.x[1], y: yPos + 0.3, w: 5, h: 0.35,
      fontSize: 18, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });

    slide.addText(item.sub, {
      x: 4.5, y: yPos + 0.1, w: 5, h: 0.5,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary, align: "right", valign: "middle"
    });

    if (index < tocItems.length - 1) {
      slide.addShape(pres.shapes.RECTANGLE, {
        x: MARGIN.left, y: yPos + 0.75, w: 9, h: 0.01,
        fill: { color: theme.light }
      });
    }
  });

  slide.addText("02", {
    x: 8.75, y: 5.0, w: 0.5, h: 0.3,
    fontSize: 10, fontFace: "Arial",
    color: "BDBDBD", align: "right"
  });

  slide.addNotes("【演讲备注】\n" +
    "今天的内容分为五个部分：\n" +
    "首先回顾事件经过，然后深入分析股东层面的系统性风险，" +
    "接着看资产质量的变化趋势，再到合规经营方面暴露的问题，" +
    "最后从行业角度总结民营银行治理的教训与启示。"
  );

  return slide;
}

module.exports = { createSlide, slideConfig };
