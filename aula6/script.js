const nome = prompt('Digite seu nome:')

document.getElementById("seuNome").innerText = `Seu nome é: ${nome}`;
document.getElementById("letras").innerText = `Seu nome tem ${nome.length} letras `;
document.getElementById("segLetra").innerText = `A segunda letra do seu nome é: ${nome.charAt(1)}`;
document.getElementById("primeiroR").innerText = `Qual o primeiro índice da letra R no seu nome? ${nome.indexOf("r")}`;
document.getElementById("ultimoR").innerText = `Qual o último índice da letra R no seu nome? ${nome.lastIndexOf("r")}`;
document.getElementById("ultimasLetras").innerText = `As últimas 3 letras do seu nome são: ${nome.slice(-3)}`;
document.getElementById("palavras").innerText = `As palavras do seu nome são: ${nome.split(' ')}`;
document.getElementById("maiusculo").innerText = `Seu nome com letras maiúsculas: ${nome.toUpperCase()}`;
document.getElementById("minusculo").innerText = `Seu nome com letras minúsculas: ${nome.toLowerCase()}`;
