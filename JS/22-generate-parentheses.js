var generateParenthesis = function (n) {
  const re = []
  const genParens = function (left, right, current) {
    if (left === 0 && right === 0) {
      re.push(current)
    } else if (left === 0 && right > 0) {
      genParens(left, right - 1, current + ')')
    } else if (left > 0 && right > 0) {
      if (left === right) {
        genParens(left - 1, right, current + '(')
      } else if (left < right) {
        genParens(left - 1, right, current + '(')
        genParens(left, right - 1, current + ')')
      }
    }
  }
  genParens(n, n, '')
  return re
}
