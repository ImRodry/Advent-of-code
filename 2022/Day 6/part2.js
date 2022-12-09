const fs = require("node:fs"),
	/** @type {string} */
	input = fs.readFileSync("input.txt", "utf-8").trim()

const firstFourteen = input.slice(0, 14).split("")
for (let i = 14; i < input.length; i++) {
	if (new Set(firstFourteen).size === 14) {
		console.log(i)
		break
	}
	firstFourteen.shift()
	firstFourteen.push(input[i])
}
