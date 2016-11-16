// EventTest/index.js - trying to see if event callbacks are race conditions

const Callback = require('events');

class SomeCallback extends Callback {}

function doSomething() {
  console.log('Do something called');

  let callback = new SomeCallback();

  // make the callback asynchronous
  setImmediate(() => {
    console.log('Emitting event...');

    callback.emit('event', 'Something happened');
  });

  console.log('Returning');
  return callback;
}

let cb = doSomething();

console.log('Finished calling doSomething()');

cb.on('event', (message) => {
  console.log('Event received, message: ' + message);
});
