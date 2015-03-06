var detect = require('rtc-core/detect');

module.exports = function(createSignaller, opts) {
  require('./coupling')(createSignaller, opts);
  require('./coupling-constraints')(createSignaller, opts);
  require('./capture-close-localonly')(createSignaller, opts);

  if (! detect.moz) {
    require('./coupling-reactive')(createSignaller, opts);
//     require('./coupling-reactive-randomdelay')(createSignaller, opts);
//     require('./coupling-reactive-randomdelaystreams')(createSignaller, opts);

//     require('./capture-close')(createSignaller, opts);
  }
};
