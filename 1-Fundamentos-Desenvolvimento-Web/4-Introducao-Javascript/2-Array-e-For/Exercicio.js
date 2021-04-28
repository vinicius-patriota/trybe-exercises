let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Exercicio 1
for (let i of numbers) {
    console.log(i);
};
console.log('\n');

// Exercicio 2
let sum = 0;

for (let i = 0; i < numbers.length; i += 1) {
    sum += numbers[i];
};

console.log(sum);
console.log('\n');

// Exercicio 3
let mean = sum / numbers.length;
console.log(mean);
console.log('\n');

// Exercicio 4
if (mean > 20) {
    console.log("valor maior que 20");
}
else if (mean <= 20) {
    console.log("valor menor ou igual a 20");
}
else {
    console.log("erro");
};

console.log('\n');

// Exercicio 5
let biggest = 0;
for (let i of numbers) {
    if (i > biggest) {
        biggest = i;
    };
};

console.log(biggest);
console.log('\n');

// Exercicio 6
let impares = 0;
for (let i of numbers) {
    if (i % 2 === 1) {
        impares += 1;
    };
};

if (impares === 0) {
    console.log("nenhum valor ímpar encontrado");
}
else {
    console.log(impares);
};

console.log('\n');

// Exercicio 7
let smallest = biggest;

for (let i of numbers) {
    if (smallest > i) {
        smallest = i;
    };
};

console.log(smallest);
console.log('\n');

// Exercicio 8
let arr = [];

for (let i = 1; i <= 25; i += 1) {
    arr.push(i);
};

for (let i of arr) {
    console.log(i);
};

console.log('\n');

// Exercicio 9
for (let i of arr) {
    console.log(i / 2);
};