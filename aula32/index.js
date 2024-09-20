//setInterval e setTimeout

function mostraHora(){
  let data = new Date();
  let hora = data.toLocaleTimeString('pt-BR',{hour12: false});

  console.log(hora);
}

//apenas passar a ref. da função, ou seja, não usar ()
const timer = setInterval(mostraHora,1000);

setTimeout(function (){ 
  //para o setInterval em timer
  clearInterval(timer); 
  console.log(`TimeOut!`);
},10000);