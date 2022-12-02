const fs = require("node:fs"),
	/**
	 * @type {string[]}
	 */
	input = fs.readFileSync("input.txt", "utf-8").replaceAll("\r", "").split("\n\n"),
	elves = input
		.map(items =>
			items
				.split("\n")
				.map(Number)
				.reduce((a, b) => a + b, 0)
		)
		.sort((a, b) => b - a)

console.log("Biggest:", elves[0])

module.exports = elves
