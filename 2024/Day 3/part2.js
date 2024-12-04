const fs = require("fs"),
	input = fs.readFileSync("input.txt", "utf-8").trim(),
	sanitizedInput = input.match(/(don't\(\))|(do\(\))|(mul\(\d{1,3},\d{1,3}\))/gm)

let index = -1
while ((index = sanitizedInput.indexOf("don't()")) !== -1) {
	const nextDoIndex = sanitizedInput.indexOf("do()", index)
	if (nextDoIndex === -1) sanitizedInput.splice(index)
	else sanitizedInput.splice(index, nextDoIndex - index + 1)
}

let sum = 0
for (const match of sanitizedInput) {
	if (match === "do()") continue
	const [left, right] = match.match(/\d{1,3}/g).map(Number)
	sum += left * right
}

console.log(sum)
