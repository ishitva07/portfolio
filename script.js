// SCROLL REVEAL ANIMATION

const observer = new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add("show");
}
});
});

const hiddenElements = document.querySelectorAll(".section,.card,.about-box");

hiddenElements.forEach(el=>{
el.classList.add("hidden");
observer.observe(el);
});


// TYPING EFFECT

const text = "Ishitva Rathore";
let i = 0;

function typingEffect(){

if(i < text.length){

document.getElementById("typing").innerHTML += text.charAt(i);

i++;

setTimeout(typingEffect,80);

}

}

typingEffect();


// SCROLL PROGRESS BAR

window.onscroll = function(){

let winScroll = document.body.scrollTop || document.documentElement.scrollTop;

let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

let scrolled = (winScroll / height) * 100;

document.querySelector(".scroll-bar").style.width = scrolled + "%";

};