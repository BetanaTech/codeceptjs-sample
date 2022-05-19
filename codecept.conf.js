const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
const { Selector } = require('testcafe');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

exports.config = {
  tests: './codeceptjs/*_test.js',
  output: './codeceptjs/output',
  helpers: {
    TestCafe: {
      url: 'http://localhost:58080',
      browser: 'chrome',
      show: false,
    },
  },
  include: {
    I: './steps_file.js',
  },
  bootstrap: null,
  mocha: {},
  name: 'hotel-example-site',
  translation: 'ja-JP',
};
