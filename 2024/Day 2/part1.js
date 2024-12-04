const fs = require("node:fs"),
	input = fs
		.readFileSync("input.txt", "utf-8")
		.trim()
		.split("\n")
		.map(l => l.split(" ").map(Number))

let safe = 0
for (const report of input) {
	let direction = 0
	for (let i = 0; i < report.length - 1; i++) {
		let diff = report[i + 1] - report[i]
		if (direction === 0) direction = diff
		// If the difference is greater than 3, or the difference changes direction, break
		if (Math.abs(diff) < 1 || Math.abs(diff) > 3 || diff * direction < 0) break
		else if (i === report.length - 2) {
			safe++
		}
	}
}

console.log(safe)
