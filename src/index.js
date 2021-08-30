module.exports = check = (str, bracketsConfig) => {
  let brackets = bracketsConfig.reduce((acc, el) => (acc[el[0]] = el[1], acc), {})
  let stack = []
  for (let item of str) {
    if (item === brackets[stack[stack.length-1]]) {
      stack.pop()
      continue
    }
    if (brackets[item]) {
      stack.push(item)
      continue
    }
    return false
  }
  return !stack.length
}
