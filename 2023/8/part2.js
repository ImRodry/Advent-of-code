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

const paths = Object.keys(nodes).filter(node => node.endsWith("A")),
	results = []

for (let path of paths) {
	let steps = 0
	while (!path.endsWith("Z")) {
		path = nodes[path][getNextInstructionIndex(steps)]
		steps++
	}
	results.push(steps)
}

console.log(lcm(results), results)

function getNextInstructionIndex(i) {
	return lrMap[instructions[i % instructions.length]]
}

function gcd(a, b) {
	return !b ? a : gcd(b, a % b)
}

function lcm(numbers) {
	let result = 1
	for (let num of numbers) {
		result = (result * num) / gcd(result, num)
	}
	return result
}
