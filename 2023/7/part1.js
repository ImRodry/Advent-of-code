const fs = require("node:fs"),
	/** @type {[string, string][]} */
	input = fs
		.readFileSync("input.txt", "utf-8")
		.trim()
		.split("\n")
		.map(l => l.split(" ")),
	cardValues = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "T", "J", "Q", "K", "A"]

input.sort(([a], [b]) => {
	const result = getRank(getCardAmounts(a)) - getRank(getCardAmounts(b))
	if (result) return result
	for (let i = 0; i < 5; i++) {
		const aIndex = cardValues.indexOf(a[i]),
			bIndex = cardValues.indexOf(b[i])
		if (aIndex === bIndex) continue
		return aIndex - bIndex
	}
})
console.log(input.reduce((acc, [, curValue], i) => acc + parseInt(curValue) * (i + 1), 0))

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
 * @param {Record<string, number>} cardAmounts Amount of each card on a hand
 */
function getRank(cardAmounts) {
	const values = Object.values(cardAmounts)
	if (values.includes(5)) return 7
	if (values.includes(4)) return 6
	if (values.includes(3) && values.includes(2)) return 5
	if (values.includes(3)) return 4
	if (values.filter(v => v === 2).length === 2) return 3
	if (values.includes(2)) return 2
	return 1
}
