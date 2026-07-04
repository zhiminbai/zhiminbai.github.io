const MARGIN = { left: 0.5, right: 0.5, top: 0.4, bottom: 0.4 };
const GRID = {
  x: [0.5, 1.25, 2.0, 2.75, 3.5, 4.25, 5.0, 5.75, 6.5, 7.25, 8.0, 8.75],
  y: [0.4, 1.3, 2.2, 3.1, 4.0, 4.9]
};

const slideConfig = {
  type: 'content',
  index: 6,
  title: '合规与经营缺陷'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addText("合规与经营缺陷", {
    x: MARGIN.left, y: MARGIN.top, w: 9, h: 0.7,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: MARGIN.left, y: 1.0, w: 0.8, h: 0.05,
    fill: { color: theme.accent }
  });

  slide.addText("三道红线：股权管理、消费者保护、合作方合规", {
    x: MARGIN.left, y: 1.2, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent
  });

  const cards = [
    {
      icon: "01",
      title: "股权管理失位",
      color: "D32F2F",
      items: [
        "2023年3月因对股东股权管理不到位被监管罚款",
        "股东股权大量质押、冻结，银行未能有效管控",
        "第二大股东当代科技进入重整，银行被动应对"
      ]
    },
    {
      icon: "02",
      title: "消费者投诉高企",
      color: "E65100",
      items: [
        "2023年全年金融消费者投诉1,041笔",
        "投诉类型以贷款类为主",
        "涉及高额服务费、担保费争议"
      ]
    },
    {
      icon: "03",
      title: "第三方平台合作风险",
      color: "F57C00",
      items: [
        "与芸豆借款、国美易卡、桔多多等10+平台合作",
        "银行作为资金方，间接参与合作方违规操作",
        "未尽到对合作方有效管理的责任"
      ]
    }
  ];

  cards.forEach((card, i) => {
    const x = MARGIN.left + i * 3.1;
    const y = 1.7;

    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: 2.9, h: 3.2,
      fill: { color: theme.light }, rectRadius: 0.08,
      line: { color: "E0E0E0", width: 0.5 }
    });

    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: 2.9, h: 0.7,
      fill: { color: card.color }
    });

    slide.addText(card.icon, {
      x: x + 0.15, y: y + 0.05, w: 0.5, h: 0.6,
      fontSize: 22, fontFace: "Arial",
      color: "FFFFFF", bold: true, valign: "middle"
    });

    slide.addText(card.title, {
      x: x + 0.6, y: y + 0.05, w: 2.1, h: 0.6,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true, valign: "middle"
    });

    slide.addText(card.items.map((item, j) => ({
      text: item,
      options: {
        bullet: true,
        breakLine: j < card.items.length - 1,
        fontSize: 11
      }
    })), {
      x: x + 0.2, y: y + 0.9, w: 2.5, h: 2.0,
      fontFace: "Microsoft YaHei",
      color: theme.secondary,
      valign: "top", paraSpaceAfter: 8
    });
  });

  slide.addText("06", {
    x: 8.75, y: 5.0, w: 0.5, h: 0.3,
    fontSize: 10, fontFace: "Arial",
    color: "BDBDBD", align: "right"
  });

  slide.addNotes("【演讲备注】\n" +
    "合规问题是众邦银行风险的第三个维度。\n\n" +
    "第一，股权管理失位。2023年就已经因这个问题被监管部门罚款，但问题并未得到解决。" +
    "股东股权大量质押和冻结，说明银行对股东的约束力非常薄弱。\n\n" +
    "第二，消费者投诉超过1000笔。对于一家资产千亿的银行来说，这个数字并不小。" +
    "投诉集中在贷款领域，说明信贷业务的合规性存在系统性问题。\n\n" +
    "第三，也是最有行业共性的问题是：众邦银行过度依赖第三方互联网平台获客放贷。" +
    "芸豆借款、国美易卡、桔多多等平台在业内都以高利率、高费用著称。" +
    "银行作为资金方，实际上是'借通道放贷'，风险识别和贷后管理都存在重大缺陷。" +
    "这是整个互联网存款贷款产业链风险的缩影。"
  );

  return slide;
}

module.exports = { createSlide, slideConfig };
