const fs = require("fs"),
	input = fs.readFileSync("input.txt", "utf-8").trim()

let sum = 0
for (const match of input.matchAll(/mul\((\d{1,3}),(\d{1,3})\)/g)) {
	sum += Number(match[1]) * Number(match[2])
}

console.log(sum)
