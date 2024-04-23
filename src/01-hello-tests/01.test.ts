import {division, exponentiation, mult, splitIntoWords, subtraction, sum} from "./01";

//data
// let a = 1;
// let b = 2;
// let c = 3;
let a: number;
let b: number;
let c: number;

beforeEach( () => { // Перед каждым
    a = 1;
    b = 2;
    c = 3;
})

test('sum should be correct', () => {
    //action
    const result1 = sum(a, b);
    a = 100;
    const result2 = sum(a, b);

    //expect result
    expect(result1).toBe(3);
    expect(result2).toBe(102);
})

test('multiply should be correct', () => {
    //action
    const result1 = mult(a, b);
    const result2 = mult(b, c);

    //expect result
    expect(result1).toBe(2);
    expect(result2).toBe(6);
})

test('subtraction should be correct', () => {
    //action
    const result1 = subtraction(a, b, c);
    const result2 = subtraction(b, c, a);

    //expect result
    expect(result1).toBe(-4);
    expect(result2).toBe(-2);
})

test('division should be correct', () => {
    //action
    const result1 = division(a, b);
    b = 300;
    const result2 = division(b, c);

    //expect result
    expect(result1).toBe(0.5);
    expect(result2).toBe(100);
})

test('exponentiation should be correct', () => {
    //action
    a = 10;
    const result1 = exponentiation(a, b);
    const result2 = exponentiation(b, c);

    //expect result
    expect(result1).toBe(100);
    expect(result2).toBe(8);
})


test('splitting into words should be correct', () => {
    //date
    const sent1 = "Hello my friend!"
    const sent2 = "JS - the best programming  language."

    //action
    const result1 = splitIntoWords(sent1);
    const result2 = splitIntoWords(sent2);

    //expect result
    expect(result1.length).toBe(3);
    expect(result1[0]).toBe("hello");
    expect(result1[1]).toBe("my");
    expect(result1[2]).toBe("friend");

    expect(result2.length).toBe(5);
    expect(result2[0]).toBe("js");
    expect(result2[1]).toBe("the");
    expect(result2[2]).toBe("best");
    expect(result2[3]).toBe("programming");
    expect(result2[4]).toBe("language");
})