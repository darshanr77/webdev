let arr = [10, 20, 30];

let doubled = arr.map((value) => {
    return value * 2;
});

console.log(doubled);


let students = [
    { name: "Darshan", marks: 80, section: "A" },
    { name: "Ravi", marks: 65, section: "B" },
    { name: "Anu", marks: 90, section: "A" }
];

let names = students.map((student) => {
    return student.name;
});

console.log(names);