const fs = require("node:fs"),
	/** @type {string[]} */
	input = fs.readFileSync("input.txt", "utf-8").trim().split("\n"),
	symbolRegex = /[^\d.]/

let sum = 0

for (const [y, line] of input.entries()) {
	for (const [x, char] of [...line].entries()) {
		if (char === "*") {
			const numbers = findAdjacentNumbers(x, y)
			if (numbers.length === 2) sum += numbers[0] * numbers[1]
		}
	}
}

console.log(sum)

/**
 * Returns the adjacent numbers to a given coordinate
 * @param {number} x
 * @param {number} y
 * @returns {number[]}
 */
function findAdjacentNumbers(x, y) {
	const numbers = new Set()
	for (const [xi, yi] of [
		[x - 1, y],
		[x + 1, y],
		[x, y - 1],
		[x, y + 1],
		[x - 1, y - 1],
		[x - 1, y + 1],
		[x + 1, y - 1],
		[x + 1, y + 1],
	]) {
		if (!isNaN(input[yi][xi])) numbers.add(getNumber(xi, yi))
	}
	return [...numbers]
}

function getNumber(x, y) {
	while (!isNaN(input[y][x - 1])) {
		x--
	}
	return parseInt(input[y].slice(x).match(/\d+/)[0])
}
