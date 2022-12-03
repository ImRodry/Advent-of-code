function getPriority(charCode) {
	let priority = 0
	// If uppercase (char codes 65-90), priority is 27-52
	if (charCode >= 65 && charCode <= 90) priority = charCode - 38
	else if (charCode >= 97 && charCode <= 122) priority = charCode - 96
	else throw new Error(`Invalid character: ${String.fromCharCode(charCode)} (char code ${charCode})`)
	return priority
}

module.exports = { getPriority }
