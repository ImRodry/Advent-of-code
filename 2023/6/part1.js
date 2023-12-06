const fs = require("node:fs"),
	/** @type {string} */
	input = fs.readFileSync("input.txt", "utf-8").trim(),
	[times, distances] = input.split("\n").map(l =>
		l
			.replace(/\w+: +/, "")
			.split(/ +/)
			.map(Number)
	)

const values = []
for (const [i, time] of times.entries()) {
	values[i] = 0
	for (let j = 1; j < time; j++) {
		const distance = (time - j) * j
		if (distance >= distances[i]) values[i]++
	}
}

console.log(values)
console.log(values.reduce((acc, cur) => acc * cur, 1))
