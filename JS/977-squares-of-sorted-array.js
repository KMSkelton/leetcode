/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
  compare = (a,b) => {
  return a-b
  }
  modified = []
  A = A.map(x => x*x)
  return A.sort(compare)
};