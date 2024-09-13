//Exemplo de try...catch
try{
  console.log(Nome);
}catch(err){
  console.log('Usuario não existe');
} 

//exemplo de throw
function somar(x,y){
  if(typeof x !== "number"||typeof y !== "number"){
    throw new Error('X e Y precisam ser números');
  }
  return x + y;
}

//vai mostrar a mensagem do throw no console
try{
  console.log(somar('a',12));
}catch(err){
  console.log(err) //<--Não recomendável
  console.log('Oopsie')//<--Mais profissional
}
