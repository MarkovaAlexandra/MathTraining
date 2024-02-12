'use strict'

//что-то про dom load надо написать


//получаем все элементы на странице
let first = document.querySelector('.first-number');

let second = document.querySelector('.second-number');
let userResult = document.getElementById('plus10');
let checkBtn = document.querySelector('.check');
let startBtn = document.querySelectorAll('.start');
let statisticRight = document.querySelector('.right-value');
let statisticWrong = document.querySelector('.wrong-value');
console.log(startBtn);
const rightWrong = document.querySelector('.right-wrong');
// startBtn.addEventListener('click', start);
checkBtn.addEventListener('click', check);


//функция старт
function start() {
    if (statisticRight.innerHTML == "") statisticRight.innerHTML = '0';
    if (statisticWrong.innerHTML == "") statisticWrong.innerHTML = '0';
    rightWrong.innerHTML = "";
    userResult.value = "";
    //рандомим слагаемые
    let firstValue = Math.floor(Math.random() * 9) + 1;
    let secondValue = Math.floor(Math.random() * (10 - firstValue)) + 1;
    first.innerHTML = firstValue;
    second.innerHTML = secondValue;
}

function check() {
    let result = Number(first.innerHTML) + Number(second.innerHTML);
    // console.log(result);
    // console.log(userResult)
    let userChoice = userResult.value;
    console.log(userChoice);
    if (userChoice == result) {
        rightWrong.innerHTML = 'Верно!';
        statisticRight.innerHTML = Number(statisticRight.innerHTML) + 1;
    }
    else {
        rightWrong.innerHTML = ':(((';
        statisticWrong.innerHTML = Number(statisticWrong.innerHTML) + 1;
    }
}