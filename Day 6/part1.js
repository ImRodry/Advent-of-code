const fs = require("fs")
let input = fs.readFileSync("./input.txt", "utf8").split(",").map(Number)

for (let i = 0; i < 80; i++) {
    // Remove one from every cycle
    input = input.map(n => n - 1)
    // Count the amount of negatives
    let newFish = input.filter(fish => fish === -1).length
    // Add one new fish for each zero
    for (newFish; newFish > 0; newFish--) input.push(8)
    // Replace the negatives with 6
    input = input.map(n => n === -1 ? 6 : n)
}

//Answer: input.length
console.log(input.length)
