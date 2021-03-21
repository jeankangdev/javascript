'use strict';

// we have a map that is n * n size (5 * 5)
// let's say the 4 corners of the map is set to 0
// each cell has a number that represents the height of the region
// if the height is higher than the 4 surrounded region, the region is regarded as the mountain top
// how many mountain tops does this map have?

function solution(map) {
	let countMountains = 0;
	let n = map.length;

  // add 0 for 4 corners (makes the map 7 * 7)
	for (let i = 0; i < n; i++) {
		map[i].unshift(0);
		map[i].push(0);
	}
  
  let newRow1 = Array.from({length: n + 2}, () => 0);
	let newRow2 = Array.from({length: n + 2}, () => 0);
	map.unshift(newRow1);
	map.push(newRow2);
  
  // diagnose which region(cell) is the mountain top (from 5 * 5 map)
	for (let i = 1; i <= n; i++) {
		for (let j = 1; j <= n; j++) {
			if (map[i][j] > map[i-1][j] && map[i][j] > map[i][j-1] && map[i][j] > map[i][j+1] && map[i+1][j]) countMountains++;
		}
	}
	return countMountains;
}

let map = [
	[5, 3, 7, 2, 3],
	[3, 7, 1, 6, 1],
	[7, 2, 5, 3, 4], 
	[4, 3, 6, 4, 1],
	[8, 7, 3, 5, 2]
];
console.log(solution(map)); 