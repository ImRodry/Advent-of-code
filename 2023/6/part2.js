const fs = require("node:fs"),
	/** @type {string} */
	input = fs.readFileSync("input.txt", "utf-8").trim(),
	[time, distance] = input.split("\n").map(l =>
		Number(
			l
				.replace(/\w+: +/, "")
				.replaceAll(/ +/g, "")
				.trim()
		)
	)

let value = 0

console.time("part2")
for (let j = 1; j < time; j++) {
	const distanceCalc = (time - j) * j
	if (distanceCalc >= distance) value++
}

console.log(value)
console.timeEnd("part2")
