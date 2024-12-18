// Вынесли функцию наверх
function commonHello() {
    console.log(`I am ${this.name} from ${this.site}`)
}

const userFabric = (name) => {
    const user = {
        name: name,
        site: 'it-incubator.by',
        dateOfBirth: new Date(1988, 1, 2),
        hello: commonHello
        // hello() {
        //     console.log(`I am ${this.name} from ${this.site}`)
        // }
    }
    return user;
}

const u1 = userFabric("Dimych")
const u2 = userFabric("Artem")

// console.log(u1)
// console.log(u2)
//{
//   name: 'Dimych',
//   site: 'it-incubator.by',
//   dateOfBirth: 1988-02-01T21:00:00.000Z,
//   hello: [Function: hello]
// }
// {
//   name: 'Artem',
//   site: 'it-incubator.by',
//   dateOfBirth: 1988-02-01T21:00:00.000Z,
//   hello: [Function: hello]
// }
// То есть когда вызвали userFabric мы создали 2 объекта: сам user и внутри функцию и она тоже объект.

u1.hello() // I am Dimych from it-incubator.by
