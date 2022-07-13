module.exports = function reverse(n) {
  if (n >= 0) {
    let str = n + "";
    return Number(str.split("").reverse().join(""));
  } else {
    let numb = n * -1;
    return "-" + Number(numb.split("").shift().reverse().join(""));
  }
};
