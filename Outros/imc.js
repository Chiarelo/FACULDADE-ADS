function calcular(){
    var altura = (document.getElementById("altura").value)/100
    var peso = document.getElementById("peso").value
    var imc= peso/(altura**2);
    var text = ""
    
    if (imc >= 0 && imc<18.5){
        text=(`Seu IMC está muito baixo ${imc}`)
    } 
    else if(imc<24.9) {
        text=(`Seu IMC está normal ${imc}`)
    }
    else if (imc<29.9){
        text=(`Você esta com sobrepeso ${imc}`)
    }
    else if (imc<39.9){
        text=(`Você esta com obesidade ${imc}`)
    } 
    else if (imc>40){
        text=(`Você está com obesidade mórbida ${imc}`)
    }
    document.getElementById("texto").innerText = (text)
}