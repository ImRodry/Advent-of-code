const fs = require("node:fs"),
	/** @type {string} */
	input = fs.readFileSync("input.txt", "utf-8").trim()

let idSum = 0
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
	if (colors.every(entry => isValidGame(entry))) idSum += index
}

console.log(idSum)

/**
 * @typedef {Object} CubeInfo
 * @property {number=} red
 * @property {number=} green
 * @property {number=} blue
 */
/**
 * Checks if a given game is valid by checking if it uses no more than 12 red cubes, 13 green cubes, and 14 blue cubes
 * @param {CubeInfo} cubes
 */
function isValidGame(cubes) {
	return (cubes.red ?? 0) <= 12 && (cubes.green ?? 0) <= 13 && (cubes.blue ?? 0) <= 14
}
