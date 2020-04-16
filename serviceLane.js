
/**
 * 
 * @param {array} cases , an array of array with start and stop points
 * @param {array} width an array with elements representing the length of the service length
 * @returns {array} of the least possible length between start and stop for each case
 */
const  serviceLane = ( cases, width) => {
  // const width = [2, 3, 1, 2, 3, 2, 3, 3];
  const result = [];

  cases.map((casey) => {
    const start = casey[0];
    const end = casey[1];
    let max = 10;
  
    for (let i = start; i <= end; i++){
        if (width[i] > 0 &&  width[i] < max) max = width[i]
    }
    result.push(max);

  })
  return result
}

const val = [[0, 3],[4, 6],
[6,7],
[3, 5],
[0, 7]]
console.log(serviceLane(8, val, [2, 3, 1, 2, 3, 2, 3, 3]))

