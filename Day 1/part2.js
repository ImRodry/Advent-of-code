const input = require("./input.json")
let increased = 0

input.forEach((n, i) => {
    if ([0, 1, 2].includes(i)) return
    const sum = [n, input[i - 1], input[i - 2]].reduce((a, b) => a + b),
        previousSum = [input[i - 1], input[i - 2], input[i - 3]].reduce((a, b) => a + b)
    if (sum > previousSum) increased++
})
console.log(increased, input.length)
