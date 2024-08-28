function scope() {
  const form = document.querySelector('.form');
  const resultado = document.querySelector('.resultado');
  const users = [];

  form.addEventListener(`submit`, formEvent);

  function formEvent(event){
    event.preventDefault();

    const nome = form.querySelector('.Nome');
    const sobrenome = form.querySelector('.Sobrenome');
    const peso = form.querySelector('.Peso');
    const idade = form.querySelector('.Idade');
    
    addObj(createObj(nome.value,sobrenome.value,peso.value,idade.value));

    resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${idade.value}</p>`
  }

  function createObj(nome,sobrenome,peso,idade){
    return{
      nome: nome,
      sobrenome: sobrenome,
      peso: peso,
      idade: idade
    }
  }

  function addObj(object){
    users.push = object;
    console.log(users);
  }
}
  
  

  


scope();