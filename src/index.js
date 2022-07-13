module.exports = function reverse(n) {
  let str = n + "";
  return Number(str.split("").reverse().join(""));
};
