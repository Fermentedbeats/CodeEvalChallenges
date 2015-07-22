
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") { // ignore empty lines
        console.log(decodeString(line));
    }
});


function decodeString(str) {
  var strArray;
  var alpha = [];
  var result = "";
  
  // array of chars
  strArray = str.split("");

    // create alphabet array
    for (var i = 97; i <= 106; i++) {
      alpha[alpha.length] = String.fromCharCode(i);
    }

    // cycle through to match letter in string
    for (var j = 0; j < strArray.length; j++) {
     for (var a = 0; a < alpha.length; a++) {
      if (strArray[j] === alpha[a]) {
        result += a; 
      }
    }
       // check if item is a digit
       if (strArray[j].match(/[0-9]/)) {
        result += strArray[j];
      }
    }

    // return result if not empty
    if (result.length !== 0) {
        // console.log(result);
        return result;
      }
    else {
    // console.log("NONE");
    return "NONE";
  }
}


