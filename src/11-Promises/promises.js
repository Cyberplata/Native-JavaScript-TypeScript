const axios = {
    request: {},
    status: 200,
    headers: {},
    config: {},
    data: {
        vacancies: 12,
    },
    get() {
        console.log("google!!!")
    }
}

const findUserInDB = (id) => {
    // const obj = {
    //     [id]: {id: 1, name: "Dimych"},
    //     [id]: {id: 2, name: "Sveta"},
    // }
    // return obj

    return [
        {[id]: 1, name: "Dimych"},
        {[id]: 2, name: "Sveta"},
    ]
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
promises2
    .then((user) => {
        console.log(user)
        console.log('fininsh')
    })
    .catch((error) => {
        console.warn(error)
        console.log('fininsh')
    })
// 32:02