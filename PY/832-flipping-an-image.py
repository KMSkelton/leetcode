class Solution:
  def flipAndInvertImage(self, A: List[List[int]]) -> List[List[int]]:
    newImg = []
    for cell in A:
      newCell = []
      cell.reverse()
      for num in cell:
        num = 0 if num == 1 else 1
        newCell.append(num)
      newImg.append(newCell)
    return newImg