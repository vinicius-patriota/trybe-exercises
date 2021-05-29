//  Modifique a estrutura da função para que ela seja uma arrow function .
//  Modifique as concatenações para template literals . 

const testingScope = escopo => {
    if (escopo === true) {
        let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
        ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
        console.log(ifScope);
    } else {
        let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
        console.log(elseScope);
    }
}

testingScope(true);

//  Utilize template literals para que a chamada console.log(oddsAndEvens); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!". 

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

oddsAndEvens.sort((a, b) => a - b);

console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`);

//  Crie uma função que receba um número e retorne seu fatorial. 

let n = 5;

const fatorial = n => (n > 1) ? n *= fatorial(n - 1) : n;

console.log(fatorial(n));

//  Crie uma função que receba uma frase e retorne qual a maior palavra. 

let str = "Tryber x aqui! Minhas cinco principais habilidades são:";

const longestWord = str => {
    let arr = str.split(' ');
    let maior = "";
    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i].length > maior.length) {
            maior = arr[i];
        }
    }
    return maior;
}

console.log(longestWord(str));

//  Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string

const replaceWord = (str, word) => {
    let arr = str.split(' ');
    for (let i in arr) {
        if (arr[i] === 'x') arr[i] = word;
    }
    return arr.join(' ');
}

console.log(replaceWord(str, "Bini"));

//  Escreva uma função que vai receber a string retornada da Função 1 como parâmetro. Essa função deve concatenar as skills do array global à string que foi passada para a Função 2 via parâmetro. Você deve ordenar os skills em ordem alfabética. Sua função deve retornar essa nova string

let skills = ['html', 'css', 'git', 'javascript', 'english'];

const presentation = str => `${str} ${(skills.sort()).join(' ')}`;

console.log(presentation(replaceWord(str, "Bini")));