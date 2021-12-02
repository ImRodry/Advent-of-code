const input = require("./input.json")
let horizontal = 0, depth = 0, aim = 0

input.forEach(instruction => {
    // If forward, increase horizontal and depth by aim times X
    if (instruction.startsWith("forward")) {
        horizontal += parseInt(instruction.split(" ")[1])
        depth += aim * parseInt(instruction.split(" ")[1])
    // If down, increase aim
    } else if (instruction.startsWith("down")) aim += parseInt(instruction.split(" ")[1]);
    // If up, decrease aim
    else if (instruction.startsWith("up")) aim -= parseInt(instruction.split(" ")[1])
})

// Answer: horizontal * depth
console.log(horizontal, depth, aim, horizontal * depth)
