//num2 copiou o valor de num1
let num1 = 4;
let num2 = num1;

//num2 continua como 4 msm com o valor de num1 sendo alterado
num1 = 8;

//agora tanto a var lista1 qnt a var lista2 se conectam ao msm array
//valores de referência são como hyperlinks para um array/objeto/função no código
let lista1 = ['Kuuga','Agito','Ryuki','Faiz','Blade'];
let lista2 = lista1

console.log(num1,num2)