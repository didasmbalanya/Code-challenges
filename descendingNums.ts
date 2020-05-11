const descendingOrder = (n: number) => {
  // your code here
  const result = n
    .toString()
    .split('')
    .map((val) => Number(val))
    .sort()
    .reverse()
    .join('');
  return Number(result);
};

console.log(descendingOrder(1342)); // return 4321