var reverse = function (x) {
  const str = x.toString().split('')
  if (str[0] === '-') {
    str.shift()
    str.reverse()
    str.unshift('-')
    const val = str.join('')
    if (val >= (2 ** 31 - 1) || val <= -(2 ** 31)) return 0
    return val
  } else {
    const val = str.reverse().join('')
    if (val >= (2 ** 31 - 1) || val <= -(2 ** 31)) return 0
    return val
  }
}
