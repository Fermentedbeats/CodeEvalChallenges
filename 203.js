// CHALLENGE DESCRIPTION:

// You have a string composed of the following symbols: '>', '<', and '-'. Your task is to find, count, and print to the output a number of arrows in the string. An arrow is a set of the following symbols: '>>-->' or '<--<<'. 
// Note that one character may belong to two arrows at the same time.

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") { // ignore empty lines
        console.log(countArrows(line));
    }
});

function countArrows(line) {
	counter = 0;
  	var check;

	for (var i = 0; i < line.length; i++) {
		if (line[i] === ">" || line[i] === "<") {
			check = line.slice(i, i + 5);
			if (check.match(/>>-->|<--<</)) {
				counter += 1;
			}
		}
	}	
 return counter;
}