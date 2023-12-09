const fs = require("node:fs"),
	/** @type {string[]} */
	input = fs.readFileSync("input.txt", "utf-8").trim().split("\n")

let predictionSum = 0

for (const line of input) {
	const nums = line.split(" ").map(Number)
	let diff = [nums]
	while (diff.at(-1).length !== diff.at(-1).filter(n => n === 0).length) diff.push(findDifferences(diff.at(-1)))
	for (const [i, row] of diff.reverse().entries()) {
		if (i === 0) row.push(0)
		else row.push(row.at(-1) + diff[i - 1].at(-1))
	}
	predictionSum += diff.at(-1).at(-1)
}

console.log(predictionSum)

/**
 * Calculates the differences between each number in the array.
 * @param {number[]} nums
 * @returns Array of differences between each number. The returning array's length is one less than the input array's length.
 */
function findDifferences(nums) {
	const differences = []
	for (let i = 1; i < nums.length; i++) {
		differences.push(nums[i] - nums[i - 1])
	}
	return differences
}
