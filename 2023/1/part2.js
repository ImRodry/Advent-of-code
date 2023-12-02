const fs = require("node:fs"),
	/** @type {string} */
	input = fs.readFileSync("input.txt", "utf-8").trim(),
	wordsToNums = {
		one: "1",
		two: "2",
		three: "3",
		four: "4",
		five: "5",
		six: "6",
		seven: "7",
		eight: "8",
		nine: "9",
	},
	regex = /one|two|three|four|five|six|seven|eight|nine|\d/g
let sum = 0

for (const line of input.split("\n")) {
	let firstNum, lastNum, match
	while ((match = regex.exec(line)) !== null) {
		if (match[0].length === 0) {
			// Avoid infinite loop if the regex matches an empty string
			regex.lastIndex++
			continue
		} else {
			regex.lastIndex = match.index + 1 // Move the index by 1 to find overlapping matches
		}
		if (isNaN(match[0])) {
			match[0] = wordsToNums[match[0]]
		}
		if (firstNum === undefined) {
			firstNum = match[0]
			lastNum = match[0]
		} else lastNum = match[0]
	}
	console.log(firstNum + lastNum)
	sum += parseInt(firstNum + lastNum)
}

console.log(sum)
