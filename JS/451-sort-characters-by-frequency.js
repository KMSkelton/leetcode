var frequencySort = function(s) {
  breakdown = {}
  sortable = []
  final = ''
  arr = s.split('')
  arr.forEach(x => {
    breakdown[x] === undefined ? breakdown[x] = 1 : breakdown[x]++
  })
  for(let x in breakdown){
    sortable.push([x, breakdown[x]])
  }
  sortable.sort((a,b) => {
    return b[1] - a[1]
  })
  sortable.map(x => {
    while(x[1] > 0){
      final+=x[0]
      x[1]--
    }
  })
  return final
};