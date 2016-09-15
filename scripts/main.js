document.addEventListener('DOMContentLoaded', function() {
	var doc = document,
		trig = doc.querySelector('.trigger'),
		menu = doc.querySelector('.menu li'),
		butOp = doc.querySelector('.feedback'),
		butClose = doc.querySelector('.close'),
		butSubmit = doc.querySelector('.submit'),
		block = doc.querySelector('.feedbackBox');

	trig.addEventListener('click', function() {
		trig.classList.toggle("disable");
	});

	var visionBlock = function () {
		block.classList.toggle('vision');
	};

	butOp.addEventListener('click', visionBlock);
	butClose.addEventListener('click', visionBlock);
	butSubmit.addEventListener('click', visionBlock);
});