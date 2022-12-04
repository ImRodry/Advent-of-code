const input = require("./part1.js")

let overlappingPairs = 0
for (const [smallest, biggest] of input) {
	if (smallest.some(n => n >= biggest[0] && n <= biggest[1])) overlappingPairs++
}

console.log(overlappingPairs)
