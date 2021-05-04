//1 - Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body
//    Adicione a classe title na tag h1 criada; 

let h1 = document.createElement("h1");
h1.className = "title";
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
//    Adicione a classe description nas 3 tags h3 criadas.

let firstH3 = document.createElement("h3");
firstH3.className = "description";
firstH3.innerText = "primeiro-h3";
document.querySelector(".main-content").appendChild(firstH3);
let secondH3 = document.createElement("h3");
secondH3.className = "description";
secondH3.innerText = "segundo-h3";
document.querySelector(".main-content").appendChild(secondH3);
let thirdH3 = document.createElement("h3");
thirdH3.className = "description";
thirdH3.innerText = "terceiro-h3";
document.querySelector(".main-content").appendChild(thirdH3);

//    Remova o div criado no passo 5 (aquele que possui a classe left-content ). Utilize a função .removeChild() 

document.querySelector(".main-content").removeChild(document.querySelector(".left-content"));

//    Centralize o div criado no passo 6 (aquele que possui a classe right-content ). Dica: para centralizar, basta configurar o margin-right: auto do div 

document.querySelector(".right-content").style.marginRight = "auto";

//    Troque a cor de fundo do elemento pai da div criada no passo 3 (aquela que possui a classe center-content ) para a cor verde;

document.querySelector(".center-content").style.background = "green";

//    Remova os dois últimos elementos ( nove e dez ) da lista criada no passo 8

document.querySelector("ul").removeChild(document.querySelector("ul").lastChild.previousSibling);
document.querySelector("ul").removeChild(document.querySelector("ul").lastChild);
