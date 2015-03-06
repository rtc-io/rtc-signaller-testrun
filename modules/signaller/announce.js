var test = require('tape');
var cuid = require('cuid');

module.exports = function(createSignaller, opts) {
  var signallers = [];
  var roomId = cuid();

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

  test('exchange announces', function(t) {
    t.plan(5);
    signallers[1].on('peer:announce', function(data) {
      t.ok(data);
      t.equal(data.id, signallers[0].id);
    });

    signallers[0].on('peer:announce', function(data) {
      t.ok(data);
      t.equal(data.id, signallers[1].id);
    });

    signallers[0].announce({ room: roomId });
    signallers[1].announce({ room: roomId });
    t.pass('sent announces');
  });

  test('0 can send /to message to 1', function(t) {
    t.plan(2);
    signallers[1].on('message:foo', function(data) {
      t.equal(data, 'bar');
    });

    signallers[0].to(signallers[1].id).send('/foo', 'bar');
    t.pass('sent message');
  });

  test('1 can send /to message to 0', function(t) {
    t.plan(2);
    signallers[0].on('message:foo', function(data) {
      t.equal(data, 'baz');
    });

    signallers[1].to(signallers[0].id).send('/foo', 'baz');
    t.pass('sent message');
  });

  test('close signallers', function(t) {
    t.plan(signallers.length);
    signallers.forEach(function(signaller) {
      signaller.once('disconnected', t.pass);
      signaller.leave();
    });
  });
};
