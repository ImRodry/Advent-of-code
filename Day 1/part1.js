const input = require("./input.json")
let increased = 0

input.forEach((n, i) => {
    if (i === 0) return
    if (n > input[i - 1]) increased++
})
console.log(increased, input.length)
