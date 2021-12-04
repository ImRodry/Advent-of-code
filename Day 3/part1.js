const input = require("./input.json"),
    columns = Array(input[0].length).fill("")
let mostCommon = "", leastCommon = ""

// Construct an array with 12 values corresponding to the bit in each index
input.forEach(byte => {
    const byteSplit = byte.split("")
    byteSplit.forEach((bit, index) => {
        columns[index] += bit
    })
})

// Get the most common bit in each column
columns.forEach(column => {
    let count0 = 0, count1 = 0
    column.split("").forEach(bit => {
        if (bit === "0") {
            count0++
        } else {
            count1++
        }
    })
    if (count0 > count1) {
        mostCommon += "0"
        leastCommon += "1"
    } else {
        mostCommon += "1"
        leastCommon += "0"
    }
})

const gammaRate = parseInt(mostCommon, 2),
    epsilonRate = parseInt(leastCommon, 2),
    powerConsumption = gammaRate * epsilonRate

// Answer: powerConsumption
console.log(gammaRate, epsilonRate, powerConsumption)
