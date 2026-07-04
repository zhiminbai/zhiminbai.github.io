const MARGIN = { left: 0.5, right: 0.5, top: 0.4, bottom: 0.4 };

const slideConfig = {
  type: 'content',
  index: 8,
  title: '行业警示'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addText("行业警示", {
    x: MARGIN.left, y: MARGIN.top, w: 9, h: 0.7,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: MARGIN.left, y: 1.0, w: 0.8, h: 0.05,
    fill: { color: theme.accent }
  });

  slide.addText("民营银行整体风险加速出清，众邦不是第一个，也不会是最后一个", {
    x: MARGIN.left, y: 1.2, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent
  });

  const insights = [
    {
      num: "1",
      title: "产业资本办银行的模式困境",
      body: "民营银行股东多为实业企业，当主业下行时，" +
            "银行容易被当作'融资平台'或'信用放大器'。" +
            "众邦银行的案例表明：股东的财务风险会直接传导至银行。",
      color: "D32F2F"
    },
    {
      num: "2",
      title: "互联网存款贷款模式的脆弱性",
      body: "依赖第三方平台获客+放贷的模式，" +
            "导致银行对底层资产的风险识别能力不足。" +
            "平台违规操作的成本最终由银行承担。",
      color: "E65100"
    },
    {
      num: "3",
      title: "中小银行风险出清加速",
      body: "从包商银行到辽沈银行，再到众邦银行，" +
            "中小银行风险处置正在进入常态化。" +
            "民营银行资本充足率、不良率等指标弱于行业均值。",
      color: "F57C00"
    },
    {
      num: "4",
      title: "地方国资入主成为趋势",
      body: "通过参股、控股到全面接管，地方国资正在" +
            "成为民营银行风险处置的重要力量。" +
            "股权结构优化是化解风险的关键路径。",
      color: theme.primary
    }
  ];

  insights.forEach((item, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = MARGIN.left + col * 4.65;
    const y = 1.7 + row * 1.75;

    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: 4.4, h: 1.55,
      fill: { color: theme.light }, rectRadius: 0.08,
      line: { color: "E0E0E0", width: 0.5 }
    });

    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: 0.08, h: 1.55,
      fill: { color: item.color }
    });

    slide.addText(item.num, {
      x: x + 0.2, y: y + 0.1, w: 0.4, h: 0.4,
      fontSize: 20, fontFace: "Arial",
      color: item.color, bold: true
    });

    slide.addText(item.title, {
      x: x + 0.6, y: y + 0.1, w: 3.6, h: 0.4,
      fontSize: 15, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });

    slide.addText(item.body, {
      x: x + 0.2, y: y + 0.55, w: 4.0, h: 0.9,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary, valign: "top"
    });
  });

  slide.addText("08", {
    x: 8.75, y: 5.0, w: 0.5, h: 0.3,
    fontSize: 10, fontFace: "Arial",
    color: "BDBDBD", align: "right"
  });

  slide.addNotes("【演讲备注】\n" +
    "这一页我们跳出众邦银行个案，看行业层面的启示。\n\n" +
    "第一，产业资本办银行的模式存在内在矛盾。" +
    "民营银行的股东大多是实业老板，当他们的主业遇到困难，银行账户就成了最方便的资金来源。" +
    "关联交易、资金占用等问题防不胜防。\n\n" +
    "第二，互联网存款贷款模式在这次危机中暴露了脆弱性。" +
    "银行把获客和风控都外包给了第三方平台，自己只出钱，结果就是风险失控。" +
    "这是整个金融科技监管需要反思的问题。\n\n" +
    "第三，中小银行风险出清在加速。从包商银行到辽沈银行到众邦，" +
    "监管正在用市场化法治化的方式处置风险，而不是一味兜底。\n\n" +
    "第四，地方国资正在成为民营银行风险处置的关键力量。" +
    "从战略入股到全面接管，国资入主可能是未来民营银行治理结构优化的一个重要方向。"
  );

  return slide;
}

module.exports = { createSlide, slideConfig };
