const num = 16;

const resto = num % 2;

if(resto > 0){
  console.log(`${num} é um número impar`);
}
else if(resto == 0) {
  console.log(`${num} é um número par`);
}
else{
  console.log(`valor nulo`);
}
  