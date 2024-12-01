const fs = require("node:fs"),
	/** @type {string} */
	input = fs.readFileSync("input.txt", "utf-8").trim()

let sum = 0
/** @type {[number[], number[]]} */
const orderedLists = input
	.split("\n")
	/** @type {[string, string]} */
	.map(l => l.split(/\s+/))
	.reduce(
		([first, second], [a, b]) => {
			first.push(Number(a))
			second.push(Number(b))
			return [first.sort(), second.sort()]
		},
		[[], []]
	)

for (let i = 0; i < orderedLists[0].length; i++) {
	const left = orderedLists[0][i],
		right = orderedLists[1][i]
	sum += Math.abs(right - left)
}

console.log(sum)
