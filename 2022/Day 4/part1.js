const fs = require("node:fs"),
	/**
	 * @type {[[number, number], [number, number]][]}
	 */
	input = fs
		.readFileSync("input.txt", "utf-8")
		.replaceAll("\r", "")
		.split("\n")
		.filter(Boolean)
		.map(line =>
			line
				.split(",")
				.map(g => g.split("-").map(Number))
				// Sort by length of the interval in ascending order
				.sort((a, b) => a[1] - a[0] - (b[1] - b[0]))
		)

let redundantPairs = 0
for (const [smallest, biggest] of input) {
	if (smallest[0] >= biggest[0] && smallest[1] <= biggest[1]) redundantPairs++
}

console.log(redundantPairs)

module.exports = input
