module.exports = function(createSignaller, opts) {
  require('./coupling')(createSignaller, opts);
  require('./coupling-constraints')(createSignaller, opts);
  require('./capture-close-localonly')(createSignaller, opts);
};
