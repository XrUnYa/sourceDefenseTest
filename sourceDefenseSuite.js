var fs = require('fs');
for (var i = 0; i < browser.params.repeatTimes; ++i){
  describe('Source Defense Exam', () => {
    it('simple test', () => {
      browser.waitForAngularEnabled(false);
      browser.get(browser.params.baseUrl);
      createJsonNetworkRequestFile();
      browser.sleep(browser.params.sleepTime * 1000);
      });
  });
 
  function createJsonNetworkRequestFile(){
    browser.driver.executeScript(function()
        {
          return window.performance.getEntriesByType("resource"); // returns an array of PerformanceResourceTiming objects
        }
          ).then(function (requests)
        {
        var outputFilename = 'network.json';
        fs.appendFile(outputFilename, JSON.stringify(requests), function(err) {
          if(err) {
              console.log(err);
              }
          });
        });
  }
}