/* const lista = [1, 2, 3, 4, 5, 6, 7, 8];

for(num of lista){
  if(num%4===0){
    continue;
  }
  console.log(num);
} */

const users = ['Godai','Shoichi','Shinji','Takumi'];

let user = 'Shinji';

for(u of users){
  if(u===user){
    console.log(`Usuário ${u} encontrado!`);
    break;
  }
}