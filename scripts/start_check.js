// function startTest(max, min, max2, min2) {
//     let first = document.querySelector('.first-number');

//     let second = document.querySelector('.second-number');
//     let userResult = document.getElementById('user-result');
//     let checkBtn = document.querySelector('.check');
//     let startBtn = document.querySelectorAll('.start');
//     let statisticRight = document.querySelector('.right-value');
//     let statisticWrong = document.querySelector('.wrong-value');
//     console.log(startBtn);
//     const rightWrong = document.querySelector('.right-wrong');
//     // startBtn.addEventListener('click', start);//функция привязана к кнопке в html
//     checkBtn.addEventListener('click', checkTest);

//     if (statisticRight.innerHTML == "") statisticRight.innerHTML = '0';
//     if (statisticWrong.innerHTML == "") statisticWrong.innerHTML = '0';
//     rightWrong.innerHTML = "";
//     userResult.value = "";
//     //рандомим слагаемые
//     let firstValue = Math.floor(Math.random() * (max - min + 1) + min); // Максимум и минимум включаются

//     let secondValue = Math.floor(Math.random() * (max2 - min2 + 1) + min2);
//     first.innerHTML = firstValue;
//     second.innerHTML = secondValue;
// }

// function checkTest() {
//     let result = Number(first.innerHTML) + Number(second.innerHTML);
//     console.log('result = ', result);
//     // console.log(userResult)
//     let userChoice = userResult.value;
//     console.log('userchoice= ', userChoice);
//     if (userChoice == result) {
//         rightWrong.innerHTML = 'Верно!';
//         statisticRight.innerHTML = Number(statisticRight.innerHTML) + 1;
//     }
//     else {
//         rightWrong.innerHTML = ':(((';
//         statisticWrong.innerHTML = Number(statisticWrong.innerHTML) + 1;
//     }
// }