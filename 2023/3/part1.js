const fs = require("node:fs"),
	/** @type {string[]} */
	input = fs.readFileSync("input.txt", "utf-8").trim().split("\n"),
	symbolRegex = /[^\d.]/

let sum = 0

for (const [y, line] of input.entries()) {
	let data = { coords: [], num: "" }
	for (const [x, char] of [...line].entries()) {
		if (isNaN(char)) {
			if (data.num) {
				if (isValidPart(data)) sum += parseInt(data.num)
				else console.log("Clearing number " + data.num)
				data = { coords: [], num: "" }
			}
			continue
		}
		data.num += char
		data.coords.push([x, y])
	}
	if (data.num && isValidPart(data)) sum += parseInt(data.num)
}

console.log(sum)

/**
 * Checks if a given number is adjacent to a special character
 * @param {NumInfo} data
 */
function isValidPart(data) {
	for (const [x, y] of data.coords) {
		if (
			isSymbol(x - 1, y) ||
			isSymbol(x + 1, y) ||
			isSymbol(x, y - 1) ||
			isSymbol(x, y + 1) ||
			isSymbol(x - 1, y - 1) ||
			isSymbol(x - 1, y + 1) ||
			isSymbol(x + 1, y - 1) ||
			isSymbol(x + 1, y + 1)
		) {
			return true
		}
	}
	return false
}

function isSymbol(x, y) {
	if (x < 0 || y < 0 || y >= input.length || x >= input[y].length) return false
	return symbolRegex.test(input[y][x])
}

/**
 * @typedef {Object} NumInfo
 * @property {string} num
 * @property {number[][]} coords
 */
