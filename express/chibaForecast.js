module.exports = {
  publicTime: '2022-05-19T05:00:00+09:00',
  publicTimeFormatted: '2022/05/19 05:00:00',
  publishingOffice: '銚子地方気象台',
  title: '千葉県 千葉 の天気',
  link: 'https://www.jma.go.jp/bosai/forecast/#area_type=offices&area_code=120000',
  description: {
    publicTime: '2022-05-19T04:35:00+09:00',
    publicTimeFormatted: '2022/05/19 04:35:00',
    headlineText: '',
    bodyText:
      '　本州付近は高気圧に覆われています。\n\n　千葉県は、おおむね晴れとなっています。\n\n　１９日は、高気圧に覆われますが、気圧の谷や湿った空気の影響を受けるため、晴れ朝晩曇りとなるでしょう。\n\n　２０日は、高気圧に覆われますが、気圧の谷や湿った空気の影響を受けるため、曇り時々晴れとなる見込みです。\n\n　千葉県の太平洋沿岸の海上では、１９日から２０日にかけて、波がやや高いでしょう。',
    text: '　本州付近は高気圧に覆われています。\n\n　千葉県は、おおむね晴れとなっています。\n\n　１９日は、高気圧に覆われますが、気圧の谷や湿った空気の影響を受けるため、晴れ朝晩曇りとなるでしょう。\n\n　２０日は、高気圧に覆われますが、気圧の谷や湿った空気の影響を受けるため、曇り時々晴れとなる見込みです。\n\n　千葉県の太平洋沿岸の海上では、１９日から２０日にかけて、波がやや高いでしょう。',
  },
  forecasts: [
    {
      date: '2022-05-19',
      dateLabel: '今日',
      telop: '晴時々曇',
      detail: {
        weather: '晴れ　朝晩　くもり　所により　昼前　まで　霧',
        wind: '南西の風　後　南の風　海上　では　南の風　やや強く',
        wave: '０．５メートル　後　１メートル',
      },
      temperature: {
        min: {
          celsius: null,
          fahrenheit: null,
        },
        max: {
          celsius: '25',
          fahrenheit: '77',
        },
      },
      chanceOfRain: {
        T00_06: '--%',
        T06_12: '0%',
        T12_18: '0%',
        T18_24: '10%',
      },
      image: {
        title: '晴時々曇',
        url: 'https://www.jma.go.jp/bosai/forecast/img/101.svg',
        width: 80,
        height: 60,
      },
    },
    {
      date: '2022-05-20',
      dateLabel: '明日',
      telop: '曇時々晴',
      detail: {
        weather: 'くもり　時々　晴れ',
        wind: '南西の風　後　南の風',
        wave: '０．５メートル',
      },
      temperature: {
        min: {
          celsius: '18',
          fahrenheit: '64.4',
        },
        max: {
          celsius: '25',
          fahrenheit: '77',
        },
      },
      chanceOfRain: {
        T00_06: '0%',
        T06_12: '0%',
        T12_18: '10%',
        T18_24: '10%',
      },
      image: {
        title: '曇時々晴',
        url: 'https://www.jma.go.jp/bosai/forecast/img/201.svg',
        width: 80,
        height: 60,
      },
    },
    {
      date: '2022-05-21',
      dateLabel: '明後日',
      telop: '曇時々晴',
      detail: {
        weather: null,
        wind: null,
        wave: null,
      },
      temperature: {
        min: {
          celsius: '17',
          fahrenheit: '62.6',
        },
        max: {
          celsius: '23',
          fahrenheit: '73.4',
        },
      },
      chanceOfRain: {
        T00_06: '30%',
        T06_12: '30%',
        T12_18: '30%',
        T18_24: '30%',
      },
      image: {
        title: '曇時々晴',
        url: 'https://www.jma.go.jp/bosai/forecast/img/201.svg',
        width: 80,
        height: 60,
      },
    },
  ],
  location: {
    area: '関東',
    prefecture: '千葉県',
    district: '北西部',
    city: '千葉',
  },
  copyright: {
    title: '(C) 天気予報 API（livedoor 天気互換）',
    link: 'https://weather.tsukumijima.net/',
    image: {
      title: '天気予報 API（livedoor 天気互換）',
      link: 'https://weather.tsukumijima.net/',
      url: 'https://weather.tsukumijima.net/logo.png',
      width: 120,
      height: 120,
    },
    provider: [
      {
        link: 'https://www.jma.go.jp/jma/',
        name: '気象庁 Japan Meteorological Agency',
        note: '気象庁 HP にて配信されている天気予報を JSON データへ編集しています。',
      },
    ],
  },
};
