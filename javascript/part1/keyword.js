console.log("===== JavaScript var / let / const Learning Program =====");

// 1️⃣ VAR EXAMPLES
console.log("\n--- VAR EXAMPLES ---");

var a = 10;
console.log("Initial var a =", a);

// Re-assignment (Allowed)
a = 20;
console.log("After reassignment a =", a);

// Re-declaration (Allowed)
var a = 50;
console.log("After redeclaration a =", a);

// Function Scope
function varFunctionScope() {
    if (true) {
        var x = 100;
    }
    console.log("var inside function block =", x); // Accessible
}
varFunctionScope();

// Block Scope Test
if (true) {
    var y = 200;
}
console.log("var outside block =", y); // Accessible

// Hoisting with var
console.log("Hoisting var test =", hoistVar);
var hoistVar = 999;



// 2️⃣ LET EXAMPLES
console.log("\n--- LET EXAMPLES ---");

let b = 10;
console.log("Initial let b =", b);

// Re-assignment (Allowed)
b = 30;
console.log("After reassignment b =", b);

// Re-declaration (Not Allowed)
// let b = 40; ❌ ERROR

// Block Scope
if (true) {
    let c = 500;
    console.log("let inside block =", c);
}
// console.log(c); ❌ ERROR (not accessible)

// Hoisting with let (Temporal Dead Zone)
try {
    console.log(testLet);
} catch (error) {
    console.log("Accessing let before declaration gives:", error.message);
}
let testLet = 123;



// 3️⃣ CONST EXAMPLES
console.log("\n--- CONST EXAMPLES ---");

const d = 1000;
console.log("const d =", d);

// Re-assignment (Not Allowed)
// d = 2000; ❌ ERROR

// Must initialize immediately
// const e; ❌ ERROR

// Objects with const
const obj = { name: "Darshan" };
console.log("Original object:", obj);

// Mutation allowed
obj.name = "DSA King";
console.log("After modifying property:", obj);

// Reassignment not allowed
// obj = {}; ❌ ERROR



// 4️⃣ LOOP DIFFERENCE (Important)
console.log("\n--- LOOP DIFFERENCE ---");

console.log("Using var:");
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log("var i =", i), 100);
}

setTimeout(() => {
    console.log("\nUsing let:");
    for (let j = 0; j < 3; j++) {
        setTimeout(() => console.log("let j =", j), 100);
    }
}, 500);



// 5️⃣ SHADOWING
console.log("\n--- SHADOWING ---");

let outer = "Outer Value";
console.log("Outside block:", outer);

{
    let outer = "Inner Value";
    console.log("Inside block:", outer);
}

console.log("Outside again:", outer);



console.log("\n===== Program End =====");
