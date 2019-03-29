class Solution:
    def uncommonFromSentences(self, A: str, B: str) -> List[str]:
          c = A.split() + B.split() #converts each string into a list that is separated by word & concatenates the lists
          result = []
          for word in c:
            if c.count(word) == 1:  # Hooray for Python's count method
              result.append(word)
          return result
