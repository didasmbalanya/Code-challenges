/**
 * 
 * @param {string} word // get
 * @returns {string} index of the words in reverse order
 */
const reverserCount = (word) => {
  let res = '';

  // get alphabet in arr
  for(i=9,a=[''];++i<36;){
    a.push(i.toString(36))
  }
  const rWord = word.split('').reverse();

  for(let letter in rWord){
    const index = a.indexOf(rWord[letter]) + Number(letter)
    res += index
    // console.log("round ", letter, "index ",index,  " res ", res)
  }
  
  return res
}

console.log(reverserCount('get')) // returns 2069
