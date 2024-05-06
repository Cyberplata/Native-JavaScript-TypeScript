import {MyCarType} from "./practice-destructuring";

let props: MyCarType;
beforeEach(() => {
    props = {
        brand: "Lada",
        model: "Priora",
        generation: 2007,
        allModels: [
            {title: "2104", year: "1984-2012"},
            {title: "2105", year: "1980-2011"},
            {title: "2106", year: "1976-2006"},
            {title: "2107", year: "1982–2012"},
            {title: "2108", year: "1984-2005"},
        ],
        assembly: {
            titleFactory: [
                {name: "VAZ (Togliatti, USSR)"},
                {name: "AvtoVAZ (Tolyatti, Russia)"},
                {name: "IzhAvto (Izhevsk, Russia)"},
                {name: "RosLada (Syzran, Russia"}
            ]
        }
    }
})

test('there must be a data check of the props object', () => {
    const {model, generation, allModels} = props;
    const {titleFactory} = props.assembly;

    expect(model).toBe("Priora")
    expect(generation).toBe(2007)
    expect(allModels.length).toBe(5)

    expect(titleFactory.length).toBe(4)
})

test('there should be a check of props object data, for example with the remainder operator and destructuring...', () => {
    const am1 = props.allModels[0];
    const am2 = props.allModels[1];
    const am3 = props.allModels[2];

    const [, , proAM3, ...restAllModels] = props.allModels;

    expect(am1.title).toBe('2104');
    expect(am2.title).toBe('2105');
    expect(am3.title).toBe('2106');

    expect(am1.year).toBe("1984-2012");
    expect(am2.year).toBe("1980-2011");
    expect(am3.year).toBe("1976-2006");

    expect(proAM3.title).toBe("2106");

    expect(restAllModels.length).toBe(2);
    expect(restAllModels[0].title).toBe("2107");
    expect(restAllModels[0].year).toBe("1982–2012");
    expect(restAllModels[1].title).toBe("2108");
    expect(restAllModels[1].year).toBe("1984-2005");

    expect(restAllModels[1]).toStrictEqual({title: "2108", year: "1984-2005"})
})