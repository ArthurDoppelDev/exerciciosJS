
const milissegundos = 60 * 60 * 3 * 1000;
const dataValue = new Date(0 + milissegundos);
console.log(dataValue.toString());

//ano,mês(-1),dia,hora,minuto,segundo,milésimo
const data = new Date(2023,11,26,16,30,27,500);
console.log(data.toString());

//pega a data através de uma string
const dataString = new Date('2023-12-16 18:00:00.270');
console.log(dataString.toString());
