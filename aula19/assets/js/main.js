function Scope(){
  const data = new Date();
  
  const diaDaSemana = getWeekDay(data.getDay());
  const dia = data.getDate();
  const mes = getMonth(data.getMonth());
  const ano = data.getFullYear();
  const hora = data.getHours();
  const minutos = zeroAEsquerda(data.getMinutes());

  sendMessage(diaDaSemana,dia,mes,ano,hora,minutos);
 
  function sendMessage(diaDaSemana,dia,mes,ano,hora,minutos){
    document.querySelector('.mensagem').innerText = `${diaDaSemana}, ${dia} de ${mes} de ${ano}\n${hora}:${minutos}`
  }

  function getWeekDay(diaDaSemana){
    switch(diaDaSemana){
      case 0:
        return 'domingo';
      case 1:
        return 'segunda-feira';
      case 2:
        return 'terça-feira';
      case 3:
        return 'quarta-feira';
      case 4:
        return 'quinta-feira';
      case 5:
        return 'sexta-feira';
      case 6:
        return 'sábado';
    }
  }

  function getMonth(mes){
    const meses = ['janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro']
    return meses[mes];
  }

  function zeroAEsquerda(minutos){
    return minutos >= 10 ? minutos :`0${minutos}`;
  }
}


Scope();