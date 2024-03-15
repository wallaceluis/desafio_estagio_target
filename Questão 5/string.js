function inverterString(str) {
    let stringInvertida = '';
    for (let i = str.length - 1; i >= 0; i--) {
        stringInvertida += str[i];
    }
    return stringInvertida;
}
const userString = prompt('')
const stringInvertida = inverterString(userString);
console.log(stringInvertida);