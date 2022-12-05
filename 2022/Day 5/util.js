/**
 * Parses today's input into usable data
 * @param {string} input The input string from the txt file
 * @returns {[string[][], [number, number, number][]]}
 */
function parseInput(input) {
	const [start, instructions] = input.split("\n\n").map(s => s.split("\n"))
	// pop the numbers, they're useless
	start.pop()
	/** @type {string[]} */
	const initialState = []
	for (const line of start) {
		const columnEntries = line.match(/(\[\w\]| {3})( |$)/g)
		for (const [i, elem] of columnEntries.entries()) {
			if (!elem.trim()) continue
			initialState[i] ??= []
			initialState[i] = [elem[1], ...initialState[i]]
		}
	}
	const parsedInstructions = []
	for (const line of instructions.filter(Boolean)) {
		const { move, from, to } = line.match(/move (?<move>\d+) from (?<from>\d+) to (?<to>\d+)/).groups
		parsedInstructions.push([move, from - 1, to - 1].map(Number))
	}
	return [initialState, parsedInstructions]
}

function applyInstructions(state, instructions, reverse) {
	for (const line of instructions) {
		// console.log(state)
		const [move, from, to] = line,
			moving = state[from].splice(state[from].length - move, move)
		if (reverse) moving.reverse()
		state[to].push(...moving)
	}
}

module.exports = { parseInput, applyInstructions }
