function changeBackgroundColor() {
    let input = document.querySelector("#backgroundColor");
    let btn = document.querySelector("#btn-backgroundColor");

    btn.addEventListener("click", () => {
        document.body.style.backgroundColor = input.value;
        localStorage.setItem('backgroundColor', input.value);
    })
}

changeBackgroundColor();

function changeTextColor() {
    let input = document.querySelector("#textColor");
    let btn = document.querySelector("#btn-textColor");

    btn.addEventListener("click", () => {
        document.body.style.color = input.value;
        localStorage.setItem('textColor', input.value)
    })
}

changeTextColor();

function changeFontSize() {
    let input = document.querySelector("#fontSize");
    let btn = document.querySelector("#btn-fontSize");

    btn.addEventListener("click", () => {
        document.body.style.fontSize = input.value;
        localStorage.setItem('fontSize', input.value)
    })
}

changeFontSize();

function changeLineHeight() {
    let input = document.querySelector("#lineHeight");
    let btn = document.querySelector("#btn-lineHeight");

    btn.addEventListener("click", () => {
        document.body.style.lineHeight = input.value;
        localStorage.setItem('lineHeight', input.value)
    })
}

changeLineHeight();

function changeFontFamily() {
    let input = document.querySelector("#fontFamily");
    let btn = document.querySelector("#btn-fontFamily");

    btn.addEventListener("click", () => {
        document.body.style.fontFamily = input.value;
        localStorage.setItem('fontFamily', input.value)
    })
}

changeFontFamily();

function restore() {
    document.body.style.backgroundColor = localStorage.getItem('backgroundColor');
    document.body.style.color = localStorage.getItem('textColor');
    document.body.style.fontSize = localStorage.getItem('fontSize');
    document.body.style.fontHeight = localStorage.getItem('fontHeight');
    document.body.style.fontFamily = localStorage.getItem('fontFamily');
}

restore()