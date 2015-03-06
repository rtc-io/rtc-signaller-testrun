var detect = require('rtc-core/detect');

module.exports = function(createSignaller, opts) {
  require('./profile')(createSignaller, opts);
  require('./datachannel')(createSignaller, opts);
  require('./request-stream')(createSignaller, opts);
};
