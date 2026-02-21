function toggleDarkMode(){
document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){
localStorage.setItem("theme","dark");
}else{
localStorage.setItem("theme","light");
}
}

window.addEventListener("DOMContentLoaded",()=>{
if(localStorage.getItem("theme")==="dark"){
document.body.classList.add("dark");
}
});

function showMotivation(){

const messages=[
"Believe in yourself, even when no one else does.",
"Your best is more than enough.",
"You are stronger than you think.",
"Progress matters more than perfection.",
"Discipline builds future success."
];

document.getElementById("motivationText").innerText =
messages[Math.floor(Math.random()*messages.length)];

}