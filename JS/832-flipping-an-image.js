/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
  let newArr = []
  A.map((x) => {
  let inner = []
  x = x.reverse().map((y) => {
      inner.push(y ? 0 : 1 )
  })
  newArr.push(inner)
})
 return(newArr)
};