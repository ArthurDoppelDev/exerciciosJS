function formataData(data){
  const dia = data.getDate();
  const mes = data.getMonth() + 1;
  const ano = data.getFullYear();
  const hora = data.getHours();
  const minutos = data.getMinutes();
  console.log(`${dia}/${mes}/${ano} ${hora}:${minutos}`);
}

const data = new Date();
formataData(data);