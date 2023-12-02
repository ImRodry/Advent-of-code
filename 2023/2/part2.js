const fs = require("node:fs"),
	/** @type {string} */
	input = fs.readFileSync("input.txt", "utf-8").trim()

let powerSum = 0
for (const game of input.split("\n")) {
	const index = parseInt(game.match(/Game (\d+)/)[1]),
		sets = game.match(/:\s*(.*?)$/)[1].split("; "),
		regex = /(\d+)\s*(red|green|blue)/g
	let match,
		/** @type {CubeInfo[]} */
		colors = []

	for (const [i, set] of sets.entries()) {
		colors[i] ??= {}
		while ((match = regex.exec(set)) !== null) {
			const [, count, color] = match
			colors[i][color] = parseInt(count)
		}
	}
	let power = 1
	for (const count of Object.values(getMinValues(colors))) {
		power *= count
	}
	powerSum += power
}

console.log(powerSum)

/**
 * @typedef {Object} CubeInfo
 * @property {number=} red
 * @property {number=} green
 * @property {number=} blue
 */

/**
 * Returns the minimum amount of cubes from each color required to play the game
 * @param {CubeInfo[]} cubes
 */
function getMinValues(cubes) {
	const minValues = {
		red: 0,
		green: 0,
		blue: 0,
	}
	for (const set of cubes) {
		for (const [color, count] of Object.entries(set)) {
			if (count > minValues[color]) minValues[color] = count
		}
	}
	return minValues
}
