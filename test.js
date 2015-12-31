var test = require('tape')
var from = require('./from-bits')
var to = require('./to-bits')

test('it works', function (assert) {
  var hello = 'hello'
  var bits = to(hello)
  assert.same(bits, [1751477356, 8797955293184])
  assert.equal(from(bits), hello)
  assert.end()
})
