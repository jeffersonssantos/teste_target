//exercicio 06
function inverterString(str) {
    let stringInvertida = "";

    
    for (let i = str.length - 1; i >= 0; i--) {
        stringInvertida += str[i]; 
    }

    return stringInvertida;
}

const stringOriginal = "Olá, me chamo Jefferson Silva dos Santos!"; 
const stringInvertida = inverterString(stringOriginal);

console.log(`String original: ${stringOriginal}`);
console.log(`String invertida: ${stringInvertida}`);