const elves = require("./part1.js")

let sum = 0
for (let i = 0; i < 3; i++) sum += elves[i]

console.log("Sum of top 3:", sum)
