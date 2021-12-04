const input = require('./input.json')

//Filter out the values using the bit criteria, most common for o2, least for co2
let o2Values = Array.from(input), co2Values = Array.from(input), o2 = "", co2 = ""
for (let i = 0; i < input[0].length; i++) {
    o2Values = o2Values.filter(b => b[i] === getMostCommon(o2Values, i)),
        co2Values = co2Values.filter(b => b[i] === getLeastCommon(co2Values, i))
    if (o2Values.length === 1) o2 = o2Values[0]
    if (co2Values.length === 1) co2 = co2Values[0]
}

//Convert bytes to decimal numbers
const o2Dec = parseInt(o2, 2),
    co2Dec = parseInt(co2, 2),
    lifeSupport = o2Dec * co2Dec

// Answer: lifeSupport
console.log(o2Dec, co2Dec, lifeSupport)

// Returns the most common bit in an array of bits
function getMostCommon(arr, index) {
    const { count0, count1 } = getSpreadValues(arr, index)
    if (count0 > count1) return "0"
    else return "1"

}

// Returns the least common bit in an array of bits
function getLeastCommon(arr, index) {
    const { count0, count1 } = getSpreadValues(arr, index)
    if (count1 < count0) return "1"
    else return "0"
}

// Gets the amount of 0 and 1 bits in an array of bits
function getSpreadValues(arr, index) {
    let count0 = 0, count1 = 0
    // Get the most common bit in each column
    arr.forEach(column => {
        const bit = column[index]
        if (bit === "0") count0++
        else count1++
    })
    return { count0, count1 }
}
