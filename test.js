'use strict';
var test = require('ava');
var numberIsNan = require('number-is-nan');
Math.acosh = undefined;
var acosh = require('./');

test(function (t) {
	t.assert(numberIsNan(acosh(-1)));
	t.assert(numberIsNan(acosh(0)));
	t.assert(numberIsNan(acosh(0.5)));
	t.assert(numberIsNan(acosh(-1e300)));
	t.assert(acosh(1) === 0);
	t.assert(acosh(2) === 1.3169578969248166);
	t.assert(acosh(1e+160) === 369.10676205960726);
	t.assert(acosh(Infinity) === Infinity);
	t.end();
});
