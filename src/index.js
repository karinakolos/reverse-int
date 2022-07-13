function reverse(n) {
  let str = n + "";
  return Number(str.split("").reverse().join(""));
}
console.log(reverse(1234));
