//Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for. 

function verificaPalindrome (str) {
    let aux = "";

    for (let i = (str.length - 1); i >= 0; i -= 1) {
        aux += str[i];
    };

    if (aux === str) {
        return true;
    }
    else {
        return false;
    };
};

//Crie uma função que receba um array de inteiros e retorne o índice do maior valor. 

let arr = [2, 3, 6, 7, 10, 1];

function maiorValor (arr) {
    let maior = 0;

    for (let i of arr) {
        if (i > maior) {
            maior = i;
        };
    };

    return maior;
};

//Crie uma função que receba um array de inteiros e retorne o índice do menor valor. 

function menorValor (arr) {
    let menor = maiorValor(arr);

    for (let i of arr) {
        if (i < menor) {
            menor = i;
        };
    };

    return menor;
};

//Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres. 

let arrNomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];


function maiorPalavra (arr) {
    let maior = arr[0];

    for (let i of arr) {
        if (maior.length < i.length) {
            maior = i;
        };
    };

    return maior;
};

//Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete. 

let arrInt = [2, 3, 2, 5, 8, 2, 3];

function repeteInt (arr) {
    let repete = 0;
    let index = 0;
    let maiorRepeticao = 0;
    let indexMaiorRepeticao = 0;

    for (let i in arr) {
        index = i;

        for(let j in arr) {
            if (arr[i] === arr[j]) {
                repete += 1;
            };
        };

        if (repete > maiorRepeticao) {
            maiorRepeticao = repete;
            indexMaiorRepeticao = index;
        };

        repete = 0;
    };

    return arr[indexMaiorRepeticao];
};

//Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N. 

let n = 5;

function somatorio (int) {
    let soma = 0;

    for (let i = 0; i <= int; i += 1) {
        soma += i;
    };

    return soma;
};

//Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.

let word = "trybe";
let ending = "be";

function isEnding (word, ending) {
    let status = false;
    let end = "";

    for (let i = (word.length - ending.length); i < word.length; i += 1) {
        end += word[i];
    };

    if (end === ending) {
        status = true;
    };

    return status;
};