const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');

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
      url: 'http://localhost:3000',
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
