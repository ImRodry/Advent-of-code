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
			return [first, second]
		},
		[[], []]
	)

for (const [i, num] of orderedLists[0].entries()) {
	sum += orderedLists[1].reduce((acc, n) => (n === num ? acc + n : acc), 0)
}

console.log(sum)
