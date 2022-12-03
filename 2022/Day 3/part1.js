const fs = require("node:fs"),
	{ getPriority } = require("./util"),
	/**
	 * @type {string[]}
	 */
	input = fs.readFileSync("./input.txt", "UTF-8").replaceAll("\r", "").split("\n").filter(Boolean)

let priority = 0

for (const sack of input) {
	/**
	 * @type {[string[], string[]]}
	 */
	const [first, second] = [...sack]
		.reduce(
			(acc, item, i) => {
				sack.length / 2 > i ? acc[0].push(item) : acc[1].push(item)
				return acc
			},
			[[], []]
		)
		.map(arr => arr.filter(Boolean))
	// .map(arr => arr.join(""))
	let commonCharCode = 0
	for (const char of first) {
		if (second.includes(char)) {
			commonCharCode = char.charCodeAt(0)
			break
		}
	}
	priority += getPriority(commonCharCode)
}

console.log(priority)
