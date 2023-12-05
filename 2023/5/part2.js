const fs = require("node:fs"),
	/** @type {string} */
	input = fs.readFileSync("input.txt", "utf-8").trim(),
	/** @type {[seed: number, length: number[]]} */
	seedPairs = input
		.slice(0, input.indexOf("\n"))
		.replace("seeds: ", "")
		.split(" ")
		.map(Number)
		.reduce((acc, cur, i, arr) => {
			if (!(i % 2)) acc.push([cur, arr[i + 1]])
			return acc
		}, []),
	/** @type {[dest: number, source: number, length: number][][]} */
	data = input
		.split("\n\n")
		.slice(1)
		.map(block =>
			block
				.split("\n")
				.slice(1)
				.map(l => l.split(" ").map(Number))
		)

console.time("Run part 2")
let low = Infinity
for (const [startingSeed, length] of seedPairs) {
	for (let i = startingSeed; i < startingSeed + length; i++) {
		let num = i
		for (const values of data) {
			const value = values.find(v => v[1] <= num && v[1] + v[2] - 1 >= num)
			if (value) num = value[0] + (num - value[1])
		}
		if (num < low) low = num
	}
	console.log("Finished a seed pair")
}

console.log(low)
// This shit took 12m and 18s to run
console.timeEnd("Run part 2")
