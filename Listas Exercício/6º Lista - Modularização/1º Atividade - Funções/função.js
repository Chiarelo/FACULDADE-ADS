function soma(a, b){
    console.log(`A soma é ${a+b}`)
}

function soma2(a, b){
    return a+b
}

function soma3(){
    let a = parseInt(prompt("Informe o valor de A"))
    let b = parseInt(prompt("Informe valor de B"))
    return a + b
}

function principal(){
    soma(4, 8)
    console.log(`A soma é ${soma2(6, 9)}`)
    console.log(`A soma é ${soma3()}`)

}

// o melhor modelo é a segunda forma pelo modo que é impresso no console, onde é retornado apenas os valores

// existem duas formas de passar parâmetros: valores e referências

// valores: passa-se apenas o valor da variável

// referências: passa-se o endereço da variável

// valores: tipos primitivos (number, string, boolean)

// referências: objetos (array, objeto, function)

// qual efeito colateral disso?

// valores: não altera a variável original

// referências: altera a variável original

// exemplo de passagem de parâmetros por valor

let a = 5;

let b = a;

a = 10;

console.log(a,b);

// exemplo de passagem de parâmetros por referência

let c = [5,6,7];

let d = c;

c[0] = 10;

console.log(c,d);

// exemplo de passagem de parâmetros por referência

let e = {nome: "Maria", idade: 18};

let f = e;

e.nome = "João";

console.log(e,f);

// exemplo de passagem de parâmetros por referência

let g = function(){

    console.log("Olá");

}

let h = g;

g = function(){

    console.log("Tchau");

}

g();

h();

// qual é melhor?

// valores: melhor, pois não altera a variável original

// referências: pior, pois altera a variável original

// como resolver?

// valores: não precisa resolver

// referências: passar uma cópia da variável original

// como passar uma cópia?

// valores: não precisa

// referências: JSON.parse(JSON.stringify(variavel))

// exemplo de passagem de parâmetros por referência

let i = [5,6,7];

let j = JSON.parse(JSON.stringify(i));

i[0] = 10;

console.log(i,j);

