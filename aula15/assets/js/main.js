function myScope(){
  const form = document.querySelector('.form');
  const resultado = document.querySelector('.paragrafo-resultado');
  

  form.addEventListener('submit',giveAlert);

  function giveAlert(event){
    event.preventDefault();

    const peso = form.querySelector('#input-peso');
    const altura = form.querySelector('#input-altura');

    const resultadoIMC = calcularIMC(Number(peso.value),Number(altura.value));
    const categoria = categorizarIMC(resultadoIMC);

    const inputPeso = Number(peso.value);
    const inputAltura = Number(altura.value);

    if(!inputPeso){
      setResultado(`Peso inválido`,false);
      return; 
    }else if(!inputAltura){
      setResultado(`Altura inválida`,false);
      return; 
    }else{
      setResultado(`Seu IMC é ${resultadoIMC} ${categoria}`,true);
      return; 
    }
  }

  function calcularIMC(peso,altura){
    const IMC = peso / altura**2;
    if(IMC != NaN && IMC >0){
      return IMC.toFixed(1);
    }else{
      return null;
    }
  }

  function categorizarIMC(IMC){

    if(IMC>0 && IMC<18.5){
      return 'Abaixo do peso';
    }else if(IMC>=18.5 && IMC<24.9){
      return 'Peso normal';
    }else if(IMC>=24.9 && IMC<=29.9){
      return 'Sobrepeso';
    }else if(IMC>=30 && IMC<=34.9){
      return 'Obesidade grau 1';
    }else if(IMC>=35 && IMC<=39.9){
      return 'Obesidade grau 2';
    }else if(IMC>40){
      return 'Obesidade grau 3';
    }else{
      return null;
    }
  }

  function setResultado(msg, valid){
    resultado.innerHTML = msg;

    if(valid){
      resultado.style = `
      background-color: rgb(110, 192, 110);
      color: white;
      border-radius: 12px;
      padding: 4px;
      font-weight: bold;`;
    }else{
      resultado.style = `
      background-color: rgb(249, 71, 71);
      color: white;
      border-radius: 12px;
      padding: 4px;
      font-weight: bold;`;
    }
    
  }
}

myScope();
