const fs = require("fs"),
    input = fs.readFileSync("input.txt", "utf8").split(",").map(Number)
    // input = "16,1,2,0,4,2,7,1,2,14".split(",").map(Number)

const fuels = []
for (let n = 0; n < Math.max(...input); n++) {
    let fuel = 0
    for (const pos of input) {
        let prevValue = 0
        for (let i = 0; i < Math.abs(pos - n); i++) {
            fuel += prevValue + 1
            prevValue++
        }
    }
    fuels.push(fuel)
}

//Answer: Math.min(...fuels)
console.log(fuels, Math.min(...fuels))
