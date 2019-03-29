class Solution:
    def findDuplicates(self, nums: List[int]) -> List[int]:
          doubles = []
          holder = {}
          for num in nums:
            if num not in holder:
              holder[num] = True
            else:
              doubles.append(num)
          return doubles
