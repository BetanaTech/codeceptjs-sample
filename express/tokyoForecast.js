module.exports = {
  publicTime: '2022-05-19T05:00:00+09:00',
  publicTimeFormatted: '2022/05/19 05:00:00',
  publishingOffice: '気象庁',
  title: '東京都 東京 の天気',
  link: 'https://www.jma.go.jp/bosai/forecast/#area_type=offices&area_code=130000',
  description: {
    publicTime: '2022-05-19T04:39:00+09:00',
    publicTimeFormatted: '2022/05/19 04:39:00',
    headlineText: '',
    bodyText:
      '　本州付近は高気圧に覆われています。\n\n　東京地方は、晴れています。\n\n　１９日は、高気圧に覆われますが、気圧の谷や湿った空気の影響を受けるため、晴れで夜は曇りとなるでしょう。\n\n　２０日は、高気圧に覆われますが、気圧の谷や湿った空気の影響を受けるでしょう。このため、曇りで昼過ぎまで時々晴れますが、多摩西部では、昼過ぎから雨の降る所がある見込みです。\n\n【関東甲信地方】\n　関東甲信地方は、おおむね晴れています。\n\n　１９日は、高気圧に覆われますが、気圧の谷や湿った空気の影響を受ける見込みです。このため、晴れや曇りとなるでしょう。\n\n　２０日は、高気圧に覆われますが、気圧の谷や湿った空気の影響を受ける見込みです。このため、曇りや晴れで、昼過ぎから雨の降る所があるでしょう。\n\n　関東地方と伊豆諸島の海上では、１９日から２０日にかけて、波がやや高い見込みです。また、所々で霧が発生しています。船舶は視程障害に注意してください。',
    text: '　本州付近は高気圧に覆われています。\n\n　東京地方は、晴れています。\n\n　１９日は、高気圧に覆われますが、気圧の谷や湿った空気の影響を受けるため、晴れで夜は曇りとなるでしょう。\n\n　２０日は、高気圧に覆われますが、気圧の谷や湿った空気の影響を受けるでしょう。このため、曇りで昼過ぎまで時々晴れますが、多摩西部では、昼過ぎから雨の降る所がある見込みです。\n\n【関東甲信地方】\n　関東甲信地方は、おおむね晴れています。\n\n　１９日は、高気圧に覆われますが、気圧の谷や湿った空気の影響を受ける見込みです。このため、晴れや曇りとなるでしょう。\n\n　２０日は、高気圧に覆われますが、気圧の谷や湿った空気の影響を受ける見込みです。このため、曇りや晴れで、昼過ぎから雨の降る所があるでしょう。\n\n　関東地方と伊豆諸島の海上では、１９日から２０日にかけて、波がやや高い見込みです。また、所々で霧が発生しています。船舶は視程障害に注意してください。',
  },
  forecasts: [
    {
      date: '2022-05-19',
      dateLabel: '今日',
      telop: '晴のち曇',
      detail: {
        weather: '晴れ　夜　くもり',
        wind: '南の風　２３区西部　では　南の風　やや強く',
        wave: '０．５メートル　後　１メートル',
      },
      temperature: {
        min: {
          celsius: null,
          fahrenheit: null,
        },
        max: {
          celsius: '27',
          fahrenheit: '80.6',
        },
      },
      chanceOfRain: {
        T00_06: '--%',
        T06_12: '0%',
        T12_18: '10%',
        T18_24: '10%',
      },
      image: {
        title: '晴のち曇',
        url: 'https://www.jma.go.jp/bosai/forecast/img/110.svg',
        width: 80,
        height: 60,
      },
    },
    {
      date: '2022-05-20',
      dateLabel: '明日',
      telop: '曇時々晴',
      detail: {
        weather: 'くもり　昼過ぎ　まで　時々　晴れ　多摩西部　では　昼過ぎ　から　雨',
        wind: '南の風',
        wave: '０．５メートル',
      },
      temperature: {
        min: {
          celsius: '16',
          fahrenheit: '60.8',
        },
        max: {
          celsius: '27',
          fahrenheit: '80.6',
        },
      },
      chanceOfRain: {
        T00_06: '0%',
        T06_12: '0%',
        T12_18: '20%',
        T18_24: '20%',
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
          celsius: '25',
          fahrenheit: '77',
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
    prefecture: '東京都',
    district: '東京地方',
    city: '東京',
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
