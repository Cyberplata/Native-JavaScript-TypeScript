//  ----I----
// 1. Функция конструктор запускается, когда мы пишем new.
// 2. class это инструкция, с помощью которой мы можем создавать однотипные объекты.
// 3. Обращаемся с помощью оператора new и создаются новые объекты.

// class DeleteUserAction {
//     constructor() {
//
//     }
// }
//
// const action1 = new DeleteUserAction(121212)
// const action2 = new DeleteUserAction(333)
// // console.log(action1)
// // console.log(action2)


//  ----II----
class User {
    #name = "";

    constructor(name, site, dob) {
        this.#name = name;
        this.site = site;
        this.dateOfBirth = dob;
        this.counter = 0;
        // this.value = 'Platon';
    }

    getName() { // через метод get получаем доступ к приватным полям
        return this.#name
    }
    setName(value) { // через метод set мы намерено можем переопределить приватное свойство
        if (value === 'Igor') throw new Error('Igor is not allowed name')
        this.#name = value
    }

    hello() {
        debugger
        this.counter++;
        console.log(`I am ${this.name} from ${this.site}`)
    }
}

const u1 = new User('Dimych', 'it-incubator.by', new Date(1988, 1, 2))
const u2 = new User('Artem', 'it-incubator.by', new Date(1989, 10, 12))

// u1.hello(); //I am Dimych from it-incubator.by
// u2.hello(); //I am Artem from it-incubator.by

// console.log(u1.hello === u1.hello) // true
// console.log(u1.hello === User.prototype.hello) // true

// console.log(u1._name) // Dimych позволяет вывести псевдоприватное свойство
// console.log(u1.#name) // SyntaxError: Private field '#name' must be declared in an enclosing class

// console.log(u1.getName()) // Dimych
u1.setName('Igor')
console.log(u1.getName()) // Igor