//exercicio 02
function pertenceFibonacci(numero) {
    let a = 0; 
    let b = 1; 
    let fibonacci = [a, b]; 

    // Gera a sequência de Fibonacci até o número informado
    while (b <= numero) {
        let proximo = a + b; 
        fibonacci.push(proximo); 
        a = b; 
        b = proximo; 
    }

    // Verifica se o número pertence à sequência
    if (fibonacci.includes(numero)) {
        console.log(`O número ${numero} pertence à sequência de Fibonacci!`);
    } else {
        console.log(`O número ${numero} não pertence à sequência de Fibonacci!`);
    }
}

const numeroInformado = parseInt(prompt("Informe um número:"));
pertenceFibonacci(numeroInformado);