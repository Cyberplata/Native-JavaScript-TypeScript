// export let user = {
//     name: "Dimych",
//     age: 12,
//     address: {
//         city: {
//             title: "Minsk"
//         }
//     }
// }


// export const usersArray = [ 'Dimych', 'Natasha', 'Valera', 'Katya' ];

export const usersObj = {
    '0': 'Dimych',
    '1': 'Natasha',
    '2': 'Valera',
    '3': 'Katya',
}

type UsersType = {
    [key: string]: {id: number, name: string}
}

export const users: UsersType = {
    '101': {id: 101, name: 'Dimych'},
    '3232312': {id: 3232312, name: 'Natasha'},
    '1212': {id: 1212, name: 'Valera'},
    '1': {id: 1, name: 'Katya'},
}
// users[1] //O(1)

let user = {id: 100500, name: 'Igor'};
users[user.id] = user; // Добавления пользователя моментально быстро и просто
delete users[user.id]
users[user.id].name = 'Vitya'

let a = {a: 1, b: 2, c: 3}
delete a // false
delete a.a // a = {b: 2, c: 3}
delete a.c // a = {b: 2}


export const usersArray = [
    {id: 101, name: 'Dimych'},
    {id: 3232312, name: 'Natasha'},
    {id: 1212, name: 'Valera'},
    {id: 1, name: 'Katya'},
]
usersArray.find(u => u.id === 1) // O(N)
// usersArray.findIndex()
// usersArray.push(user); // Добавления пользователя мутирующий метод
// let usersCopy = [...usersArray.filter(), user] // Добавления пользователя иммутабельно
// let usersArray = usersArray.filter(u => u.id !== user.id)