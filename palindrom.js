/**
 * A function that returns true if word is a palindrome
 * @param {String} word
 * @return {Boolean}
 */

const checkPalindrome = (word) => {
  let rword = ''
  let val = [];
  for (let i = 0; i < word.length; i++) {
    val.push(word[i]);
  }

  for (let j = 0; j < word.length; j++){
    rword += val.pop()
  }
  return word === rword
};

const checkPalindrom2 = (word) => {
  return word.toLowerCase() === word.toLowerCase().split('').reverse().join('')
 
}
