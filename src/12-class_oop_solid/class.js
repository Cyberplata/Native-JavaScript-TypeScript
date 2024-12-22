//  ----I----
// 1. Функция конструктор запускается, когда мы пишем new.
// 2. class это инструкция, с помощью которой мы можем создавать однотипные объекты.
// 3. Обращаемся с помощью оператора new и создаются новые объекты.
// 4. С помощью класса можно реализовать принципы ООП (инкапсуляция, наследование, полиморфизм).
// Инкапсуляция - это способность объекта скрывать свои данные от внешнего мира и предоставлять методы для работы с ними.
// Наследование - это способность объекта наследовать свойства и методы другого объекта.
// Полиморфизм - это способность объекта вести себя по-разному в зависимости от контекста.
// 5. Внутри класса можно создавать методы.
// 6. Внутри класса можно создавать приватные свойства.
// 7. Внутри класса можно создавать статические свойства.
// 8. Внутри класса можно создавать геттеры и сеттеры. Они позволяют получить доступ к приватным свойствам.
// Так же можно создавать геттеры и сеттеры для статических свойств.


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
    _name = "";

    constructor(name, site, dob) {
        this._name = name;
        this.site = site;
        this.dateOfBirth = dob;
        this.counter = 0;
        // this.value = 'Platon';
    }

    get name() { // через метод get мы можем получить приватное свойство
        return this._name + '!!!!'
    }

    set name(value) { // через метод set мы можем изменить приватное свойство
        // if (value === 'Igor') throw new Error('Igor is not allowed name')
        this._name = value
    }

    hello() {
        debugger
        this.counter++;
        console.log(`I am ${this._name} from ${this.site}`)
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
// u1.setName('Igor')
// console.log(u1.getName()) // Igor

u1.name = 'Igor'
// console.log(u1.name) // Igor!!!!
let users = [u1, u2]

// users.forEach(u => u.hello())
// I am Igor!!!! from it-incubator.by
// I am Artem!!!! from it-incubator.by


//  ----III----
// Наследование
class Coder extends User { // наследуемся от User
    constructor(name, site, dob, tech) {
        super(name, site, dob); // вызываем конструктор родителя
        this.tech = tech; // добавляем свойство
    }

    code() {
        console.log(`I am ${this._name}, here is my ${this.tech} code: const sum = (a, b) => a + b`)
    }

    hello() {
        super.hello(); // вызываем метод родителя
        // console.log("Go away") // добавляем свой функционал
        console.log("Go away " + this._name) // Go away Dimych!!!!
        // console.log("Go away " + this.#name) // Private field '#name' must be declared in an enclosing class
    }
}

//  ----IV----
class Hacker extends Coder {
    constructor(a,b,c,d) {
        super();
        this.tech = 'XXX'
        this._name = 'XXXX'
    }
    code() {
        console.log("I'll hack everything")
    }
}

// const coder1 = new Coder('Dimych', 'it-incubator.by', new Date(1988, 1, 2), 'c#')
// coder1.code() // I am Dimych!!!!, here is my c# code: const sum = (a, b) => a + b
// coder1.hello() // I am Dimych!!!! from it-incubator.by
// coder1.hello() // Go away

const hacker = new Hacker('Dimych', 'it-incubator.by', new Date(1988, 1, 2), 'c#')
// hacker.code() // I'll hack everything
hacker.hello()
// I am XXXX from undefined
// Go away XXXX
