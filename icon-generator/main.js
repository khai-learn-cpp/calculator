
((canvas, download) => {
	'use strict';

	var freeze = Object.freeze;

	const BACKGROUND_COLOR = freeze({
		ADD: 'red',
		SUBTRACT: 'blue',
		MULTIPLY: 'orange',
		DIVIDE: 'green',
		__proto__: null
	});

	const FOREGROUND_COLOR = 'white';

	var draw = () => {};

})(document.getElementById('canvas'), document.getElementById('download'));
