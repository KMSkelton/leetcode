/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
  let count = 0;
  let jewels = J.split("");
  let stones = S.split("");
  
  jewels.forEach(jewel => {
  stones.forEach(stone => {
    if (jewel === stone) {
      count ++
    }
  })
});
  return count;
};