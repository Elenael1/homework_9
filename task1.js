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

function middleSallary(workers) {
    const salaries = []
    let total = 0
    for (const worker of workers) {
        salaries.push(worker.salary)
        total += worker.salary
    }
    const result = total / salaries.length;
    return Number(result.toFixed(1))
}

const result = middleSallary(workers);
console.log('result', result)