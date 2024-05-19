    const mentors = [
        {"id": 'id100', "title": "Dimych", "my-salary": 10}, //0
        {"id": 'id20222', "title": "Viktor", "my-salary": 100}, //1
        {"id": 'id323242', "title": "Valera", "my-salary": 100}, //2
        {"id": 'id489829898989', "title": "Artem", "my-salary": 100}, //3
    ];

    const artemId = 'id489829898989';

    const mentor1 = mentors.find(m => m.id === artemId);
    const mentor2 = mentors[3];

    // let keys = Object.keys(mentor1);
    // console.log(keys)
    mentor1["my-salary"] = 50;
    // console.log(mentor1)
    console.log(mentor1.id)
    console.log(mentor1["id"])



    const students = [
        {id: 'id100', title: "Andrew"}, //0
        {id: 'id2', title: "Anna"}, //1
        {id: 'id4', title: "Sasha"}, //2
        //...
        {id: 'id1000000', title: "Marina"}, //1000000
    ]
