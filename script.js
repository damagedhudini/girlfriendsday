// Falling Petals

const petals=document.getElementById("petals");

function createPetal(){

const petal=document.createElement("div");

petal.className="petal";

petal.style.left=Math.random()*100+"vw";

petal.style.animationDuration=
(Math.random()*5+5)+"s";

petal.style.opacity=Math.random();

petals.appendChild(petal);

setTimeout(()=>{

petal.remove();

},10000);

}

setInterval(createPetal,250);

// Envelope

const seal=document.getElementById("seal");

const envelope=document.getElementById("envelopePage");

const intro=document.getElementById("introPage");

seal.onclick=()=>{

envelope.classList.add("hidden");

intro.classList.remove("hidden");

}

// Surprise

const yes=document.getElementById("yesBtn");

const no=document.getElementById("noBtn");

const roses=document.getElementById("roseScreen");

const letter=document.getElementById("letterPage");

const music=document.getElementById("bgMusic");

yes.onclick=()=>{

intro.classList.add("hidden");

roses.classList.remove("hidden");

music.play();

let interval=setInterval(()=>{

for(let i=0;i<25;i++){

createPetal();

}

},150);

setTimeout(()=>{

clearInterval(interval);

roses.classList.add("hidden");

letter.classList.remove("hidden");

},10000);

}

no.onclick=()=>{

alert("Aww... I'll wait ❤️");

}
