for (var i = 0; i < browser.params.repeatTimes; ++i){
  describe('Source Defense Exam', () => {
    it('simple test', () => {
      browser.waitForAngularEnabled(false);
      browser.get(browser.params.baseUrl);
      browser.sleep(browser.params.sleepTime * 1000);
    })
  });
}