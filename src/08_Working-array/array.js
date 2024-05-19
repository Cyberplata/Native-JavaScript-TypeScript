    const mentors = [
        {id: 'id100', title: "Dimych", salary: 10}, //0
        {id: 'id20222', title: "Viktor", salary: 100}, //1
        {id: 'id323242', title: "Valera", salary: 100}, //2
        {id: 'id489829898989', title: "Artem", salary: 100}, //3
    ];

    const artemId = 'id489829898989';

    const mentor1 = mentors.find(m => m.id === artemId);
    const mentor2 = mentors[3];

    let keys = Object.keys(mentor1);
    console.log(keys)
    mentor1.salary = 50;
    // console.log(mentors)
    // console.log(mentor1)
    // console.log(mentor2)

    const students = [
        {id: 'id100', title: "Andrew"}, //0
        {id: 'id2', title: "Anna"}, //1
        {id: 'id4', title: "Sasha"}, //2
        //...
        {id: 'id1000000', title: "Marina"}, //1000000
    ]
