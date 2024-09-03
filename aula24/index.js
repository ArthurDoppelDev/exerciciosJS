//Exemplos de métodos DOM

//seleciona a div 'container' no HTML
const div = document.querySelector('.container');

//cria uma tag <p> e um nó de caracteres "Olá Mundo"
const tag = document.createElement(`p`);
const text = document.createTextNode(`Olá Mundo!`);

//incorpora o texto pra dentro da tag <p>
tag.appendChild(text);

//incorpora <p>Olá Mundo</p> para a div 'container'
div.appendChild(tag);