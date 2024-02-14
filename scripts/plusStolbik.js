'use strict'

//что-то про dom load надо написать


//получаем все элементы на странице
let first = document.querySelectorAll('.firstRazriad');
let second = document.querySelectorAll('.secondRazriad');
let userResult = document.querySelectorAll('.userInputStolbik');
let overInCalc = document.querySelectorAll('.over-calculations');
let checkBtn = document.querySelector('.check');
let startBtn = document.querySelectorAll('.start');
let statisticRight = document.querySelector('.right-value');
let statisticWrong = document.querySelector('.wrong-value');
console.log(startBtn);
const rightWrong = document.querySelector('.right-wrong');
// startBtn.addEventListener('click', start);
// checkBtn.addEventListener('click', check);

//сюда будем сохранять данные из старта, чтобы в check не собирать их потом по новой
let result = null;

//функция старт
function start() {
    if (statisticRight.innerHTML == "") statisticRight.innerHTML = '0';
    if (statisticWrong.innerHTML == "") statisticWrong.innerHTML = '0';
    rightWrong.innerHTML = "";
    // userResult.value = "";
    userResult.forEach((item) => item.value = '');
    overInCalc.forEach((item) => item.value = '');
    //рандомим слагаемые
    let max = 999;
    let min = 11;
    let firstValue = Math.floor(Math.random() * (max - min + 1) + min);
    // Максимум и минимум включаются

    let max2 = 999;
    let min2 = 11;
    let secondValue = Math.floor(Math.random() * (max2 - min2 + 1) + min2);

    // console.log(firstValue, "  ", secondValue);
    result = firstValue + secondValue;
    // console.log('1 = ', result);
    // console.log(first.length);
    for (let i = first.length - 1; i >= 0; i--) {
        first[i].innerHTML = firstValue % 10;
        firstValue = Math.floor(firstValue / 10);
    }
    for (let i = second.length - 1; i >= 0; i--) {
        second[i].innerHTML = secondValue % 10;
        secondValue = Math.floor(secondValue / 10);
    }


}


function mycheck(result) {
    //если не прошли валидацию - return
    if (!validate()) return;
    //если все хорошо, то собираем результат
    else {
        let userChoice = userResult[0].value;
        for (let i = 1; i < userResult.length; i++) {
            userChoice = userChoice + userResult[i].value;
        }
        // console.log(userChoice);
        if (userChoice == result) {
            rightWrong.innerHTML = 'Верно!';
            statisticRight.innerHTML = Number(statisticRight.innerHTML) + 1;
        }
        else {
            rightWrong.innerHTML = ':(((';
            statisticWrong.innerHTML = Number(statisticWrong.innerHTML) + 1;
        }
    }
}


function validate() {
    console.log(userResult[0].value);
    //если последней цифры нет - сразу разворачиваем
    if (userResult[userResult.length - 1].value == '') {
        alert('введите ответ');
        return false;
    }
    else {
        for (let i = 1; i < userResult.length; i++) {

            //поверка если есть предыдущее значение
            if (userResult[i - 1].value != '') {
                //а текущее изнан или пустое или больше 9'
                if ((isNaN(parseInt(userResult[i].value)) || userResult[i].value == '' || (parseInt(userResult[i].value) > 9))) {
                    console.log('есть предыдущее значение, текущее изнан или пустое или больше 9');
                    alert('введите корректные данные');
                    return false;
                }
            }
            //если предыдущего значения нет, 
            else if (userResult[i - 1].value == "") {
            }
            //а текущее изНан,но не пустое или больше 9
            if ((isNaN(parseInt(userResult[i].value)) & userResult[i].value != "") || parseInt(userResult[i].value) > 9) {
                console.log('предыдущего значения нет, а текущее изнан, но не пустое, или больше 9');
                alert('введите корректные даные');
                return false;
            }
        }
    } return true;
}