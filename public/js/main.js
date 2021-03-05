'use strict';

function shuffle(array) {
	let newArray = [];

	for (let i = 0; i < array.length; i++) {
		// generate randomIndex between 0 and 2(arr.length - 1)
		// loop until newArray[randomIndex] doesn't exist
		// store arry[i] in the newArray[randomIndex]

		let randomIndex = randomIndexGenerator(0, array.length - 1);		

		while(newArray[randomIndex]) {
			randomIndex = randomIndexGenerator(0, array.length - 1);			
		}
		newArray[randomIndex] = array[i];
	}

	return newArray;

}

function randomIndexGenerator(min, max) {
	return Math.floor(min + Math.random() * (max - min + 1));
}

let arr = [1, 2, 3];
shuffle(arr);
console.log(arr);