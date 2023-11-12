let matriz = []
    for(let i = 0; i<6;i++){
        matriz[i] = []
        for(let j = 0; j<3;j++){
            matriz[i][j] = Math.floor(Math.random() *30) +1
        }
    }
//Achar o maior elemento da matriz e sua respectiva posição

let maior = matriz[0][0]
let linha = 0
let coluna = 0

for(let i = 0; i<6;i++){
    for(let j = 0; j<3;j++){
        if(matriz[i][j]>maior){
            maior = matriz[i][j]
            linha = i
            coluna = j
        }
    }
}
console.log(`O maior elemento da matriz é ${maior} e sua posição é [${linha}][${coluna}]`)

//Achar o menor elemento da matriz e sua respectiva posição

let menor = matriz[0][0]
let linhaMenor = 0
let colunaMenor = 0

for(let i=0;i<6;i++){
    for(let j=0;j<3;j++){
        if(matriz[i][j]<menor){
            menor = matriz[i][j]
            linhaMenor = i
            colunaMenor = j
        }
    }
}

console.log(`O menor elemento da matriz é ${menor} e sua posição é [${linhaMenor}][${colunaMenor}]`)


