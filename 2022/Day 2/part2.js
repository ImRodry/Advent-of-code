const fs = require("node:fs"),
	input = fs.readFileSync("./input.txt", "utf-8").replaceAll("\r").split("\n").filter(Boolean),
	plays = {
		A: { play: "rock", points: 1, lose: "paper" },
		B: { play: "paper", points: 2, lose: "scissors" },
		C: { play: "scissors", points: 3, lose: "rock" },
	},
	outcomes = {
		X: 0,
		Y: 3,
		Z: 6,
	}

let score = 0
for (const round of input) {
	let roundScore = 0
	const [they, outcome] = round.split(" ")
	switch (outcomes[outcome]) {
		case 0:
			roundScore += Object.values(plays).find(({ lose }) => lose === plays[they].play).points
			break
		case 3:
			roundScore += plays[they].points + 3
			break
		case 6:
			roundScore += Object.values(plays).find(({ play }) => play === plays[they].lose).points + 6
			break
	}
	score += roundScore
}
console.log(score)
