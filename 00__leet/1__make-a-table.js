// https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces

'use strict';

let body = document.body;
let tbl = document.createElement('table');

for (let i = 0; i < 3; i++) {
	let row = document.createElement('tr');
	for (let j = 0; j <3; j++) {
		let cell = document.createElement('td');
		row.appendChild(cell);
	}
	tbl.appendChild(row);
}
tbl.setAttribute('border', '2');
console.log(tbl);
