const num = Number(prompt("Digite um número"));

document.getElementById("titulo").innerText = `Seu número é ${num}`;

document.getElementById("raiz").innerText = `Raiz quadrada: ${Math.sqrt(num)}`;
document.getElementById("inteiro").innerText = `Seu número é inteiro? ${Number.isInteger(num)}`;
document.getElementById("NaN").innerText = `Seu número é inválido (NaN)? ${Number.isNaN(num)}`;
document.getElementById("floor").innerText = `Seu número arredondado para baixo: ${Math.floor(num)}`;
document.getElementById("ceil").innerText = `Seu número arredondado para cima: ${Math.ceil(num)}`;
document.getElementById("decimais").innerText = `Seu número com duas casas decimais: ${num.toFixed(2)}`;