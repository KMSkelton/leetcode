function findMaj(arr) {
  let majIndex = 0
  let count = 1
  for(let num of arr){
    if (num == majIndex){
      count ++
    } else {
      count --
    }
    if(count == 0){
      majIndex = num
      count = 1
    }
  }
  return majIndex
}