module.exports = function reverse(n) {
  if (n > 0) {
    let str = n + "";
    return Number(str.split("").reverse().join(""));
  } else {
    let str = n + "";
    let numb = Number(str.split("").shift().reverse().join(""));
    return "-" + numb;
  }
};
