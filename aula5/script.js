let varA = 'A'; //A = B, B = C e C = A
let varB = 'B';
let varC = 'C';
let varX;

varX = varA // X=A

varA = varB //B=B e A=B
varB = varC //B=C e C=C
varC = varX // C=A e X=A


console.log(varA, varB, varC)