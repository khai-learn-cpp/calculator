
((canvas, download) => {
	'use strict';

	var freeze = Object.freeze;
	var assign = Object.assign;

	const xmlns = 'http://www.w3.org/1999/xhtml';

	const BACKGROUND_COLOR = freeze({
		ADD: 'red',
		SUBTRACT: 'cyan',
		MULTIPLY: 'gold',
		DIVIDE: 'burlywood',
		__proto__: null
	});

	const FOREGROUND_COLOR = 'white';

	const CELL_SPACING = 4;
	const CANVAS_SIZE = 256;
	const CELL_SIZE = (CANVAS_SIZE - 3 * CELL_SPACING) >> 1;

	const CELL_LOW_BEGIN = 0 + CELL_SPACING;
	const CELL_LOW_END = CELL_LOW_BEGIN + CELL_SIZE;
	const CELL_HIGH_BEGIN = CELL_LOW_END + CELL_SPACING;
	const CELL_HIGH_END = CELL_HIGH_BEGIN + CELL_SIZE;
	const CELL_LOW_MIDDLE = (CELL_LOW_BEGIN + CELL_LOW_END) >> 1;
	const CELL_HIGH_MIDDLE = (CELL_HIGH_BEGIN + CELL_HIGH_END) >> 1;

	setTimeout(() => {
		canvas.width = canvas.height = CANVAS_SIZE;
		setTimeout(draw);
	});

	window.canvas = canvas;
	var context = window.context = canvas.getContext('2d');

	var fillRect = (color, ...size) => {
		context.fillStyle = color;
		context.fillRect(...size);
	};

	var draw = () => {

		/* CELL BACKGROUNDS */
		fillRect(BACKGROUND_COLOR.ADD, CELL_LOW_BEGIN, CELL_LOW_BEGIN, CELL_SIZE, CELL_SIZE);
		fillRect(BACKGROUND_COLOR.SUBTRACT, CELL_HIGH_BEGIN, CELL_LOW_BEGIN, CELL_SIZE, CELL_SIZE);
		fillRect(BACKGROUND_COLOR.MULTIPLY, CELL_LOW_BEGIN, CELL_HIGH_BEGIN, CELL_SIZE, CELL_SIZE);
		fillRect(BACKGROUND_COLOR.DIVIDE, CELL_HIGH_BEGIN, CELL_HIGH_BEGIN, CELL_SIZE, CELL_SIZE);

		/* CELL FOREGROUNDS */
		context.fillStyle = FOREGROUND_COLOR;
		context.font = `${CELL_SIZE * 1.23}px consolas`;
		context.textAlign = 'center';
		context.textBaseline = 'middle';
		context.fillText('+', CELL_LOW_MIDDLE, CELL_LOW_MIDDLE, CELL_SIZE, CELL_SIZE);
		context.fillText('-', CELL_HIGH_MIDDLE, CELL_LOW_MIDDLE, CELL_SIZE, CELL_SIZE);
		context.fillText('×', CELL_LOW_MIDDLE, CELL_HIGH_MIDDLE, CELL_SIZE, CELL_SIZE);
		context.fillText('÷', CELL_HIGH_MIDDLE, CELL_HIGH_MIDDLE, CELL_SIZE, CELL_SIZE);

	};

	var saveImage = () => {
		setTimeout(() => anchor.click());
		var anchor = document.createElementNS(xmlns, 'a');
		anchor.download = 'icon.png';
		anchor.href = canvas.toDataURL();
	};

	download.addEventListener('click', saveImage, false);

})(document.getElementById('canvas'), document.getElementById('download'));
