let SpecReporter = require('jasmine-spec-reporter').SpecReporter;
var HtmlReporter = require('protractor-beautiful-reporter');

exports.config = {
  framework: 'jasmine2',
  jasmineNodeOpts: {
    showColors: true,
    silent: true,
    defaultTimeoutInterval: 360000,
    print: function () {
    }
  },
  suites: {
    test: 'sourceDefenseSuite.js',
  },
  params: {
    baseUrl: 'https://www.geektime.co.il/source-defense-raises-10m/',
    sleepTime: 30,
    repeatTimes: 1
  },
  capabilities: {
    browserName: 'chrome',
  },
  logLevel: 'WARN',
  onPrepare: function () {
    jasmine.getEnv().addReporter(new SpecReporter({
      spec: {
        displayStacktrace: true
      },
      summary: {
        displayDuration: false
      }
    }));
    jasmine.getEnv().addReporter(new HtmlReporter({
      baseDirectory: 'reports'
      , jsonsSubfolder: 'jsons'
      , preserveDirectory: false
      , docTitle: 'Source Defense Test'
      , screenshotsSubfolder: 'images'
   }).getJasmine2Reporter());
  }
};