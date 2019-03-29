var uncommonFromSentences = function(A, B) {
  let concatArr = A.split(' ').concat(B.split(' '))
  let counts = {}
  for (let word of concatArr){
    counts.hasOwnProperty(word) ? counts[word] ++ : counts[word] = 1
  }
  return concatArr.filter(word => counts[word] === 1)
};

// This is about 25% faster than the above but requires remembering lastIndexOf(). 
// They use effectively the same space
function findUnc2(a,b){
  let arr = A.concat(' ', B).split(' ');
  let result = [];
  for(word of arr){
    if(arr.indexOf(word) == arr.lastIndexOf(word)){
    result.push(word);
    }
  }
  return result;
}