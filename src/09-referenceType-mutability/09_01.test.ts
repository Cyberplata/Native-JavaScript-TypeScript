function icreaseAge(u: UserType) {
    u.age = u.age + 1;
}

type UserType = {
    name: string
    age: number
    address: {title: string}
}

test('reference type test', () => {

    let user = {
        name: 'Dimych',
        age: 32,
        address: {
            title: 'Minsk'
        }
    }
    icreaseAge(user)

    expect(user.age).toBe(33)

    const superman = user
    superman.age = 1000
    expect(user.age).toBe(1000)
})

test('array test', () => {
    let users = [
        {
            name: 'Dimych',
            age: 32
        },
        {
            name: 'Dimych',
            age: 32
        }
    ]
    const admins = users
    admins.push({name: 'Bandyugan', age: 10})

    expect(users[2]).toEqual({name: 'Bandyugan', age: 10})
})

test('value type test', () => {
    let usersCount = 100;
    let adminsCount = usersCount
    adminsCount++;

    expect(users[2]).toEqual({name: 'Bandyugan', age: 10})
})

test('reference type test objects', () => {
    const address = {
        title: 'Minsk'
    }

    let user = {
        name: 'Dimych',
        age: 32,
        address: address

    }

    // let addr = user.address

    let user2: UserType = {
        name: "Natasha",
        age: 30,
        address: address
    }

    address.title = 'Minsk city';

    expect(user.address).toBe(user2.address)
    expect(user.address.title).toBe('Minsk city')
})

test('reference type array test', () => {
    const address = {
        title: 'Minsk'
    }
    let user = {
        name: 'Dimych',
        age: 32,
        address: address

    }
    let user2: UserType = {
        name: "Natasha",
        age: 30,
        address: address
    }

    const users = [ user, user2, { name: 'Misha', age: 18, address: address}]
    const admins = [user, user2]
    admins[0].name = 'Dmitry'

    expect(users[0].name).toBe('Dmitry')
    expect(user.name).toBe('Dmitry')
})

test('sort array test', () => {
    const letters = ['c', 'd', 'a', 'z', 'e']

    passportist(letters);
    // letters.sort();

    expect(letters).toEqual(['a', 'c', 'd', 'e', 'z'])
})

function passportist(letters: any){
    letters.sort();
    console.log(letters);
}
