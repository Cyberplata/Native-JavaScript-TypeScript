function icreaseAge(u: UserType) {
    u.age = u.age + 1;
}

type UserType = {
    name: string
    age: number
}

test('reference type test', () => {

    let user = {
        name: 'Dimych',
        age: 32
    }
    icreaseAge(user)

    expect(user.age).toBe(33)

    const superman = user
    superman.age = 1000
    expect(user.age).toBe(1000)
})

test('array test', () => {

    let user = {
        name: 'Dimych',
        age: 32
    }
    icreaseAge(user)

    expect(user.age).toBe(33)

    const superman = user
    superman.age = 1000
    expect(user.age).toBe(1000)
})