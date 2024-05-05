import {ManType} from "./destructuring";

let props: ManType;
beforeEach(() => {
    props = {
        name: "Dimych",
        age: 32,
        lessons: [{title: "1", name: 'css'}, {title: "2", name: 'html'}, {title: "3", name: 'react'}],
        address: {
            street: {
                title: "Nezavisimosti street"
            }
        }
    }
})


test('', () => {

    // const age = props.age
    // const lessons = props.lessons
    const {age, lessons} = props // то же самое, что написано сверху
    const {title} = props.address.street

    expect(age).toBe(32)
    expect(lessons.length).toBe(3)

    expect(title).toBe("Nezavisimosti street")
})

test('', () => {
    const l1 = props.lessons[0];
    const l2 = props.lessons[1];

    const [, ls2, ...restLessons] = props.lessons;

    expect(l1.title).toBe('1');
    expect(l2.title).toBe('2');

    expect(ls2.title).toBe('2');

    expect(restLessons.length).toBe(1);
    expect(restLessons[0].title).toBe('3');
    expect(restLessons[0].name).toBe('react');

    expect(restLessons[0]).toStrictEqual({ name: 'react', title: "3"});
})