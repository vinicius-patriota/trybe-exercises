// Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com

const id = (nome) => ({ nomeCompleto: nome, email: `${nome.replace(/\s+/g, '_')}@trybe.com` });

const newEmployees = (id) => {
    const employees = {
        id1: id('Pedro Guerra'),
        id2: id('Luiza Drumond'),
        id3: id('Carla Paiva'),
    }
    return employees;
};

console.log(newEmployees(id));

// Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou")

const sorteio = (apostado, gerado) => {
    if (apostado === gerado) return 'Parabéns você ganhou';
    return 'Tente novamente';
}

const resultadoSorteio = (aposta, sorteio) => {
    const numeroGerado = Math.ceil(Math.random() * 5);
    console.log(numeroGerado);
    return sorteio(aposta, numeroGerado);
}

// Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.

const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const verificador = (corretas, estudante) => {
    let pontuacao = 0;
    for (index in corretas) {
        if (corretas[index] === estudante[index]) pontuacao += 1;
    }
    return pontuacao;
}

const avaliar = (corretas, estudante, verificador) => verificador(corretas, estudante);

console.log(avaliar(rightAnswers, studentAnswers, verificador));