# sourceDefenseTest
This is Source Defense Test</br>
In order to run this test make next steps:</br>

<b>Prepare</b>
1. Download NodeJs from https://nodejs.org/en/download/
2. in command line install Protractor by running next command:</br>
  <b>npm install -g protractor</b></br>
  <b>webdriver-manager update</b></br>
3. Create local folder and download files from git to this folder
4. Open console and go to this folder</br>
5. Install all dependencies by running next command:</br>
   <b>npm install</b></br>

<b>Run Test</b>
1. Run test with default configuration from console by:</br>
  <b>npm test</b></br>
2. Run test with parameters like:</br>
  <b>npm test -- --params.baseUrl={URLparameters} --params.repeatTimes={LoopNumber} --params.sleepTime={SleepNumber}</b></br> 
  Where are parameters:
--params.baseUrl = option to change the browsed site. By Default it 'https://www.geektime.co.il/source-defense-raises-10m/'</br> 
--params.sleepTime = option to waiting time easily. Put Number of Seconds. By Default it equal to 30</br> 
--params.repeatTimes = option to run test more than one cycle. Put Number of Cycles. By Default it equal to 1</br> 
I ran it like: npm test -- --params.baseUrl=https://www.geektime.co.il/ --params.repeatTimes=2 --params.sleepTime=1</br> 
3. After test will finished open in browser report page from report/report.html</br> 
Enjoy!
