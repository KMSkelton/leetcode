var findDuplicates = function(nums) {
  hold = {}
  dupes = []
  for(let num of nums){
      hold.hasOwnProperty(num) ? hold[num]++ : hold[num] = 1 
      hold[num] == 2 ? dupes.push(num) : ''
  }
return dupes
};