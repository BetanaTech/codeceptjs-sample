Feature('login');

Scenario('test something', ({ I }) => {
  I.amOnPage('/ja/index.html');
  I.click('ログイン', 'a.btn');
  I.see('ログイン');
  I.see('メールアドレス');
  I.see('パスワード');
});
