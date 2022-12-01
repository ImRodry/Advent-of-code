const input = require("./input.json")
let increased = 0

input.forEach((n, i) => {
    // Don't count the first index
    if (i === 0) return
    // If the current value is greater than the previous value, increase the counter
    if (n > input[i - 1]) increased++
})

// Answer: increased
console.log(increased, input.length)
