alert("hello");
let promp =  prompt("this is a prompt!");
console.log(promp);
console.log("Normal message");
console.info("Information");
console.warn("Warning message");
console.error("Error message");
console.debug("Debug message");

console.count("Click");
console.count("Click");

console.time("Timer");
for(let i=0;i<1000000;i++){}
console.timeEnd("Timer");

console.assert(10 < 5, "Condition is false");

console.group("User Details");
console.log("Name: Darshan");
console.log("Age: 20");
console.groupEnd();

console.table([
  {name: "Darshan", age: 20},
  {name: "Rahul", age: 22}
]);