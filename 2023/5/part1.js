const fs = require("node:fs"),
	/** @type {string} */
	input = fs.readFileSync("input.txt", "utf-8").trim(),
	seeds = input.slice(0, input.indexOf("\n")).replace("seeds: ", "").split(" ").map(Number)

for (const block of input.split("\n\n")) {
	if (block.startsWith("seeds: ")) continue
	/** @type {[dest: number, source: number, length: number][]} */
	const values = []
	for (const [i, line] of block.split("\n").entries()) {
		if (i === 0) {
			continue
		}
		values.push(line.split(" ").map(Number))
	}
	for (const [i, seed] of seeds.entries()) {
		const value = values.find(v => v[1] <= seed && v[1] + v[2] - 1 >= seed)
		if (value) seeds.splice(i, 1, value[0] - (value[1] - seed))
	}
}

console.log(Math.min(...seeds))
