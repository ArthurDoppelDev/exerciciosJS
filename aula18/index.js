const data = new Date('2022-09-04');
const dia = data.getDay();

switch(dia){
  case 0:
    console.log(`É Domingo, dia de brilhar!`);
    break;
  case 1:
    console.log(`É Segunda, dia de brilhar!`);
    break;
  case 2:
    console.log(`É Terça, dia de brilhar!`);
    break;
  case 3:
    console.log(`É Quarta, dia de brilhar!`);
    break;
  case 4:
    console.log(`É Quinta, dia de brilhar!`);
    break;
  case 5:
    console.log(`É Sexta, dia de brilhar!`);
    break;
  case 6:
    console.log(`É Sábado, dia de brilhar!`);
    break;
  //equivalente ao else, default não precisa de break
  default:
    console.log(`eto...dia inválido, bleh :b`);
}