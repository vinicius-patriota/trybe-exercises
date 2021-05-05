function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

/* 1 - O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.

 * Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>

 * Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>

 * Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li>
*/

function createDaysOfTheMonth() {
  const daysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < daysList.length; index += 1) {
    const days = daysList[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;
    dayListItem.classList.add("day");
    dayListItem.style.color = "rgb(119,119,119)";
    if (dayListItem.innerText == 24 || dayListItem.innerText == 25 || dayListItem.innerText == 31) {
      dayListItem.classList.add("holiday");
    }
    if (dayListItem.innerText == 4 || dayListItem.innerText == 11 || dayListItem.innerText == 18 || dayListItem.innerText == 25) {
      dayListItem.classList.add("friday");
    }
    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheMonth();

/* 2 -  Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".

 * Adicione a este botão a ID "btn-holiday" .

 * Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .
*/

let strFeriados = "Feriados";

function buttonFeriados(str) {
  let btn = document.createElement("button");
  btn.innerText = str;
  btn.id = "btn-holiday";

  document.querySelector(".buttons-container").appendChild(btn);
}

buttonFeriados(strFeriados);

/* 3 -  Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .

  * É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .
*/

let flagHoliday = true;
function clickButtonFeriados() {
  let btn = document.querySelector("#btn-holiday");
  btn.addEventListener("click", () => {
    for (let i = 0; i < document.querySelectorAll(".holiday").length; i += 1) {
      if (flagHoliday) {
        document.querySelectorAll(".holiday")[i].style.background = "red";
      }
      else {
        document.querySelectorAll(".holiday")[i].style.backgroundColor = "#eeeeee";
      }
    }
    flagHoliday = !flagHoliday;
  })
}

clickButtonFeriados();

/* 4 - Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".

  * Adicione a este botão o ID "btn-friday" .
  * Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .
*/

let strSexta = "Sexta-Feira";

function buttonSext(str) {
  let btn = document.createElement("button");
  btn.innerText = str;
  btn.id = "btn-friday";

  document.querySelector(".buttons-container").appendChild(btn);
}

buttonSext(strSexta);

/* 5 - Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
    É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.
*/

let flagFriday = true;
function clickButtonFriday() {
  let btn = document.querySelector("#btn-friday");
  btn.addEventListener("click", () => {
    for (let i = 0; i < document.querySelectorAll(".friday").length; i += 1) {
      if (flagFriday) {
        document.querySelectorAll(".friday")[i].style.background = "cyan";
      }
      else {
        document.querySelectorAll(".friday")[i].style.backgroundColor = "#eeeeee";
      }
    }
    flagFriday = !flagFriday;
  })
}

clickButtonFriday()

/* 6 - Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
*/

function zoomMouseOver() {
  const weekDaysList = document.querySelectorAll('.day');

  for (let i = 0; i < weekDaysList.length; i += 1) {
    weekDaysList[i].addEventListener("mouseover", () => {
      weekDaysList[i].style.fontSize = "30px";
    })
  }
}

zoomMouseOver()

function zoomMouseOut() {
  const weekDaysList = document.querySelectorAll('.day');

  for (let i = 0; i < weekDaysList.length; i += 1) {
    weekDaysList[i].addEventListener("mouseout", () => {
      weekDaysList[i].style.fontSize = "20px";
    })
  }
}

zoomMouseOut()

/* 7 - Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.

  * O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .
*/

let strTask = "cozinhar";
function personalizedTask(str) {
  let span = document.createElement("span");
  span.innerText = str;
  document.querySelector(".my-tasks").append(span);
}

personalizedTask(strTask);

/* 8 - Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task .

  * O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
  * O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .
*/

let strCor = "orange";
function legendaCor(str) {
  let div = document.createElement("div");
  div.classList.add("task");
  div.style.backgroundColor = str;
  document.querySelector(".my-tasks").appendChild(div);
}

legendaCor(strCor);

/* 9 - Implemente uma função que adiciona um evento que ao clicar no elemento com a tag <div> referente a cor da sua tarefa, atribua a este elemento a classe task selected , ou seja, quando sua tarefa possuir a classe task selected ela estará selecionada.

  * Ao clicar novamente no elemento a sua classe deverá voltar a ser somente task , ou seja, esta tarefa está deixando de ser uma tarefa selecionada.
*/

let flagTask = true;
function clickTaskSelect() {
  const tasks = document.querySelectorAll(".task");

  for (let i = 0; i < tasks.length; i += 1) {
    tasks[i].addEventListener("click", () => {
      if (flagTask) {
        tasks[i].classList.add("select");
      }
      else {
        tasks[i].classList.remove("select");
      }
      flagTask = !flagTask;
    })
  }
}

clickTaskSelect();

/* 10 - Implemente uma função que adiciona um evento que ao clicar em um dia do mês no calendário, atribua a este dia a cor da legenda da sua tarefa selecionada.

  * Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119) .
*/

let flagDay = true;
function addDayTask() {
  const weekDaysList = document.querySelectorAll('.day');

  for (let i = 0; i < weekDaysList.length; i += 1) {
    weekDaysList[i].addEventListener("click", () => {
      if (document.querySelector(".select") && document.querySelector(".select").style.backgroundColor != weekDaysList[i].style.color) {
        weekDaysList[i].style.color = document.querySelector(".select").style.backgroundColor;
      }
      else {
        weekDaysList[i].style.color = "rgb(119,119,119)";
      }
    })
  }
}

addDayTask();

