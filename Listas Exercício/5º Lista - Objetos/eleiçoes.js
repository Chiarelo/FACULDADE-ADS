function eleicao() {
  let partidos;
  for (let i = 0; i < 5; i++) {
    let objeto = {
      //cria objeto
      codigo: parseInt(prompt("Informe o codigo do partido")),
      nome: prompt("Informe o nome do partido"),
      sigla: prompt("Informe a sigla do partido"),
      presidente: prompt("Informe o presidente do partido"),
      qtde: parseInt(prompt("Informe o numero de candidatos")),
    };

    //Verifica se o codigo já existe
    while (partidos.some((item) => item.codigo == objeto.codigo)) {
      objeto.codigo = parseInt(
        prompt("Codigo já existente. Informe outro codigo")
      );
    }
    partidos.push(objeto); //Insere objeto no vetor }
  }
  let politicos = [] //Cadastrar os politicos

  for(let i = 0;i<5;i++){
    let objeto = {
     codPartido:  parseInt(prompt('Informe o codigo do partido do candidato')),
     nome: prompt('Inoforme o nome do politico'),
     qtde: 0,
     cargo: prompt('Informe o cargo do candidato')
    }
    
    while(!partidos.some(( item) => item.codigo == objeto.codPartido)){
        objeto.codPartido = parseInt(prompt('Partido não existe. Informe novamente o codigo'))
    }
    while(politicos.some((item) => item.nome == objeto.nome)){
        objeto.nome = prompt('Nome já existente. Informe outro nome')
    }
    politicos.push(objeto)
    alert("Politico cadastrado com sucesso")
    
  }
  //Realizar 10 votos 
  for(let i = 0;i<10;i++){
    let votacao = {
        partido: parseFloat(prompt('Informe codigo do partido')),
        candidato: prompt('Informe o nome do candidato')

    }
    let posicao = politicos.findIndex((item) >= item.codPartido == votacao.partido && item.nome == votacao.candidato)
    if(posicao != -1){
        politicos[posicao].qtde ++
        alert('Voto realizado com sucesso')
    }
    else{
        alert('Partido ou candidato inexistente')
    }

    //Candidato com mais votos 
    let maior = politicos[0].qtde
    for(let i = 1; i<politicos.length;i++){
        if(politicos[i].qtde > maior.qtde){
            maior = politicos[i]
        }
    }
    console.log(maior)
    

  }
}
