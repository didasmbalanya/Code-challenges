/**
 * Takes a number of sockes pairs n, pairs them accourding to colors represented by numbers in array
 * @param {Number} n number of socks
 * @param {Array} ar array of colors represented as numbers
 * @returns { Number } possible number of pairs of the same color
 */
function sockMerchant(n, ar) {
  const unq = new Set(ar);
  let total = 0;

  for (let color of unq) {
    const totalPairs = ar.filter(val => val === color).length;
    total += Math.floor(totalPairs / 2);
  }
  return total;
}

function sockMerchant2(n, ar) {
  const unq = new Set(ar);
  let total = 0;

  for (let color of unq) {
    const totalPairs = ar.filter(val => val === color).length;
    console.log(totalPairs, "color", color);
    total += Math.floor(totalPairs / 2);
  }
  return total;
}

console.log(sockMerchant2(7, [1, 2, 3, 3, 2, 100])); // returns 2
