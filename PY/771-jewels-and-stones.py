 class Solution(object):
    def numJewelsInStones(self, J, S):
        """
        :type J: str
        :type S: str
        :rtype: int
        """
        count = 0
        for jewel in J: # same syntax for "for...in" loops whether string or array
          for stone in S:
            if jewel == stone:
                count += 1
        return count
