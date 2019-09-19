const reverseString = function(str) {
//split string into an array
let splitStr = str.split("");
//reverse the array
let reverseArray = splitStr.reverse();
//join the array into a new string
let joinArray = reverseArray.join("");
//return the string
return joinArray;
}
module.exports = reverseString
