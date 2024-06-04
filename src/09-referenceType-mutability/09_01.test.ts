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
    let user = {
        name: 'Dimych',
        age: 32,
        address: {
            title: 'Minsk'
        }
    }

    let addr = user.address

    let user2: UserType = {
        name: "Natasha",
        age: 30,
        address: user.address
    }

    user2.address.title = 'Kanary';

    expect(user.address).toBe(user2.address)
    expect(user.address.title).toBe('Kanary')
})

