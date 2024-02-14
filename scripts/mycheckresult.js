function mycheck(result) {
    if (userResult.value == '' || isNaN(Number(userResult.value))) alert('введите число');
    else {
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
}