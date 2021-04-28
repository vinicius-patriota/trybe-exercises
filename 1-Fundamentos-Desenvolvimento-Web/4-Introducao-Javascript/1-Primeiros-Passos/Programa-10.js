let custo = 40;
let valorVenda = 60;

let lucro = (valorVenda) - (custo * 1.2);

if (custo >= 0 && valorVenda >= 0) {
    console.log(lucro * 1000);
}
else {
    console.log("Mensagem de erro encerrando o prograna.");
};