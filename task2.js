const workers = [{
        name: "bill",
        job: "architect",
        salary: 10000,
    },
    {
        name: "Arni",
        job: "actor",
        salary: 100000,
    },
    {
        name: "Bob",
        job: "singer",
        salary: 40000,
    },
    {
        name: "Ann",
        job: "manager",
        salary: 30000,
    },
    {
        name: "Antony",
        job: "Footballer",
        salary: 90000,
    },
    {
        name: "John",
        job: "builder",
        salary: 25000,
    },
    {
        name: "Arthur",
        job: "teacher",
        salary: 20000,
    },
];

const workers1 = [{
        name: "Robert",
        job: "Dentist",
        salary: 90000,
    },
    {
        name: "Pietro",
        job: "Computer Systems Analyst",
        salary: 120000,
    },
    {
        name: "James",
        job: "Web Developer",
        salary: 100000,
    },
];

const allWorkers = [...workers, ...workers1];

console.log('allWorkers', allWorkers)