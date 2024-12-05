const fs = require("fs"),
	/** @type {string[][]} */
	input = fs
		.readFileSync("input.txt", "utf-8")
		.trim()
		.split("\n")
		.map(l => l.split("")),
	word = "MAS"

let count = 0
for (let y = 0; y < input.length; y++) {
	for (let x = 0; x < input[y].length; x++) {
		if (input[y][x] !== "A") continue
		const matches = Array.from({ length: 4 }, () => ["", "A", ""])
		for (let direction = 0; direction < 4; direction++) {
			for (let i = 0; i < 3; i += 2) {
				const change = i - 1
				switch (direction) {
					case 0:
						matches[direction][i] = input[y - change]?.[x + change]
						break
					case 1:
						matches[direction][i] = input[y + change]?.[x + change]
						break
					case 2:
						matches[direction][i] = input[y + change]?.[x - change]
						break
					case 3:
						matches[direction][i] = input[y - change]?.[x - change]
						break
				}
				if (!word.startsWith(matches[direction].join("")) || matches[direction].includes(undefined)) {
					matches[direction] = null
					break
				}
			}
		}

		if (matches.filter(m => m).length >= 2) count += Math.floor(matches.filter(m => m).length / 2)
	}
}

console.log(count)
