
const extraLongFactorials = (n) => {
  let total = 1n;
  for(let i = 1n; i <= BigInt(n); i +=1n){
    total *= i
  }
  return total.toString()
}

console.log(extraLongFactorials(25)); // 15511210043330985984000000
