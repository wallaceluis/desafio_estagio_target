function fibonacci(number){
    let a = 0;
    let b = 1;

    while (b < number) {
        const cache = b;
        b = a + b;
        a = cache;
    }
    return b === number? `O número ${number} pertence a sequência de Fibonacci` : `O número ${number} não pertence a sequência de Fibonacci`;
}

const numeroInformado = parseInt(prompt('Digite um número'));
console.log(fibonacci(numeroInformado));