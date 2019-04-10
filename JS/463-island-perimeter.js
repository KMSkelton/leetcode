islandPerimeter = (grid) => {
  let total = 0
  const gridLength = grid.length
  const rowLength = grid[0].length 
  //double for loops ~10% faster than double forEach which is in turn ~10% faster than double map
  for(let i = 0; i <gridLength; i ++){
    for(let j = 0; j<rowLength; j++){
       if (grid[i][j] === 1){
       // value above
       (i - 1 === -1 || grid[i-1][j] === 0) && total++ 
       // value to the left:
       (j - 1 === -1 || grid[i][j-1] === 0) && total++
       //value to the right
       (grid[i][j+1] === undefined || grid[i][j+1] === 0) && total++
       //value below
       (grid[i+1] === undefined || grid[i+1][j] === 0) && total++
       }
    }
  }
 return total
}

console.log(islandPerimeter(grid))
