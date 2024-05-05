

test('', ()=> {
    let props = {
        name: "Dimych",
        age: 32,
        lessons: [{title: "1"}, {title: "2"}]
    }

    const age = props.age
    const lessons = props.lessons


    expect(age).toBe(32)
    expect(lessons.length).toBe(2)

})