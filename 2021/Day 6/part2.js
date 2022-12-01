const fs = require("fs"),
    input = fs.readFileSync("./input.txt", "utf8").split(",").map(Number)
    // input = [3, 4, 3, 1, 2]

const ages = []
for (let i = 0; i < 9; i++) ages.push(input.filter(n => n === i).length)

for (let i = 0; i < 256; i++) {
    const newFish = ages.splice(0, 1)
    ages[6] += newFish[0]
    ages[8] = newFish[0]
}

const fishNum = ages.reduce((a, b) => a + b)

//Answer: input.length
console.log(fishNum)
