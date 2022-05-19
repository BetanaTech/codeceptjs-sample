Feature('login');

Scenario('ログイン１', ({ I }) => {
  I.amOnPage('/ja/index');
  I.click('ログイン', { css: 'nav' });
  I.seeInCurrentUrl('/ja/login');

  I.fillField('メールアドレス', 'ichiro@example.com');
  I.fillField('パスワード', 'password');
  I.click('ログイン', { css: 'form' });

  I.seeInCurrentUrl('/ja/mypage');
  I.see('プレミアム会員');
});

let accounts2 = new DataTable(['emailAddress', 'password', 'rank']);
accounts2.add(['sakura@example.com', 'pass1234', '一般会員']); // 登録済みデータ
accounts2.add(['jun@example.com', 'pa55w0rd!', 'プレミアム会員']); // 登録済みデータ
accounts2.xadd(['yoshiki@example.com', 'pass-pass', '一般会員']); // スキップデータ
// accounts.add(['taro@example.com', 'qwerty', '一般会員']); // 未登録データ

Data(accounts2).Scenario('ログイン２', ({ I, current }) => {
  I.amOnPage('/ja/index');
  I.click('ログイン', { css: 'nav' });
  I.seeInCurrentUrl('/ja/login');

  I.fillField('メールアドレス', current.emailAddress);
  I.fillField('パスワード', current.password);
  I.click('ログイン', { css: 'form' });

  I.seeInCurrentUrl('/ja/mypage');
  I.see(current.rank);
});

let accounts3 = new DataTable(['emailAddress', 'password', 'afterLogin']);
accounts3.add([
  'yoshiki@example.com',
  'pass-pass',
  (I) => {
    I.seeInCurrentUrl('/ja/mypage');
    I.see('一般会員');
  },
]); // 登録済みデータ
accounts3.add([
  'taro@example.com',
  'qwerty',
  (I) => {
    I.see('メールアドレスまたはパスワードが違います。', { id: 'email-message' });
    I.see('メールアドレスまたはパスワードが違います。', { id: 'password-message' });
  },
]); // 未登録データ

Data(accounts3).Scenario('ログイン３', ({ I, current }) => {
  I.amOnPage('/ja/index');
  I.click('ログイン', { css: 'nav' });
  I.seeInCurrentUrl('/ja/login');

  I.fillField('メールアドレス', current.emailAddress);
  I.fillField('パスワード', current.password);
  I.click('ログイン', { css: 'form' });

  current['afterLogin'](I);
});

Scenario('ログイン４', ({ I }) => {
  I.amOnPage('/ja/index');
  I.click('ログイン', { css: 'nav' });
  I.seeInCurrentUrl('/ja/login');

  I.fillField('メールアドレス', 'temp@example.com');
  I.fillField('パスワード', 'password');
  I.clearField('パスワード');
  I.click('ログイン', { css: 'form' });
  I.dontSeeElement({ id: 'email-message' });
  I.see('このフィールドを入力してください。', { id: 'password-message' });

  I.fillField('パスワード', 'password');
  I.clearField('メールアドレス');
  I.click('ログイン', { css: 'form' });
  I.see('このフィールドを入力してください。', { id: 'email-message' });
  I.dontSeeElement({ id: 'password-message' });

  I.fillField('メールアドレス', 'temp');
  I.click('ログイン', { css: 'form' });
  I.see('メールアドレスを入力してください。', { id: 'email-message' });
  I.dontSeeElement({ id: 'password-message' });

  I.useTestCafeTo('handle browser dialog', async ({ t }) => {
    t.takeScreenshot({
      path: './sample.png',
    });
  });
});
