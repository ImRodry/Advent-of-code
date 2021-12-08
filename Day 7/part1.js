const fs = require("fs"),
    input = fs.readFileSync("input.txt", "utf8").split(",").map(Number)

const fuels = []
for (let n = 0; n < Math.max(...input); n++) {
    let fuel = 0
    for (const pos of input) {
        //Make sure we don't mess with negative numbers
        fuel += Math.abs(n - pos)
    }
    fuels.push(fuel)
}

//Answer: Math.min(...fuels)
console.log(fuels, Math.min(...fuels))
