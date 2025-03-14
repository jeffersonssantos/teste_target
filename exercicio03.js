//exercicio 03
function calcularFaturamento(faturamentoDiario) {
    
    if (faturamentoDiario.length === 0) {
        console.log("O vetor de faturamento está vazio.");
        return;
    }

    let menorFaturamento = Math.min(...faturamentoDiario);
    let maiorFaturamento = Math.max(...faturamentoDiario);

    let somaFaturamento = faturamentoDiario.reduce((acc, valor) => acc + valor, 0);
    let mediaMensal = somaFaturamento / faturamentoDiario.length;

    let diasAcimaDaMedia = faturamentoDiario.filter(valor => valor > mediaMensal).length;

    // Exibe os resultados
    console.log(`Menor faturamento: R$ ${menorFaturamento.toFixed(2)}`);
    console.log(`Maior faturamento: R$ ${maiorFaturamento.toFixed(2)}`);
    console.log(`Número de dias com faturamento acima da média: ${diasAcimaDaMedia}`);
}

const faturamentoDiario = [1500, 2000, 2500, 3000, 1800, 2200, 2700, 3200, 1500, 1600, 1900, 2100, 2400, 2800, 3000, 3500, 4000, 4500, 5000, 5500, 6000, 6500, 7000, 7500, 8000, 8500, 9000, 9500, 10000, 11000, 12000]; // Exemplo de faturamento diário
calcularFaturamento(faturamentoDiario);
