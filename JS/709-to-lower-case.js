/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
  return str.split("").map((x) => (x.charCodeAt(0) > 64 && x.charCodeAt(0) < 91) ? x = String.fromCharCode(x.charCodeAt(0) + 32) : x).join("")
  
};

// I code golf'd this one. The incoming string is split on each charcater in an array. 
// The array is mapped and each character's value is checked. 
// Uppercase characters are valued from 65 to 90. If the character is uppercase, add 32
// to the ASCII value to make it lowercase. 
// if the character's value is >= 92 then do nothing
// all characters are joined back into a returned string