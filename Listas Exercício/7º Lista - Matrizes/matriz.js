function lerMatriz(Matriz) {
    for(let i = 0; i<3;i++){
        matriz[i] = []
        alert(`Informe os elementos da linha (${i+1}`)
        for(let j = 0; j<3;j++){
            Matriz[i][j] = Number(prompt("Digite o valor da posição ["+i+"]["+j+"]"));

        }
    }
}

function mostraMatriz(matriz){
    console.log(matriz)
}

function principal(){
    let matriz = []

    lerMatriz(matriz)
    mostraMatriz(matriz)

}
principal()