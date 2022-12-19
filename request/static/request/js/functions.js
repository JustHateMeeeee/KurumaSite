//переменные
let popUp = document.getElementById("popUp")
let popupClose = document.querySelector(".close")
let overlay = document.getElementById("overLay")
let InpName = document.getElementById("InpName")
let InpNum = document.getElementById("InpNum")

/*Функция открытия модального окна*/
function openP() {
    popUp.style.display = "block";
    overLay.style.opacity = ".7";
    overlay.style.display = "block";
}

/*Функция закрытия без отправки данных*/
function closeNo() {
    popUp.style.display = "none";
    overlay.style.display = "none";
    InpName.value = "";
    InpNum.value = "";
    InpName.style.border = "2px solid black"
    InpNum.style.border = "2px solid black"
}

/*Функция закрытия при нажатии на пустую область*/
// см. ниже
/*Функция закрытия и получения данных*/
function closeYes() {
    if ( InpName.value == "" && !( InpNum.value == "")) {
        InpName.style.border = "2px solid red";
        alert('Введите ФИО')
    }
    if ( InpNum.value == "" && !( InpName.value == "")) {
        InpNum.style.border = "2px solid red";
        alert('Введите контактные данные')
    }
    if (InpName.value == "" && InpNum.value == "" ) {
        InpName.style.border = "2px solid red";
        InpNum.style.border = "2px solid red";
        alert('Введите данные');
    }
    if ( !(InpName.value == "") && !( InpNum.value == "") ) {
    popUp.style.display = "none";
    overlay.style.display = "none";
    InpName.value = "";
    InpNum.value = "";
    }
}

/*изменение рамки input*/
 InpName.onclick = () => {
    InpName.style.border = "2px solid black"
 }
 InpNum.onclick = () => {
    InpNum.style.border = "2px solid black"
 }