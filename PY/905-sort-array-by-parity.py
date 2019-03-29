# this uses a ternary to send each value to a placeholder list, then concatenates the lists
class Solution:
    def sortArrayByParity(self, A: List[int]) -> List[int]:
        odd = []
        even = []
        for i in A:
         odd.append(i) if i%2 != 0 else even.append(i)
        return even+odd