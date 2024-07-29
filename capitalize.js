function capitalize(str) {
    const split = str.split("");
    const upperStr = [];
    split.forEach((el) => {
        const upperLetter = el.toUpperCase();
        upperStr.push(upperLetter);
        return upperStr;
    });
    return upperStr.join("");
}

module.exports = capitalize;
