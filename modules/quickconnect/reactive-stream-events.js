var test = require('tape');
var capture = require('rtc-capture');
var MediaStream = require('rtc-core/detect')('MediaStream');
var localStream;

module.exports = function(createSignaller, opts) {
  var connect = require('./helpers/connect-reactive')(createSignaller, opts);
  var connections = connect(test, '(reactive) stream:added tests');

  test('capture stream', function(t) {
    t.plan(2);
    capture({ video: true, audio: true }, function(err, stream) {
      t.ifError(err);
      t.ok(localStream = stream, 'got stream');
    });
  });

  test('broadcast stream from 0 --> 1', function(t) {
    t.plan(3);
    connections[1].once('stream:added', function(id, stream, data) {
      t.equal(id, connections[0].id, 'id matched expected');
      t.ok(stream instanceof MediaStream, 'got stream');
      t.ok(data, 'got data');
    });

    connections[0].addStream(localStream);
  });

  test('connection:0 removeStream', function(t) {
    t.plan(2);
    connections[1].once('stream:removed', function(id, stream) {
      t.equal(id, connections[0].id, 'id matched expected');
      t.ok(stream instanceof MediaStream, 'got stream');
    });

    connections[0].removeStream(localStream);
  });

  test('broadcast stream from 1 --> 0', function(t) {
    t.plan(3);
    connections[0].once('stream:added', function(id, stream, data) {
      t.equal(id, connections[1].id, 'id matched expected');
      t.ok(stream instanceof MediaStream, 'got stream');
      t.ok(data, 'got data');
    });

    connections[1].addStream(localStream);
  });

  test('stream:removed triggered when connection:1 leaves', function(t) {
    t.plan(2);

    connections[0].once('stream:removed', function(id, stream) {
      t.equal(id, connections[1].id, 'id matched expected');
      t.ok(stream instanceof MediaStream, 'got stream');
    });

    connections[1].close();
  });
};


