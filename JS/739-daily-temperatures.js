var dailyTemperatures = function(T) {
  result = Array(T.length).fill(0)
  stack = []
  T.forEach((x,i) => {
    let top = getStackTop(stack)
    if(top === null || T[top] > x){
      stack.push(i)
    } else {
      while(stack.length > 0 && T[top] < x){
        result[top] = i - top
        stack.pop()
        top = getStackTop(stack)
      }
      stack.push(i)
    }
  })
  return result
}

let getStackTop = (stack) => {
return stack.length > 0 ? stack[stack.length - 1] : null
} 
