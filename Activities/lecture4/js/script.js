let name = "Messi";
let age = 20;
let isStudent = true;

if (isStudent) {
    console.log(name + " is a student.");
} else {
    console.log(name + " is not a student.");
}

let futureAge = age + 8;
document.getElementById("output").innerHTML =
    name + " is " + age + " years old, in 8 years they will be " + futureAge + ".";

