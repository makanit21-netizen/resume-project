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
let skills  = ["Baseball", "Leadership", "Communication", "Teamwork"];


// Connect Variables to the HTML (ligaments)

document.getElementById("my-name").textContent = myName;
document.getElementById("my-email").textContent = myEmail;
document.getElementById("title").textContent = title;
document.getElementById("experience").textContent = experience;
document.getElementById("education").textContent = education;
document.getElementById("skills").textContent = skills;

for (let i = 0; i < skills.length; i++) {
 let li = document.createElement("li");
 li.textContent = skills[i];
 skillsList.appendChild(li);
}
document.body.appendChild(skillsList);

function showFunFact() {
 alert("Fun Fact: I love my pet pig!");
}
