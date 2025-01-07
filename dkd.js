'use strict';

formMain.addEventListener('submit', e => {
	e.preventDefault();

	outResult.parentNode.replaceChild(outResult.cloneNode(false), outResult);

	const s = textSource.value;
	const matches = s.matchAll(/(.+).+\1/g);
	let last = 0;
	for (const match of matches) {
		const before = s.substring(last, match.index);

		const span = document.createElement('span');
		span.classList.add('dkd');
		span.textContent = match[0];

		outResult.append(before, span);
		last = match.index + match[0].length;
	}
	outResult.append(s.substring(last));
});
