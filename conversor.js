let button = document.getElementById("button");
let trocaBandeira = document.getElementById("tocaBandeira");

  

// O javascript pula a função, só a execulta quando ela é chamada
 async function convertValor(){

     let moedasTemporeal =  await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL").then(function(resposta){
      return resposta.json()
     });

     let dolar = moedasTemporeal.USDBRL.high ;
     let euro =  moedasTemporeal.EURBRL.high ;
     
     

     console.log(dolar);
     console.log(euro);


    let inputVreal = Number(document.getElementById("input").value); // value mostra apenas o valor que foi digitado.
    let valorDigitado = document.getElementById("valorDigitado");
    let resuladoDaConversao = document.getElementById("resulado-conversao");

    if (select1.value === "R$ Real Brasileiro" && select2.value === "R$ Real Brasileiro"){
        let valorReal = inputVreal;
        resuladoDaConversao.innerHTML = valorReal.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}); 
    }

    if (select1.value === "R$ Real Brasileiro" && select2.value === "US$ Dolar"){
         let valorDolar = inputVreal / dolar; 
        resuladoDaConversao.innerHTML = valorDolar.toLocaleString("en-US",{style: "currency", currency: "USD"});

    }

    if ( select1.value === "US$ Dolar" &&  select2.value === "R$ Real Brasileiro"){
        let valorReal = inputVreal * dolar ;
        resuladoDaConversao.innerHTML = valorReal.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}); 

    }

    if (select1.value === "Є Euro" && select2.value === "R$ Real Brasileiro"){
        let valorReal = inputVreal * euro ;
        resuladoDaConversao.innerHTML = valorReal.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

    }

    if (select1.value === "R$ Real Brasileiro" && select2.value === "Є Euro"){
        let valorEuro = inputVreal / euro;
        resuladoDaConversao.innerHTML = valorEuro.toLocaleString("de-DE",{style: "currency", currency: "EUR"});

    }

    if ( select1.value === "US$ Dolar" && select2.value === "Є Euro"){   // errinho na conversão
        let valorEuro =  (dolar * inputVreal) / euro ; 
        resuladoDaConversao.innerHTML = valorEuro.toLocaleString("de-DE",{style: "currency", currency: "EUR"});

    }

    if(select1.value === "Є Euro" &&  select2.value === "US$ Dolar" ){
        let valorDolar = (euro * inputVreal) / dolar ;
        resuladoDaConversao.innerHTML = valorDolar.toLocaleString("en-US",{style: "currency", currency: "USD"});
    }

   

   
  valorDigitado.innerHTML = inputVreal.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});  
  


}


function mudeMoeda1(){
    let textoMoeda1 = document.getElementById("textoMoeda1");
    let moedaBandeira1 = document.getElementById("moedaBandeia1");


if (select1.value === "R$ Real Brasileiro"){
        textoMoeda1.innerHTML = "Real Brasileiro";
        moedaBandeira1.src = "./imege/bandBrasil.jpg";    

} 

if (select1.value === "US$ Dolar"){
    textoMoeda1.innerHTML = "Dolar";
    moedaBandeira1.src = "./imege/bandEstadosUnidos.jpg";

}

if (select1.value === "Є Euro"){
    textoMoeda1.innerHTML = "Euro";
    moedaBandeira1.src = "./imege/bandEuro.png";
    
    }

   // convertValor()

}

function mudeMoeda2(){
    let textoMoeda2 = document.getElementById("textoMoeda2");
    let moedaBandeira2 = document.getElementById("moedaBandeira2");


if (select2.value === "R$ Real Brasileiro"){
        textoMoeda2.innerHTML = "Real Brasileiro";
        moedaBandeira2.src = "./imege/bandBrasil.jpg";    

} 

if (select2.value === "US$ Dolar"){
    textoMoeda2.innerHTML = "Dolar";
    moedaBandeira2.src = "./imege/bandEstadosUnidos.jpg";

}

if (select2.value === "Є Euro"){
    textoMoeda2.innerHTML = "Euro";
    moedaBandeira2.src = "./imege/bandEuro.png";
    
    }

   // convertValor()

}


button.addEventListener("click", convertValor);
select1.addEventListener("change", mudeMoeda1);
select2.addEventListener("change", mudeMoeda2);
