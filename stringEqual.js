/**
 * https://www.hackerrank.com/challenges/sherlock-and-valid-string/problem
 * Takes a string and returns yes if all the letters are of equal occurences or removing one results to so
 * @param string s,
 * @returns yes or no
 */
const stringEqual = (s) => {
  const vals = [];
  const sArr = s.toLowerCase().split("");
  const unique = new Set(sArr);
  for (let letter of unique) {
    const total = sArr.filter((str) => str === letter);
    vals.push(total.length);
  }
  const setVals = new Set(vals).size;
  if (setVals === 1) return "YES";

  for (let i in vals) {
    vals[i] = vals[i] - 1;
    if (vals[i] === 0) {
      const newVals = vals.filter((val) => val > 0);
      if (new Set(newVals).size === 1) return 'YES'
    }
    const size = new Set(vals).size;
    if (size === 1) return "YES";
    vals[i] = vals[i] + 1;
  }
  return "NO";
};

// console.log(stringEqual("a")); // return yes
// console.log(stringEqual("abccdd")); // return no

// console.log(stringEqual("aabbc")); // return yes
