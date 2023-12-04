const fs = require("node:fs"),
	/** @type {string} */
	input = fs.readFileSync("input.txt", "utf-8").trim()

let sum = 0

for (const line of input.replaceAll(/Card +\d+: /g, "").split("\n")) {
	/** @type {[number[], number[]]} */
	const [winning, data] = line.split(" | ").map(s =>
		s
			.trim()
			.split(/ +/)
			.map(d => parseInt(d))
	)
	let matches = 0
	for (const num of data) if (winning.includes(num)) matches++
	if (matches) sum += 2 ** (matches - 1)
}

console.log(sum)
