'use strict';
var numberIsNan = require('number-is-nan');

module.exports = Math.acosh || function (x) {
	if (numberIsNan(x) || x < 1) {
		return NaN;
	}

	if (x === 1) {
		return 0;
	}

	if (x === Infinity) {
		return x;
	}

	return Math.log(x / Math.E + Math.sqrt(x + 1) * Math.sqrt(x - 1) / Math.E) + 1;
};
