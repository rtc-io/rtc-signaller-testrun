var test = require('tape');

module.exports = function(createSignaller, opts) {
  var signaller;

  test('can create and connect the new signaller', function(t) {
    t.plan(2);
    t.ok(signaller = createSignaller(opts));
    signaller.once('connected', t.pass);
  });

  test('close the signaller', function(t) {
    t.plan(1);
    signaller.once('disconnected', t.pass);
    signaller.leave();
  });
};
