//Atribuição por desestruturação em Objetos
const pessoa = {
  nome:"Inui",
  sobrenome:"Takumi",
  idade: 18,
  rider:{
    nome: 'Faiz',
    serie:'Kamen Rider 555'
  }
}

const {nome: protag,sobrenome,idade, rider: {nome: nomeRider,serie}} = pessoa;
console.log(protag,sobrenome,idade,nomeRider,serie); 

