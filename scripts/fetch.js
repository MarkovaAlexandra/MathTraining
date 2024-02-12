let fetchData = (url) => {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then((responce) => responce.json())
            .then((data) => resolve(data))
            .catch((error) => reject(`error: ${error}`));
    });
};
//'https://www.boredapi.com/api/activity'

fetchData('https://www.boredapi.com/api/activity')
    .then((data) => console.log(data))
    .catch((error) => console.log(`ошибка загрузки данных: ${error}`));