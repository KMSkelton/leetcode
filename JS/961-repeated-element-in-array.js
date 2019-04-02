// the name and description for this problem are really misleading

const findRepeat = (arr) => {
  holder = {}
  for (let x of arr) {
    if (holder[x] === 1) return x
    holder[x] = 1
  }
}
