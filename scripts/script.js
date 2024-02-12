
'use strict';
const razdeli = document.querySelector('.main');

const btnMinus10 = document.querySelector('.minus10');
const btnPlus20 = document.querySelector('.plus20noTransfer');


btnMinus10.addEventListener('click', foo);
btnPlus20.addEventListener('click', foo);

function foo(event) {
    console.log(event);
    console.log(event.target);
    console.log(event.target.className);
    let newtraining = document.createElement('div');
    razdeli.insertAdjacentHTML('afterend',
        `
    <div class="calc ">
        <p>тут напишем калькулятор про сложение</p>
        <button class="start" onclick=start()>start</button>
        <div class="first-number"></div>
        <div class="arifm-deystvie"> + </div>
        <div class="second-number"></div>
        <div class="user-input"><input id="plus10" class="userInput" type="text"></div>
        <button class="check">проверить</button>
        <button class="start" onclick=start()>еще</button>
        <div class="right-wrong">тут будет верно\не верно</div>
        <div class="statistic">твоя статистика
            <div class="right">правильно</div>
            <div class="right-value"></div>
            <div class="wrong">неправильно</div>
            <div class="wrong-value"></div>
        </div>
    `
    )
}
