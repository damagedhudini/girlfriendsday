/* ========= ELEMENTS ========= */

const envelopePage = document.getElementById("envelopePage");
const introPage = document.getElementById("introPage");
const surprisePage = document.getElementById("surprisePage");
const letterPage = document.getElementById("letterPage");

const seal = document.getElementById("seal");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const petals = document.getElementById("petals");
const hearts = document.getElementById("hearts");

const music = document.getElementById("bgMusic");

const typed = document.getElementById("typedText");
const finalBtn = document.getElementById("finalBtn");

/* ========= MUSIC ========= */

music.volume = 0.3;

/* ========= FALLING PETALS ========= */

function createPetal(){

    const petal = document.createElement("div");

    petal.className = "petal";

    petal.innerHTML = "🌹";

    petal.style.left = Math.random()*100+"vw";

    petal.style.animationDuration =
        (Math.random()*5+6)+"s";

    petal.style.fontSize =
        (18+Math.random()*15)+"px";

    petals.appendChild(petal);

    setTimeout(()=>{

        petal.remove();

    },11000);

}

setInterval(createPetal,250);

/* ========= FLOATING HEARTS ========= */

function createHeart(){

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤️";

    heart.style.left = Math.random()*100+"vw";

    heart.style.bottom = "-30px";

    heart.style.fontSize =
        (16+Math.random()*20)+"px";

    hearts.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },6000);

}

setInterval(createHeart,700);

/* ========= OPEN ENVELOPE ========= */

seal.onclick = ()=>{

    document.querySelector(".flap").style.transform =
        "rotateX(180deg)";

    setTimeout(()=>{

        envelopePage.classList.add("hidden");

        introPage.classList.remove("hidden");

    },900);

}

/* ========= YES BUTTON ========= */

yesBtn.onclick = ()=>{

    introPage.classList.add("hidden");

    surprisePage.classList.remove("hidden");

    music.play();

    for(let i=0;i<150;i++){

        setTimeout(createPetal,i*30);

    }

    setTimeout(()=>{

        surprisePage.classList.add("hidden");

        letterPage.classList.remove("hidden");

        typeLetter();

    },1000);

}

/* ========= NO BUTTON ========= */

const messages=[

"I'll wait ❤️",

"Are you sure? 🥺",

"Please...? ❤️",

"I made this just for you 💕"

];

let index=0;

noBtn.onclick=()=>{

    alert(messages[index]);

    index++;

    if(index>=messages.length){

        index=0;

    }

}

/* ========= TYPEWRITER ========= */

const originalText =
typed.innerText;

typed.innerHTML="";

let i=0;

function typeLetter(){

    if(i<originalText.length){

        typed.innerHTML += originalText.charAt(i);

        i++;

        setTimeout(typeLetter,35);

    }

}

/* ========= FINAL BUTTON ========= */

finalBtn.onclick=()=>{

    for(let i=0;i<250;i++){

        setTimeout(createHeart,i*20);

    }

    alert("❤️ Happy Girlfriend's Day ❤️\n\nI Love You Forever.");

}
