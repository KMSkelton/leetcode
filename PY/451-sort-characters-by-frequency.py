class Solution:
    def frequencySort(self, s: str) -> str:
        breakdown = {}
        sortable = []
        final = ''
        for char in s:
            if char not in breakdown:
                breakdown[char] = 1
            else :
                breakdown[char] += 1
        sorted_breakdown = sorted(breakdown.items(), key=operator.itemgetter(1))
        sorted_breakdown.reverse()

        for entry in sorted_breakdown:
            entry = [entry[0], entry[1]]
            while entry[1] > 0:
                final += entry[0]
                entry[1] -= 1
        return(final)
