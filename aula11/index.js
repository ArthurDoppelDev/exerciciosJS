function criarObj(nome,forma,era,ano){
  return {
    nome: nome,
    forma: forma,
    era: era,
    ano: ano,
    //função dentro de um objeto (aka método)
    kick(nome){
      return `${nome}: Rider Kick!!!`
    }
  }
}

const rider1 = criarObj('Kamen rider Zero One','Rising Hopper','Reiwa',2019);
const rider2 = criarObj('Kamen rider Saber','Brave Dragon','Reiwa',2020);
const rider3 = criarObj('Kamen rider Revi','Rex Genome','Reiwa',2021);
const rider4 = criarObj('Kamen rider Geats','Magnum Boost','Reiwa',2022);
const rider5 = criarObj('Kamen rider Gotchard','Steamhopper','Reiwa',2023);
const rider6 = criarObj('Kamen rider Gavv','Poppingummy','Reiwa',2024);
