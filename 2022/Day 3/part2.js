const fs = require("node:fs"),
	{ getPriority } = require("./util"),
	/**
	 * @type {string[]}
	 */
	input = fs.readFileSync("./input.txt", "UTF-8").replaceAll("\r", "").split("\n").filter(Boolean),
	groups = input.reduce((acc, curr, i) => {
		if (!(i % 3)) acc.push([])
		acc.at(-1).push(curr)
		return acc
	}, [])

let priority = 0

for (const group of groups) {
	let commonCharCode = 0
	for (const char of group[0]) {
		if (group[1].includes(char) && group[2].includes(char)) {
			commonCharCode = char.charCodeAt(0)
			break
		}
	}
	priority += getPriority(commonCharCode)
}

console.log(priority)
