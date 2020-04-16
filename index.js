'use strict';
var numberIsNan = require('number-is-nan');

module.exports = function (number) {
	if (numberIsNan(number) || number < 1) {
		return NaN;
	}

	if (number === 1) {
		return 0;
	}

	if (number === Infinity) {
		return number;
	}

	return Math.log(number / Math.E + Math.sqrt(number + 1) * Math.sqrt(number - 1) / Math.E) + 1;
};
