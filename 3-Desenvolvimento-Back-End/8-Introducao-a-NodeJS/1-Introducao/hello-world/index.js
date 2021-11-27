const readline = require('readline-sync');

const name = readline.question("Qual seu nome?");
const age = readline.questionInt("Qual sua idade?");

console.log(`Ola ${name}, voce tem ${age} mesmo? Parece mais velho.`);
