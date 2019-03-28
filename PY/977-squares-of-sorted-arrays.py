class Solution:
    def sortedSquares(self, A: List[int]) -> List[int]:
        return(sorted([i*i for i in A]))  #this is the kind of question list comprehensions excel at. 

        # the list comprehension is essentially a compressed version of a for loop 
        # and it doesn't require a separate list for storage

        
         