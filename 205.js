
// CHALLENGE DESCRIPTION:

// You have a list of words. Letters of these words are mixed with extra symbols, so it is hard to define the beginning and end of each word. Write a program that will clean up the words from extra numbers and symbols.

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") { // ignore empty lines
        console.log(decodeString(line));
    }
});

function decodeString(line) {
	var result = "";
	// reduce line to char array
	var charArray = line.split("");
	// match each char against letter
	for (var i = 0; i < charArray.length; i++) {
		if (charArray[i].match(/[a-z]|[A-Z]/)) {
			result += charArray[i];
		}
		else if (result.length !== 0 && result[result.length-1] !== " ") {
			result += " ";
		}
	}
	// ensure result is all lower case & remove extra end-spaces
	if (result[result.length] === " ") {
	result = result.slice(0, result.length-1);
	}
	result = result.toLowerCase();
	return result;
}

