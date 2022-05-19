import { RequestMock, Selector } from 'testcafe';

const mock = RequestMock()
  .onRequestTo(/https:\/\/weather\.tsukumijima\.net\/api\/forecast\?city=.*/)
  .respond({ title: '場所', forecast: [{ date: '日付', telop: '天気' }] }, 200);

fixture('天気ページ').page('http://localhost:58080/ja/forecast').requestHooks(mock);

test('天気を表示', async (t) => {
  const tokyo = await Selector('#tokyo');
  const submit = await Selector('#submit');
  await t.click(tokyo).wait(5000).click(submit).wait(5000);
  await t.takeScreenshot({
    path: './sample.png',
  });
});
