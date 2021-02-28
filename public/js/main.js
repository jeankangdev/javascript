'use strict';

function readNumber() {
	let num;

	do {
		num = prompt("Enter a number", 0);
	} while ( !isFinite(num) );

  if (num === '' || num === null) {
    alert('ga');
    return null;
  }

	return +num;
}

readNumber();