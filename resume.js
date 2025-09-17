//this line of code won't run
/* this won't run either 
or this 
or this */
console.log("Test");

let myName = "Makani Tanaka";
let myEmail = "mtanaka12@oru.edu";
let title = "Student Athlete";
let education = "Oral Roberts University";
let experience = "Baseball, Business Student, and Politics";
let skills  = []

// Connect Variables to the HTML (ligaments)

document.getElementById("my-name").textContent = myName;
document.getElementById("my-email").textContent = myEmail;
document.getElementById("title").textContent = title;
document.getElementById("Experience").textContent = experience;
document.getElementById("Education").textContent = education;
document.getElementById("Skills").textContent = skills;
