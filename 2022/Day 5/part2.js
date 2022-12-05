const fs = require("node:fs"),
	{ parseInput, applyInstructions } = require("./util"),
	/**
	 * @type {string[]}
	 */
	rawInput = fs.readFileSync("input.txt", "utf8").replaceAll("\r", ""),
	[state, instructions] = parseInput(rawInput)

applyInstructions(state, instructions, false)

console.log(state.map(c => c.at(-1)).join(""))
