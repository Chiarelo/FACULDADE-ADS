const matriz = [];
for (let i = 0; i < 15; i++) {
  matriz[i] = [];
  for (let j = 0; j < 5; j++) {
    matriz[i][j] = Math.floor(Math.random() * 10) + 1;
  }
}

const nomes = [
  "Alice",
  "Bob",
  "Charlie",
  "David",
  "Eve",
  "Frank",
  "Grace",
  "Hannah",
  "Isaac",
  "Julia",
  "Kevin",
  "Linda",
  "Michael",
  "Nora",
  "Oliver",
];

for (let i = 0; i < 15; i++) {
  let soma = 0;
  for (let j = 0; j < 5; j++) {
    soma += matriz[i][j];
  }
  const media = soma / 5;
  let situacao = "";

  if (media >= 7) {
    situacao = "Aprovado";
  } else if (media >= 3) {
    situacao = "Exame";
  } else {
    situacao = "Reprovado";
  }

  console.log(
    `O aluno ${nomes[i]} teve média ${media.toFixed(2)} e sua situação é ${situacao}`
  );

    let somaMediaClasse = 0
    for(let i = 0; i<15;i++){
        somaMediaClasse += media
    }
    const mediaClasseT = somaMediaClasse/15
    console.log(`A média da classe é ${mediaClasseT.toFixed(2)}`)
}
