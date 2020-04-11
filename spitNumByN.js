const splitByTwo = (values) => {
  let res = [];
  const val = (Number(values)).toString().split("");
  if (val.length === 1 && val[0] > 0) return [val];

  for (let i = 0; i < val.length + 1; i++) {
    if (val[0] == 0) val.splice(0, 1);

    let temp = [];
    if (val[0] > 0) {
      temp.push(val[0]);

      if (val[1]) {
        temp.push(val[1]);
        val.splice(0, 2);
      }
    }
    res.push(temp.join(""));
    if (val.length === 1 && val[0] != 0) res.push(val[0]);
  }
  return res;
};

const SplitByTwo2 = (value) => {
  return value.match(/(?!0+)[0-9]{1,2}/g);
}

console.log(SplitByTwo2("010203402010001"));

// splitBy("1") return [1]
// splitBy("012345") return [ '12', '34', '5' ]
// splitBy("0123450") return [ '12', '34', '50' ]
// splitBy("01203450") return [ '12', '34', '50' ]
