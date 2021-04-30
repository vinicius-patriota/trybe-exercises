//Usando o objeto abaixo, faça os exercícios

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

//Imprima no console uma mensagem de boas-vindas para a personagem 

console.log("Bem-vinda, " + info.personagem);
console.log('\n');

//Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console. 

info['recorrente'] = "Sim";

console.log(info);
console.log('\n');

//Faça um for/in que mostre todas as chaves do objeto

for (let key in info) {
    console.log(key);
};

console.log('\n');

//Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto. 

for (let key in info) {
    console.log(info[key]);
};

console.log('\n');

//Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves. 

let info2 = {
    personagem: "Tio Patinhas",
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: "O último MacPatinhas",
    recorrente: "Sim"
};

for (let key in info) {
    console.log(info[key] + " e " + info2[key]);
};

