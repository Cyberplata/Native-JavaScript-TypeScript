// 1
// Варианты записи
let user1 = {
    name: "Dimych",
    age: 12,
    address: {
        city: {
            title: "Minsk"
        }
    }
}

let user2 = {
    "name": "Dimych",
    "age": 12,
    "address": {
        "city": {
            "title": "Minsk"
        }
    }
}

let title1 = user1.address.city.title;
let title2 = user2["address"]["city"]["title"];

console.log(title1) // "Minsk"
console.log(title2) // "Minsk"

// 2
// Создание св-в
let city = {};
city.title = "Minsk";
console.log(city); //{ title: 'Minsk' }

city["citizensCount"] = 100;
console.log(city); // { title: 'Minsk', citizensCount: 100 }

// 3
let users = ["Dimych", "Natasha", "Valera", "Katya"];
console.log(users["0"]) // Dimych
console.log(users["map"]) // [Function: map]
console.log(users["map"]((e) => e.toUpperCase()) ) // [ 'DIMYCH', 'NATASHA', 'VALERA', 'KATYA' ]

// 4
let usersObj = { //ass array
    '0': 'Dimych',
    '1': 'Natasha',
    '2': 'Valera',
    '3': 'Katya',
}

