let students = [
    { name: "Darshan", marks: 80 },
    { name: "Ravi", marks: 70 },
    { name: "Anu", marks: 90 }
];

let totalMarks = students.reduce((total, student) => {
    return total + student.marks;
}, 0);

console.log(totalMarks);