var test = require('tape');

module.exports = function(createSignaller, opts) {
  require('./connect')(createSignaller, opts);
  require('./announce')(createSignaller, opts);
};
