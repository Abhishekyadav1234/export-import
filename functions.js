const getSum = (x, y) => {
  return x + y;
};

const getProduct = (x, y, z) => {
  return x * y * z;
};
export { getSum, getProduct };

const checkOddOrEven = (x) => {
  let result;
  if (x % 2 === 0) {
    result = "Even";
  } else {
    result = "Odd";
  }
  return result;
};
export { checkOddOrEven };
//
//?
const sayHello = () => {
  //   return "hello";
  console.log("hello");
};
export { sayHello };
