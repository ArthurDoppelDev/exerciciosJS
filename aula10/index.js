function kamenRider(nome){
  return `${nome}: Henshin!!!`
}

function riderKick() {
  console.log("Rider Kick!!!");
}

let henshin = kamenRider('Godai');

console.log(henshin);
riderKick();

//outras formar de declarar funções
const raiz = function(n){
  return Math.sqrt(n)
}; 

const potencia = n => n**2;