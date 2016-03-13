
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

		// cell: add
		fillRect(BACKGROUND_COLOR.ADD, CELL_LOW_BEGIN, CELL_LOW_BEGIN, CELL_SIZE, CELL_SIZE);
		draw.mkAdd();

		// cell: substract
		fillRect(BACKGROUND_COLOR.SUBTRACT, CELL_HIGH_BEGIN, CELL_LOW_BEGIN, CELL_SIZE, CELL_SIZE);
		draw.mkSubstract();

		// cell: multiply
		fillRect(BACKGROUND_COLOR.MULTIPLY, CELL_LOW_BEGIN, CELL_HIGH_BEGIN, CELL_SIZE, CELL_SIZE);
		draw.mkMultiply();

		// cell: divide
		fillRect(BACKGROUND_COLOR.DIVIDE, CELL_HIGH_BEGIN, CELL_HIGH_BEGIN, CELL_SIZE, CELL_SIZE);
		draw.mkDivide();

	};

	assign(draw, {
		mkAdd() {},
		mkSubstract() {},
		mkMultiply() {},
		mkDivide() {}
	});

	var saveImage = () => {
		setTimeout(() => anchor.click());
		var anchor = document.createElementNS(xmlns, 'a');
		anchor.download = 'icon.png';
		anchor.href = canvas.toDataURL();
	};

	download.addEventListener('click', saveImage, false);

})(document.getElementById('canvas'), document.getElementById('download'));
