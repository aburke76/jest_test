function reverseStr(str) {
    const split = str.split("");
    split.reverse();
    return split.join("");
}

module.exports = reverseStr;
