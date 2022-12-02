const fs = require("node:fs"),
	/**
	 * @type {string[]}
	 */
	input = fs.readFileSync("./input.txt", "utf-8").replaceAll("\r").split("\n").filter(Boolean),
	plays = {
		A: "rock",
		B: "paper",
		C: "scissors",
		X: "rock",
		Y: "paper",
		Z: "scissors",
	}
let score = 0
for (const line of input) {
	let roundScore = 0
	const [they, me] = line.split(" ")
	if (plays[me] === plays[they]) roundScore += 3
	else if (
		(plays[me] === "rock" && plays[they] === "scissors") ||
		(plays[me] === "paper" && plays[they] === "rock") ||
		(plays[me] === "scissors" && plays[they] === "paper")
	)
		roundScore += 6

	switch (plays[me]) {
		case "rock":
			roundScore += 1
			break
		case "paper":
			roundScore += 2
			break
		case "scissors":
			roundScore += 3
			break
	}
	score += roundScore
}

console.log(score)
