// Faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n.

const n = 5;
let largura = "";

for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < n; j += 1) {
        largura += "*";
    };
    console.log(largura);
    largura = "";
};