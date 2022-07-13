module.exports = function reverse(n) {
    if (n >= 0) {
        let str = n.toString().split("").reverse().join("");
        return Number(str);
    } else {
        let numb = n * -1;
        let numbNew = numb.toString().split("").reverse().join("");
        return Number(numbNew);
    }
};
