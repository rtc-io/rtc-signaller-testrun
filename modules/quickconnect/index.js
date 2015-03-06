var detect = require('rtc-core/detect');

module.exports = function(createSignaller, opts) {
  require('./profile')(createSignaller, opts);
};
