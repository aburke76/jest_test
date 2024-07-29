function average(sum, total) {
    return sum / total;
}

function sum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        const num = array[i];
        sum += num;
    }
    return sum;
}

function min(array) {
    const sorted = array.sort();
    return sorted[0];
}

function max(array) {
    const sorted = array.sort();
    return sorted[array.length - 1];
}

function analyzeArray(array) {
    const arrayElements = array.forEach((el) => {
        if (typeof el != "number") {
            return false;
        }
    });

    const avg = average(sum(array), array.length);
    const smallest = min(array);
    const largest = max(array);
    const length = array.length;

    return {
        average: avg,
        min: smallest,
        max: largest,
        length: length,
    };
}
const array = [5, 3, 4];
console.log(analyzeArray(array));

module.exports = analyzeArray;
