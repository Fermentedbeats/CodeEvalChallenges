// Write a program which reads a file and prints to stdout the specified number of the longest lines that are sorted based on their length in descending order.

// INPUT SAMPLE:

// Your program should accept a path to a file as its first argument. The file contains multiple lines. The first line indicates the number of lines you should output, the other lines are of different length and are presented randomly. You may assume that the input file is formatted correctly and the number in the first line is a valid positive integer.


var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") { // ignore empty lines
    	var inputArray = [];
    	inputArray.push(line);
    	console.log(longestLine(inputArray));
    }
});

function longestLine(inputArray) {
	var volume = inputArray[0];
	inputArray.shift();

	var sorted = inputArray.sort(function (a, b) {
		return a.length < b.length;
	});

	for (var i = 0; i < volume; i++) {
		return sorted[i];
	}

}

// IN PROGRESS - code eval not accpeting final submission format...