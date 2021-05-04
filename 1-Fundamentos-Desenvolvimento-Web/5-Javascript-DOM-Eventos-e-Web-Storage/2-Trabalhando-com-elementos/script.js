//1 - Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body

let h1 = document.createElement("h1");
h1.innerText = "Exercício 5.2 - JavaScript DOM";
document.querySelector("body").appendChild(h1);

//2 - Adicione a tag div com a classe main-content como filho da tag body

let divMain = document.createElement("div");
divMain.className = "main-content";
document.querySelector("body").appendChild(divMain);

//3 - Adicione a tag div com a classe center-content como filho da tag div criada no passo 2;

let divCenter = document.createElement("div");
divCenter.className = "center-content";
document.querySelector(".main-content").appendChild(divCenter);

//4 - Adicione a tag p como filho do div criado no passo 3 e coloque algum texto;

let p = document.createElement("p");
p.innerText = "algum texto";
document.querySelector(".center-content").appendChild(p);

//5 - Adicione a tag div com a classe left-content como filho da tag div criada no passo 2;

let divLeft = document.createElement("div");
divLeft.className = "left-content";
document.querySelector(".main-content").appendChild(divLeft);

//6 - Adicione a tag div com a classe right-content como filho da tag div criada no passo 2;

let divRight = document.createElement("div");
divRight.className = "right-content";
document.querySelector(".main-content").appendChild(divRight);

//7 - Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do div criado no passo 5;

let img = document.createElement("img");
img.src = "https://picsum.photos/200";
img.className = "small-image";
document.querySelector(".left-content").appendChild(img);

//8 - Adicione uma lista não ordenada com os valores de 1 a 10 por extenso como valores da lista. Essa lista deve ser filha do div criado no passo 6;

let ul = document.createElement("ul");
for (let index = 0; index < 10; index += 1) {
    let item = document.createElement("li");
    item.innerText = index + 1;

    ul.appendChild(item);
}
document.querySelector(".right-content").appendChild(ul);

//9 - Adicione 3 tags h3 , todas sendo filhas do div criado no passo 2. 

let h31 = document.createElement("h3");
h31.innerText = "primeiro-h3";
document.querySelector(".main-content").appendChild(h31);
let h32 = document.createElement("h3");
h32.innerText = "segundo-h3";
document.querySelector(".main-content").appendChild(h32);
let h33 = document.createElement("h3");
h33.innerText = "terceiro-h3";
document.querySelector(".main-content").appendChild(h33);