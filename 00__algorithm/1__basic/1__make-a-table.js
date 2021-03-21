// https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces
// make a table with js (ticktacktoe game)
// https://www.youtube.com/watch?v=b5IeZ2iunkw

'use strict';

// style.css
// td {
//   border: 1px solid black;
//   width: 50px;
//   height: 50px;
//   text-align: center;
//   font-weight: bold;
// }

let body = document.body;
let tbl = document.createElement('table');
let rows = [];
let cells = [];
let turn = 'X';

function cellOnClick(event) {
  // console.log(event.target);  // td => cell
  // console.log(event.target.parentNode);  // tr => row
  
  let cellNum = cells.indexOf(event.target);  // which cell?
  let rowNum = rows.indexOf(event.target.parentNode);  // which row?
  
  // console.log(cellNum);
  // console.log(rowNum);

  console.log(cells);
  console.log(rows);

  if (cells[rowNum][cellNum].textContent !== '') {
    console.log('not empty');
    cells[rowNum][cellNum].textContent = turn;
    if (turn === 'X') {
      turn = 'O'
    } else {
      turn = 'X';
    }
  } else {
    console.log('empty');
  }
}

for (let i = 0; i < 3; i++) {
	let row = document.createElement('tr');
  rows.push(row);
  cells.push([]);

	for (let j = 0; j <3; j++) {
		let cell = document.createElement('td');
    cell.addEventListener('click', cellOnClick);
    cells[i].push(cell);
		row.appendChild(cell);
	}
	tbl.appendChild(row);
}
tbl.setAttribute('border', '2');
body.appendChild(tbl);
// console.log(tbl);

