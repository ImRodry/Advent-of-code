const input = require("./input.json")
let increased = 0

input.forEach((n, i) => {
    // Don't count the first 3 indexes (can't calculate the sum)
    if ([0, 1, 2].includes(i)) return
    // Calculate the sum of the last 3 numbers and the 3 numbers before the current one
    const sum = [n, input[i - 1], input[i - 2]].reduce((a, b) => a + b),
        previousSum = [input[i - 1], input[i - 2], input[i - 3]].reduce((a, b) => a + b)
    // If sum is bigger than previousSum, increase the counter
    if (sum > previousSum) increased++
})

// Answer: increased
console.log(increased, input.length)
