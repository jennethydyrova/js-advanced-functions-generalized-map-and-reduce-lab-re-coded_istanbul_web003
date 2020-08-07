// Add your functions here
const map = (array, func) => {
  return array.map((element) => func(element));
};

const reduce = (array, func, stratingPoint) => {
  if (!!stratingPoint == false) {
    stratingPoint = array.shift();
  }
  return array.reduce(func, stratingPoint);
};
