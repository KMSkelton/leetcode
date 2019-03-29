/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
  odd = []
  even = []
  A.map(function(x,i) {
      return x % 2 != 0 ? odd.push(x) : even.push(x)
  })
  return(even.concat(odd))
};