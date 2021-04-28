let salarioBruto = 3000;
let salarioINSS;
let salarioIR;
let INSS;
let IR;

if (salarioBruto <= 1556.94) {
    INSS = salarioBruto * 0.08;
}
else if (salarioBruto <= 2594.92) {
    INSS = salarioBruto * 0.09;
}
else if (salarioBruto <= 5189.82) {
    INSS = salarioBruto * 0.11;
}
else {
    INSS = 570.88;
}

salarioINSS = salarioBruto - INSS;

if (salarioINSS <= 1903.98) {
    IR = 0;
}
else if (salarioINSS <= 2826.65) {
    IR = (salarioINSS * 0.075) - 142.80;
}
else if (salarioINSS <= 3751.05) {
    IR = (salarioINSS * 0.15) - 354.80;
}
else if (salarioINSS <= 4664.68) {
    IR = (salarioINSS * 0.225) - 636.13;
}
else {
    IR = (salarioINSS * 0.275) - 869.36;
};

salarioIR = salarioINSS - IR;

console.log(salarioBruto);
console.log(salarioINSS);
console.log(salarioIR);