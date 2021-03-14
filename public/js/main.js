// 'use strict';

// const arrayLike = {0: "zero", 1: "one", length: 2};
// const obj = {1:1, 2:2, 3:3}

// // Array.from() => return an array(separate the value)
// // can't take obj as a parameter
// console.log(Array.from(obj));         // []
// console.log(Array.from("ABC"));       // ["A", "B", "C"]
// console.log(Array.from(arrayLike));   // [zero, one]

// // Array.of() => return 1 obj
// console.log(Array.of());            // []
// console.log(Array.of(obj));         // [{1: 1, 2: 2, 3: 3}]
// console.log(Array.of("ABC"));       // ["ABC"]
// console.log(Array.of(arrayLike));   // [{0: "zero", 1: "one", length: 2}]

'use strict';

// let body = document.body;
// let table = document.createElement('table');
// let boxes = [];

// for (let i = 0; i < 3; i++) {
// 	let row = document.createElement('tr');
// 	boxes.push([]);

// 	for (let j = 0; j < 3; j++) {
// 		let box = document.createElement('td');
// 		boxes[i].push(box);
// 		row.append(boxes);
// 	}
// 	table.append(row);
// }

// body.append(table);
// console.log(table);
// console.log(boxes);

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
