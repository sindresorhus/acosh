import test from 'ava';
import numberIsNan from 'number-is-nan';

Math.acosh = undefined;
const m = require('./');

test(t => {
	t.true(numberIsNan(m(-1)));
	t.true(numberIsNan(m(0)));
	t.true(numberIsNan(m(0.5)));
	t.true(numberIsNan(m(-1e300)));
	t.is(m(1), 0);
	t.is(m(2), 1.3169578969248166);
	t.is(m(1e+160), 369.10676205960726);
	t.is(m(Infinity), Infinity);
});
