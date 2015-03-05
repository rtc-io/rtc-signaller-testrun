var test = require('tape');

module.exports = function(createSignaller, opts) {
  var signallers = [];

  test('can create signaller:0', function(t) {
    t.plan(2);
    t.ok(signallers[0] = createSignaller(opts));
    signallers[0].once('connected', t.pass);
  });

  test('can create signaller:1', function(t) {
    t.plan(2);
    t.ok(signallers[1] = createSignaller(opts));
    signallers[1].once('connected', t.pass);
  });

  test('close signallers', function(t) {
    t.plan(signallers.length);
    signallers.forEach(function(signaller) {
      signaller.once('disconnected', t.pass);
      signaller.leave();
    });
  });
};
