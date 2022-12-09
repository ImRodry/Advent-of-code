const fs = require("node:fs"),
	/** @type {string} */
	input = fs.readFileSync("input.txt", "utf-8").trim()

const firstFour = input.slice(0, 4).split("")
for (let i = 4; i < input.length; i++) {
	if (new Set(firstFour).size === 4) {
		console.log(i)
		break
	}
	firstFour.shift()
	firstFour.push(input[i])
}
