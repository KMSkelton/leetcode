def islandPerimeter(grid):
  count = 0
  grid_length, row_length = len(grid), len(grid[0])
  for i in range(grid_length):
    for j in range(row_length):
      if(grid[i][j] == 1):
        # value above
        if i == 0 or grid[i-1][j] == 0:
           count += 1 
        # value to the left:
        if j == 0 or grid[i][j-1] == 0:
           count += 1
        # value to the right
        if j == row_length - 1 or grid[i][j+1] == 0:
           count += 1
        # value below
        if i == grid_length - 1 or grid[i+1][j] == 0:
           count += 1
  
  return count