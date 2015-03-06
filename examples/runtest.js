var testrun = require('..');
var messenger = require('rtc-switchboard-messenger');
var signaller = require('rtc-signaller');

function createSignaller(opts) {
  return signaller(messenger('https://switchboard.rtc.io'), opts);
}

testrun(createSignaller);
