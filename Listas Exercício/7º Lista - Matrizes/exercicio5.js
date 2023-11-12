const matriz = [];

for (let i = 0; i < 12; i++) {
    matriz[i] = [];
    for (let j = 0; j < 4; j++) {
        matriz[i][j] = Math.floor(Math.random() * 100) + 1;
    }
}

console.log(matriz);

const nomesDosMeses = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
];

function somaMeses(matriz) {
    let soma = 0;

    for (let i = 0; i < 12; i++) {
        for (let j = 0; j < 4; j++) {
            soma += matriz[i][j];
        }
        console.log(`Total vendido em ${nomesDosMeses[i]}: ${soma}`);
        soma = 0; // Reinicia a soma para o próximo mês
    }
}

function somaSemanas(matriz) {
    for (let i = 0; i < 4; i++) {
        let soma = 0;
        for (let j = 0; j < 12; j++) {
            soma += matriz[j][i];
        }
        console.log(`Total vendido na semana ${i + 1} durante todo o ano: ${soma}`);
    }
}

function totalVendidoNoAno(matriz) {
    let soma = 0;
    for (let i = 0; i < 12; i++) {
        for (let j = 0; j < 4; j++) {
            soma += matriz[i][j];
        }
    }
    console.log(`O total vendido pela loja no ano foi ${soma}`);
}

somaMeses(matriz);
somaSemanas(matriz);
totalVendidoNoAno(matriz);
