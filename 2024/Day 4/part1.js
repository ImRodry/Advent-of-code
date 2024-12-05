const fs = require("fs"),
	/** @type {string[][]} */
	input = fs
		.readFileSync("input.txt", "utf-8")
		.trim()
		.split("\n")
		.map(l => l.split("")),
	word = "XMAS"

let count = 0
for (let y = 0; y < input.length; y++) {
	for (let x = 0; x < input[y].length; x++) {
		if (input[y][x] !== "X") continue
		const matches = Array.from({ length: 8 }, () => ["X"])
		for (let direction = 0; direction < 8; direction++) {
			for (let i = 1; i < word.length; i++) {
				switch (direction) {
					case 0:
						matches[direction].push(input[y - i]?.[x])
						break
					case 1:
						matches[direction].push(input[y - i]?.[x + i])
						break
					case 2:
						matches[direction].push(input[y]?.[x + i])
						break
					case 3:
						matches[direction].push(input[y + i]?.[x + i])
						break
					case 4:
						matches[direction].push(input[y + i]?.[x])
						break
					case 5:
						matches[direction].push(input[y + i]?.[x - i])
						break
					case 6:
						matches[direction].push(input[y]?.[x - i])
						break
					case 7:
						matches[direction].push(input[y - i]?.[x - i])
						break
				}
				if (!word.startsWith(matches[direction].join("")) || matches[direction].includes(undefined)) {
					matches[direction] = null
					break
				}
			}
		}
		count += matches.filter(m => m).length
	}
}

console.log(count)
