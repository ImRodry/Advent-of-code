const input = require("./input.json");
let horizontal = 0, depth = 0;

input.forEach(instruction => {
    // If forward, increase horizontal
    if (instruction.startsWith("forward")) horizontal += parseInt(instruction.split(" ")[1]);
    // If down, increase depth
    else if (instruction.startsWith("down")) depth += parseInt(instruction.split(" ")[1]);
    // If up, decrease depth
    else if (instruction.startsWith("up")) depth -= parseInt(instruction.split(" ")[1]);
})

// Answer: horizontal * depth
console.log(horizontal, depth, horizontal * depth)
