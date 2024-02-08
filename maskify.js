// return masked string
function maskify(cc) {
  const num = cc.split("");
  if (num.length > 4) {
    for (let i = 0; i <= num.length - 5; i++) {
      num[i] = "#";
    }
    return num.join("");
  } else return cc;
}

console.log(maskify("4556364607935616")); // '############5616'
console.log(maskify("1")); // '1'
console.log(maskify("11111")); //'#1111'
