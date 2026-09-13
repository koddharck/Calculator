export const add = (a, b) => a + b

export const subtract = (a, b) => a - b

export const multiply = (a, b) => a * b

export const divide = (a, b) => (b === 0 ? 'Error' : a / b)

export const percentage = (value, base) =>
  base === undefined ? value / 100 : (base * value) / 100

export const calculate = (a, b, operator) => {
  switch (operator) {
    case '+':
      return add(a, b)
    case '-':
      return subtract(a, b)
    case '×':
    case '*':
      return multiply(a, b)
    case '÷':
    case '/':
      return divide(a, b)
    default:
      return b
  }
}

export default calculate