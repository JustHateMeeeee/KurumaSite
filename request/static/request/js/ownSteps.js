let workBull1 = false;
let workBull2 = false;
let workBull3 = false;
let workBull4 = false;
let workBull5 = false;
 // скрипт для выведения описание шагов работы
 let overlay = document.getElementById("overLay")
 let firstStep = document.getElementById("icon1")
 let firstOp = document.getElementById("firstOp")
 let secondStep = document.getElementById("icon2")
 let secondOp = document.getElementById("secondOp")
 let firdStep = document.getElementById("icon3")
 let firdOp = document.getElementById("firdOp")
 let fourStep = document.getElementById("icon4")
 let fourOp = document.getElementById("fourOp")
 let fiveStep = document.getElementById("icon5")
 let fiveOp = document.getElementById("fiveOp")
//все дейсвтия наведения на иконку 1
 firstStep.onclick = () => {
   workBull1 = !workBull1
   if(workBull1)
      firstOp.style.visibility = "visible"
   else
      firstOp.style.visibility = "hidden"

   overlay.style.display = "block"
   overlay.style.opacity = "0"
 }
 overlay.onclick = () => {
    firstOp.style.visibility = "hidden"
    secondOp.style.visibility = "hidden"
    firdOp.style.visibility = "hidden"
    fourOp.style.visibility = "hidden"
    fiveOp.style.visibility = "hidden"
    overlay.style.display = "none"
    popUp.style.display = "none";
    overlay.style.display = "none";
    InpName.value = "";
    InpNum.value = "";
    InpName.style.border = "2px solid black"
    InpNum.style.border = "2px solid black"
 }
 // действия для иконки 2
 secondStep.onclick = () => {
   workBull2 = !workBull2
   if(workBull2)
    secondOp.style.visibility = "visible"
   else
   secondOp.style.visibility = "hidden"

   overlay.style.display = "block"
   overlay.style.opacity = "0"
 }
 // действия для иконки 3
 firdStep.onclick = () => {
   workBull3 = !workBull3
   if(workBull3)
    firdOp.style.visibility = "visible"
   else
   firdOp.style.visibility = "hidden"

   overlay.style.display = "block"
   overlay.style.opacity = "0"
 }
 // действие для иконки 4
 fourStep.onclick = () => {
   workBull4 = !workBull4
   if(workBull4)
    fourOp.style.visibility = "visible"
   else
    fourOp.style.visibility = "hidden"

   overlay.style.display = "block"
   overlay.style.opacity = "0"
 }
 fiveStep.onclick = () => {
   workBull5 = !workBull5
   if(workBull5)
    fiveOp.style.visibility = "visible"
   else
   fiveOp.style.visibility = "hidden"

    overlay.style.display = "block"
    overlay.style.opacity = "0"
 }