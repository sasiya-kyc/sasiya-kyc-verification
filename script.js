// PRELOADER
setTimeout(()=>{document.getElementById("preloader").style.display="none"},3000)

// CONTACT
function showContact(){
document.getElementById("contact").style.display="block";
}

// PARTICLES
particlesJS("particles-js", {
particles:{number:{value:80},size:{value:3},move:{speed:2}}
});

// COUNTER
let count=0;
setInterval(()=>{
count++;
document.getElementById("money").innerText=count;
},50)

// LANGUAGE TOGGLE
function toggleLang(){
alert("Sinhala version coming 😎");
}
