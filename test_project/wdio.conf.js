exports.config = {
  runner: 'local',
  port: 4723,
  
  specs: [
  './test/specs/**/*.js'
  ],
  
  maxInstances: 10,
  path: '/wd/hub/',
  capabilities: [{
    platformName: 'Android',
  'appium:deviceName': '420032eb96995400',
  'appium:app':'C:/Users/Click/Documents/AwesomeProject/android/app/build/outputs/apk/debug/app-debug.apk',
  'appium:platformVersion': '6.0.1',
  'appium:automationName': 'UiAutomator2'
  }],
  logLevel: 'info',
  bail: 0,
  baseUrl: 'http://localhost',
  waitforTimeout: 10000,
  
  connectionRetryTimeout: 120000,
  
  connectionRetryCount: 3,
  
  // services: ['appium'],
  framework: 'mocha',
  reporters: ['spec'],
  mochaOpts: {
  ui: 'bdd',
  timeout: 60000
  }
}