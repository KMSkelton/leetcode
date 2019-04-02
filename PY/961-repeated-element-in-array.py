# the name and description for this problem are really misleading

def findRepeat(arr):
  for val in arr:
    arr.count(val) > 1
    return val