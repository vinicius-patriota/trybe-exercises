const encode = (mensagem) => {
    let transformacao = {
        a: 1, e: 2, i: 3, o: 4, u: 5,
    };
    let mensagemCodificada = '';

    for (let indiceMensagem in mensagem) {
        for (let chave in transformacao) {
            if (mensagem[indiceMensagem] === chave) {
                mensagemCodificada += transformacao[chave];
                break;
            }
        }
        if ((mensagemCodificada.length - 1) != indiceMensagem) {
            mensagemCodificada += mensagem[indiceMensagem];
        }
    }
    return mensagemCodificada;
}

const decode = (mensagemCodificada) => {
    let transformacao = {
        a: 1, e: 2, i: 3, o: 4, u: 5,
    };
    let mensagemDecodificada = '';

    for (let indiceMensagem in mensagemCodificada) {
        for (let chave in transformacao) {
            if (mensagemCodificada[indiceMensagem] == transformacao[chave]) {
                mensagemDecodificada += chave;
                break;
            }
        }
        if ((mensagemDecodificada.length - 1) != indiceMensagem) {
            mensagemDecodificada += mensagemCodificada[indiceMensagem];
        }
    }

    return mensagemDecodificada;
}

module.exports = {
    encode,
    decode,
}