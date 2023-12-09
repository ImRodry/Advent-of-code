const fs = require("node:fs"),
	/** @type {[string, string][]} */
	input = fs
		.readFileSync("input.txt", "utf-8")
		.trim()
		.split("\n")
		.map(l => l.split(" ")),
	cardValues = ["J", "2", "3", "4", "5", "6", "7", "8", "9", "T", "Q", "K", "A"]

input.sort(([a], [b]) => {
	const result = getRank(a) - getRank(b)
	if (result) return result
	for (let i = 0; i < 5; i++) {
		const aIndex = cardValues.indexOf(a[i]),
			bIndex = cardValues.indexOf(b[i])
		if (aIndex === bIndex) continue
		return aIndex - bIndex
	}
})

console.log(
	input,
	input.reduce((acc, [, curValue], i) => acc + parseInt(curValue) * (i + 1), 0)
)

// console.log(getRank("JJ234"))

/**
 * Checks how many times each card appears on a hand
 * @param {string} hand 5-character string representing a hand of cards
 * @returns An object with each char mapped to the ammount of times it appears on the hand
 */
function getCardAmounts(hand) {
	/** @type {Record<string, number>} */
	const result = {}
	for (const char of [...hand]) {
		result[char] ??= 0
		result[char]++
	}
	// You can't sort this because some keys are numeric, so those will always come first because arrays are objects
	return result
}

/**
 * Returns the rank of a given hand of cards. This is a number corresponding to the following:
 * 7 - Five of a kind
 * 6 - Four of a kind
 * 5 - Full house
 * 4 - Three of a kind
 * 3 - Two pair
 * 2 - One pair
 * 1 - High card
 * @param {string} cardAmounts Amount of each card on a hand
 */
function getRank(hand) {
	let addedJ = false
	const cardAmounts = getCardAmounts(hand),
		jCards = cardAmounts.J ?? 0,
		nonJValues = Object.entries(cardAmounts)
			.filter(([k]) => k !== "J")
			.map(([, v]) => v),
		maxNonJValue = Math.max(...nonJValues),
		valuesWithJ = nonJValues
			.sort((a, b) => b - a)
			.map(v => {
				if (v === maxNonJValue && !addedJ) {
					v += jCards
					addedJ = true
				}
				return v
			})
	if (!valuesWithJ.length) valuesWithJ.push(jCards)

	if (valuesWithJ[0] === 5) return 7
	if (valuesWithJ[0] === 4) return 6
	if (valuesWithJ[0] === 3 && valuesWithJ[1] === 2) return 5
	if (valuesWithJ[0] === 3) return 4
	if (valuesWithJ[0] === 2 && valuesWithJ[1] === 2) return 3
	if (valuesWithJ[0] === 2) return 2
	if (valuesWithJ[0] === 1) return 1

	throw new Error("Invalid hand: " + hand)
}
