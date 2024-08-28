const nome = 'Godai Yusuke';
const rider = 'Kamen Rider Kuuga';
const idade = 49;
const peso = 99;
const alturaEmM = 2.00;

let IMC = peso / alturaEmM^2;
let anoDeNascimento = 2024 - idade;

console.log(`${nome} é o ${rider}, ele tem ${idade} anos, pesa ${peso}kg`);
console.log(`tem ${alturaEmM}m de altura e seu IMC é ${IMC}`);
console.log(`${nome} nasceu em ${anoDeNascimento}`)