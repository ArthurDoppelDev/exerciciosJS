function randomNum(min,max){
  let num = Math.random() * (max - min) + min;
  return Math.floor(num);
}

let random = randomNum(1,30);

console.log(`Lets go gambling!!:D`);

/* while(random != 20){
  random = randomNum(1,30);
  console.log(`Oh dang it!`);
} */

do{
  random = randomNum(1,30);
  console.log(`Oh dang it!`);
}while(random != 20)
