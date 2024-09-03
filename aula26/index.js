const nome = 'Godai Yusuke';

for(let i of nome){
  console.log(i)
}

const lista = ['Faiz','Kaixa','Delta'];

lista.forEach(function(valor,indice) {
  console.log(valor,indice)
});

/*
RESUMINDO
for - geralmente iteráveis (Arrays e Strings)
for in - Retorna índice/chave (Arrays e Objetos)
for of - Retorna o valor em si,somente iteráveis (Arrays e Strings)
*/