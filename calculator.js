// 덧셈
add = (a, b) => a + b;

// 뺼셈
substract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => {
  if (b === 0) {
    throw new Error();
  }
  return a / b;
};
