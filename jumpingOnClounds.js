/**
 * can jump one or twice from cuurent index. has to jump wlements with value 1
 * @param {array} clounds an array of clounds with 0 or 1;
 * @returns {number} least number of possible jumps
 */
const  jumpingOnClouds = (clounds) => {
  let jumps = 0;
  const total = clounds.length;
  for (let i = 0; i < total; i ++) {
    if (clounds[2] === 0) {
      clounds.splice(0,2)
      console.log("jumping twice")
      jumps += 1
      console.log("current jumps done: ", jumps)
    }

    if (clounds[0] === 0 && clounds[1] === 0 && clounds[2] !== 0) {
      clounds.splice(0,1)
      console.log("jumping once")
      jumps += 1
    }
  }
  return jumps;
}

console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0])); // returns 4
