const nomes = ['Godai','Hayato','Kazami','Yuki','Keisuke'];

//altera um elemento num Array
nomes[0] = 'Hongo';

//adiciona um elemento num Array no indice especificado 
nomes[5] = 'Amazon';

//adiciona um elemento no final do Array
nomes.push('Shigeru');

//coloca elemento no indice zero e puxa os outros pra frente
nomes.unshift('Taki');

//remove item no inicio do Array
nomes.shift();

//remove item no fim do Array 
nomes.pop();

//corta um array entre dois indices definidos ( sinais negativos funcionam como indices inversos)
nomes.slice(0,4);

console.log(nomes);

//retorna um Boolean verdadeiro caso a var sea do tipo especificado
console.log(nomes instanceof Array);