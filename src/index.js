module.exports = function reverse(n) {
    let newNum = null;
    Math.sign(n) === -1 ? (newNum = n * -1) : (newNum = n);
    return Number(String(newNum).split("").reverse().join(""));
};
