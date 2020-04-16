import test from 'ava';
import numberIsNan from 'number-is-nan';

Math.acosh = undefined;
const acosh = require('.');

test('main', t => {
	t.true(numberIsNan(acosh(-1)));
	t.true(numberIsNan(acosh(0)));
	t.true(numberIsNan(acosh(0.5)));
	t.true(numberIsNan(acosh(-1e300)));
	t.is(acosh(1), 0);
	t.is(acosh(2), 1.3169578969248166);
	t.is(acosh(1e+160), 369.10676205960726);
	t.is(acosh(Infinity), Infinity);
});
