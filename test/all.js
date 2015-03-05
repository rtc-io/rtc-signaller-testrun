var signaller = require('rtc-pluggable-signaller');
var extend = require('cog/extend');

function createSignaller(opts) {
  return signaller(extend({ signaller: 'https://switchboard.rtc.io' }, opts));
}

require('..')(createSignaller);
