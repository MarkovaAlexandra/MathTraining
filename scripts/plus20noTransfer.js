'use strict'

//что-то про dom load надо написать


//получаем все элементы на странице
let first = document.querySelector('.first-number');
let second = document.querySelector('.second-number');
let userResult = document.getElementById('user-result');
let checkBtn = document.querySelector('.check');
let startBtn = document.querySelectorAll('.start');
let statisticRight = document.querySelector('.right-value');
let statisticWrong = document.querySelector('.wrong-value');
console.log(startBtn);
const rightWrong = document.querySelector('.right-wrong');
// startBtn.addEventListener('click', start);
// checkBtn.addEventListener('click', check);
let result = undefined;

//функция старт
function start() {
    if (statisticRight.innerHTML == "") statisticRight.innerHTML = '0';
    if (statisticWrong.innerHTML == "") statisticWrong.innerHTML = '0';
    rightWrong.innerHTML = "";
    userResult.value = "";
    //рандомим слагаемые
    let max = 18;
    let min = 11;
    let firstValue = Math.floor(Math.random() * (max - min + 1) + min); // Максимум и минимум включаются
    let max2 = 19 - firstValue;
    let min2 = 1;
    let secondValue = Math.floor(Math.random() * (max2 - min2 + 1) + min2);
    first.innerHTML = firstValue;
    second.innerHTML = secondValue;
    result = firstValue + secondValue;
}


// function mycheck(result) {

//     let userChoice = userResult.value;
//     console.log(userChoice);
//     if (userChoice == result) {
//         rightWrong.innerHTML = 'Верно!';
//         statisticRight.innerHTML = Number(statisticRight.innerHTML) + 1;
//     }
//     else {
//         rightWrong.innerHTML = ':(((';
//         statisticWrong.innerHTML = Number(statisticWrong.innerHTML) + 1;
//     }
// }