def majorityElement(self, nums: List[int]) -> int:
        elems = {}
        for num in nums:
            if num not in elems:
              elems[num] = 1
            else:
              elems[num] += 1
        return(max(elems, key=elems.get))