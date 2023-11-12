function prova(){
    let vetor = []
    // entrada de dados
    for(let i=0;i<3;i++){
        let objeto = {
            nome: prompt("Informe o nome do computador"),
            estoque: Number(prompt("Informe o estoque do computador")),
            classificacao: prompt("Informe a classificao do computador").toUpperCase()
        }
        while (objeto.estoque < 0){
            objeto.estoque = Number(prompt("Informe estoque positivo do computador"))
        }
        while (objeto.classificacao != "GAMER" && objeto.classificacao != "NOTEBOOK" 
            && objeto.classificacao != "DESKTOP"){
                objeto.classificacao = prompt("Informe a classificao do computador corretamente").toUpperCase() 
        }   
        vetor.push(objeto) 
    }

    for(let i=0;i<4;i++){
        let objCompra = {
            nomeCompra: prompt(`Informe o nome do computador que deseja comprar`),
            qtdCompra: Number(prompt(`Informe a quantidade que deseja comprar`)),
            clasCompra: prompt(`Informe a classificação do computador que deseja comprar`).toUpperCase()
        }
        // verifica se o produto existe
        let achou = false
        for(let j=0;j<3;j++){ // para percorrer os vetores dos produtos
           if (objCompra.nomeCompra == vetor[j].nome && objCompra.clasCompra == vetor[j].classificacao){
                achou = true
                // verifica se tem estoque
                if (objCompra.qtdCompra <= vetor[j].estoque){
                    console.log(`Venda realizada com sucesso`)
                    vetor[j].estoque = vetor[j].estoque - objCompra.qtdCompra
                }
                else {
                    console.log(`Não tem estoque suficiente`)
                }
            }
        }
        if (!achou){
            console.log(`Produto não existe`)
        }
    }
    let maiorEstoque = 0
    let posicaoMaiorEstoque = 0
    let menorEstoque = Infinity
    let posicaoMenorEstoque = 0
    let achou = false
    for(let i=0;i<3;i++){
        if (vetor[i].classificacao == "NOTEBOOK"){
            achou = true
            if (vetor[i].estoque > maiorEstoque){
                maiorEstoque = vetor[i].estoque
                posicaoMaiorEstoque = i
            }
            if (vetor[i].estoque < menorEstoque){
                menorEstoque = vetor[i].estoque
                posicaoMenorEstoque = i
            }
        }
    }
    if (achou){
        console.log(vetor[posicaoMaiorEstoque].nome)
        console.log(vetor[posicaoMenorEstoque].nome)
    }
}

function bike(){
    let vetor = []
    for(let i =0;i<3;i++){
        let objeto = {
            marca: prompt("Informe a marca da bike"),
            modelo: prompt("Informe o modelo da bike"),
            quadro: parseInt(prompt("Informe o tamanho do quadro da bike")),
            aro: parseInt(prompt("Informe o tamanho do aro da bike")),
            ano: parseInt(prompt("Informe o ano da bike")),
            preco: parseFloat(prompt("Informe o preço da bike"))
        }
        vetor.push(objeto) 
        console.log('Bike inserida com sucesso')
    }
    // média de preço das bikes
    let soma = 0
    for(let i=0;i<3;i++){
        soma = soma + vetor[i].preco
    }   
    console.log(`Média de preço das bikes ${soma/vetor.length}`)
    // bike(s) mais antiga(s)
    let maisAntiga = []
    maisAntiga[0] = vetor[0] // atribui todo o objeto
    for(let i=1;i<3;i++){
        if (vetor[i].ano < maisAntiga[0].ano){
            maisAntiga = [] //   o vetor
            maisAntiga[0] = vetor[i]
        }
        else if (vetor[i].ano == maisAntiga[0].ano){
            maisAntiga.push(vetor[i]) // mais uma com o mesmo ano
        }
    }
    console.log(`Bike(s) mais antiga(s)`)
    console.log(maisAntiga)
    //bikes da marca Caloi
    let caloi = []
    for(let i=0;i<3;i++){
        if (vetor[i].marca == 'CALOI'){
            caloi.push(vetor[i])
        }
    }
    console.log(caloi)
}

function exemplo(){
    // variáveis simples
   // let nome = prompt("Informe o nome")
   // let estoque = prompt("Informe o estoque")
   // let classificacao = prompt("Informe a classificao")
    // objeto
    let objeto = {
        nome: prompt("Informe o nome"),
        estoque: Number(prompt("Informe o estoque")),
        classificacao: prompt("Informe a classificao")
    }
    console.log(objeto)
    console.log(objeto.nome)
    console.log(objeto.estoque)
    console.log(objeto.classificacao)

    // outra forma
    let objeto2 = new Object()
    objeto2.nome =  prompt("Informe o nome"),
    objeto2.estoque = Number(prompt("Informe o estoque")),
    objeto2.classificacao = prompt("Informe a classificao")

    
}