/**
 * Escreva uma função que recebe um numero e retorne:
 * num é divisivel por 3 = Fizz
 * num é divisivel por 5 = Buzz
 * numero é divisível por 3 e 5 = FizzBuzz
 * numero não é divisivel nem por 3 nem por 5 = retorna o proprio número
 * checar se o numero é um numero
 * Use a função com numeros de 0 a 100
 */

function eDivisivel(num){
  if(typeof num !== typeof 1) return num;
  if(num%3==0 && num%5==0) return 'FizzBuzz';
  if(num%3==0)return 'Fizz';
  if(num%5==0)return 'Buzz';
  else return num;
}

console.log('a',eDivisivel('a'));
for(let i = 0;i <= 100;i++){
  console.log(i,eDivisivel(i));
}


