function caesarCipher(str, shift) {
    var output = "";
    for (var i = 0; i < str.length; i++) {
        var ascii = str[i].charCodeAt();
        if ((ascii >= 65 && ascii <= 90) || (ascii >= 97 && ascii <= 122)) {
            ascii += shift;
            if ((ascii > 90 && str[i] <= "Z") || ascii > 122) {
                ascii -= 26;
            }
        }
        output += String.fromCharCode(ascii);
    }
    return output;
}
module.exports = caesarCipher;
