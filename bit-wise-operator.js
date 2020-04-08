// We define  to be a sequence of distinct sequential integers from  to ; in other words, . We want to know the maximum bitwise AND value of any two integers,  and  (where ), in sequence  that is also less than a given integer, .

// Complete the function in the editor so that given  and , it returns the maximum .

/**
 * 
 * @param {Number} n 
 * @param {Number} k
 * @returns {Number} maximum bitwise AND value of any two integers(a and b),  and  (where a < b), in sequence [0, 1, ...n] that is also less than a given integer, k .
 */
const bitOp = (n, k) => {
  let heighest = 0;
  for(let a = 1; a < n; a++){
    for(let b = a + 1; b <= n; b++){
      if ((heighest < (a & b)) && ((a & b) < k)){
        heighest = (a & b)
      }
    }
  }
  return heighest
};

console.log(bitOp(8,5))