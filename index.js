/**
  # rtc-signaller-testrun

  This is a suite of tests that will allow you to test how solid
  your custom signaller is against some "real world" usage within
  both [`rtc-quickconnect`](https://github.com/rtc-io/rtc-quickconnect)
  and the lower level [`rtc-tools`](https://github.com/rtc-io/rtc-tools).

  ## Example Usage

  <<< examples/runtest.js

**/
module.exports = function(createSignaller, opts) {
  require('./modules/signaller/')(createSignaller, opts);
  require('./modules/tools/')(createSignaller, opts);
};
