const paragrafo = document.querySelector('.container');

const elementos = [
  {tag:`p`, texto:'ready to go'},
  {tag:`div`, texto:'count zero'},
  {tag:`footer`, texto:'Kamen Rider'},
  {tag:`section`, texto:'Agito'}
]

const objetos = [obj1, obj2, obj3, obj4] = elementos;

for(let i = 0; i <= 3;i++){
  const {tag,texto} = objetos[i];
  renderText(tag,texto);
}

function renderText(tag,texto){
  paragrafo.innerHTML += `<${tag}>${texto}</${tag}>`;
}