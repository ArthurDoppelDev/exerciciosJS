//Exemplo try,catch,finally
try{
  console.log(b)
  console.log('lalalala');
} catch(err){
  console.log('oopsie');
} finally{
  console.log('Eu vou ser excutado de qlqr jeito :D');
}

function retornarDia(data){
  if(!(data instanceof Date)){
    throw new TypeError('data tem que ser do tipo Date')
  }

  return `Hoje é dia ${data.getDate()}`;
}

let data = new Date;

try{
  console.log(retornarDia(data));
}catch(err){
  console.log('erro ao gerar dia');
} 

