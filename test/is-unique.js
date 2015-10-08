var test = require('tape');
var isUnique = require('../is-unique');

test('isUnique', function (t) {
  'use strict';

  t.plan(14);

  t.equal(isUnique(), false);
  t.equal(isUnique({}), false);
  t.equal(isUnique(true), false);
  t.equal(isUnique([]), true);
  t.equal(isUnique(''), true);
  t.equal(isUnique('foo'), false);
  t.equal(isUnique('bar'), true);
  t.equal(isUnique(['f','o','o']), false);
  t.equal(isUnique(['b','a','r']), true);
  t.equal(isUnique([1,2,3]), true);
  t.equal(isUnique([1,2,2]), false);
  t.equal(isUnique(123), true);
  t.equal(isUnique(122), false);
  t.equal(isUnique([{}, {}]), true);
});
