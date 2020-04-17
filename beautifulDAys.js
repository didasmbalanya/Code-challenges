
/**
 * It must return the number of beautiful days in the range.
 * beautiful days = (reverse day number - day number) % k === 0

 * @param {*} i i: the starting day number
 * @param {*} j j: the ending day number
 * @param {*} k k: the divisor
 * @returns {number}
 */
const beautifulDays = (i, j, k) => {
  let total = 0;
  for (let a = i; a <= j; a++) {
    const reversed = Number(a.toString().split("").reverse().join(""));
    const diff = Math.abs(reversed - a);
    if (diff % k === 0) total += 1;
  }
  return total;
};

console.log(beautifulDays(20, 23, 6)) // returns 2
