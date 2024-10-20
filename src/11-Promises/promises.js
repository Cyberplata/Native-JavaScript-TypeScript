const axios = {
    get() {
        console.log("google!!!")
    }
}

const findUserInDB = (id) => {

}

//1
const promise1 = axios.get("https://google.com")
promise1.then((data) => {
    console.log(data)
})
//1.1
axios.get("https://google.com")
    .then((data) => {
        console.log(data)
    })

//2
const promises2 = findUserInDB(1)
promises2.then((user) => {
    console.log(user)
})
console.log('finish')

//2.1
findUserInDB(1).then((user) => {
    console.log(user)
})
