const div = document.querySelector('.paragrafos');
const nodeList = document.querySelectorAll('p');

//pega os estilos aplicados no body
const bodyStyle = getComputedStyle(document.body);
//pega a cor de fundo(background-color) do body
const bodyBgColor = bodyStyle.backgroundColor;

console.log(bodyBgColor);

for(p of nodeList){
  p.style.backgroundColor =`${bodyBgColor}`
  p.style.color =`white`
}



