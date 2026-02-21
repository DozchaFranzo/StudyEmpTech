// DARK MODE

function toggleDarkMode(){

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){
localStorage.setItem("theme","dark");
}else{
localStorage.setItem("theme","light");
}

}

// LOAD

window.addEventListener("DOMContentLoaded",()=>{

if(localStorage.getItem("theme")==="dark"){
document.body.classList.add("dark");
}

revealOnScroll();

});

// SCROLL ANIMATION

function revealOnScroll(){

const elements=document.querySelectorAll(".reveal");

elements.forEach(el=>{
el.classList.add("animate");
});

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add("active");
}
});

},{threshold:0.2});

elements.forEach(el=>observer.observe(el));

}

// MOTIVATION

function showMotivation(){

const messages=[
"Believe in yourself, even when no one else does",
"Your best is more than being enough",
"You are stronger than you think",
"Progress matters more than perfection",
"Discipline builds future success"
];

document.getElementById("motivationText").innerText=
messages[Math.floor(Math.random()*messages.length)];

}