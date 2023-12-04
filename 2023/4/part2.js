const fs = require("node:fs"),
	/** @type {string[]} */
	input = fs
		.readFileSync("input.txt", "utf-8")
		.trim()
		.replaceAll(/Card +\d+: /g, "")
		.split("\n"),
	results = []

let sum = 0

for (const [i, line] of input.entries()) {
	/** @type {[number[], number[]]} */
	const [winning, data] = line.split(" | ").map(s =>
		s
			.trim()
			.split(/ +/)
			.map(d => parseInt(d))
	)
	let matches = 0
	for (const num of data) if (winning.includes(num)) matches++
	results[i] = matches
	sum += getCardCount(i)
}

console.log(sum)

function getCardCount(card) {
	let result = 1
	for (let i = 0; i < card; i++) {
		if (results[i] + i >= card) result += getCardCount(i)
	}
	return result
}
