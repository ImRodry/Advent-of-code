const fs = require("node:fs"),
	/** @type {string} */
	input = fs.readFileSync("input.txt", "utf-8").trim(),
	lrMap = { L: 0, R: 1 },
	instructions = input.slice(0, input.indexOf("\n")),
	nodes = Object.fromEntries(
		input
			.split("\n\n")[1]
			.split("\n")
			.map(node => {
				const [, key, left, right] = node.match(/^(\w{3}) = \((\w{3}), (\w{3})\)$/)
				return [key, [left, right]]
			})
	)

let steps = 0
let currNode = "AAA"

while (currNode !== "ZZZ") {
	currNode = nodes[currNode][getNextInstructionIndex(steps)]
	steps++
}

console.log(steps)

function getNextInstructionIndex(i) {
	return lrMap[instructions[i % instructions.length]]
}
