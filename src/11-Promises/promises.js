const axios = {
    _fake(url, data) {
        return new Promise((resolve) => {
            setTimeout(() => {
                let responseData = {
                    text: `${url} loves you`
                };
                if (url.indexOf('it-kamasutra') > 0) {
                    responseData = {
                        requestedCount: data.count,
                        message: 'we will prepare students for you'
                    }
                } else if (url.indexOf('google') > 0) {
                    responseData = {
                        vacancies: 12,
                    }
                } else if (url.indexOf('microsoft') > 0) {
                    responseData = {
                        vacancies: 21,
                    }
                }
                resolve({
                    request: {},
                    status: 200,
                    headers: {},
                    config: {},
                    data: responseData
                })
            }, randomIntFromInterval(1, 5) * 1000);
        });
    },
    
    post(url, data) {
        return this._fake(url, data);
    },
    
    get(url, data) {
        return this._fake(url, data);
    }
}

const findUserInDB = (id) => {
    const users = [
        {id: 1, name: "Dimych", friend: 3},
        {id: 2, name: "Sveta", friend: null},
        {id: 3, name: "Sveta", friend: 2}
    ]
    return new Promise((res, rej) => {
        setTimeout(() => {
            let user = users.find(u => u.id === id)
            if (user === null) {
                rej('user not found')
            } else {
                res(user)
            }
        }, randomIntFromInterval(500, 1000))
    })
}

function randomIntFromInterval(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
}

// Что такое promise, then, catch - основы
// //1. Длинный синтаксис
// const promise1 = axios.get("https://google.com")
// promise1.then((data) => {
//     console.log(data)
// })
// //1.1 Короткий синтаксис
// axios.get("https://google.com")
//     .then((data) => {
//         console.log(data)
//     })

// //2 Длинный синтаксис
// const promises2 = findUserInDB(1)
// promises2.then((user) => {
//     console.log(user)
// })
// console.log('finish')

// //2.1 Короткий синтаксис
// findUserInDB(1).then((user) => {
//     console.log(user)
// })

const promises2 = findUserInDB(2)
console.log(promises2)
promises2
    .then((user) => {
        console.log(promises2)
        // console.log(user)
    })
    .catch((error) => {
        console.warn(error)
    })
    .finally(() => {
        console.log('fininsh')
    })
// 32:02
console.log('!!!!')