const fs = require("node:fs"),
	/** @type {string} */
	input = fs.readFileSync("input.txt", "utf-8").trim()

let sum = 0

for (const line of input.split("\n")) {
	let firstNum, lastNum
	for (const char of line) {
		if (isNaN(char)) {
			continue
		}
		if (firstNum === undefined) {
			firstNum = char
			lastNum = char
		} else lastNum = char
	}
	sum += parseInt(firstNum + lastNum)
}

console.log(sum)
