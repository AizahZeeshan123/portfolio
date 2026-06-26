/* ==========================================
   CURSOR GLOW
========================================== */

const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {

    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";

});


/* ==========================================
   TYPING EFFECT
========================================== */

const words = [

    "Helping Brands Grow.",
    "Cinematic Video Editing.",
    "Premium Graphic Design.",
    "Creative Social Media.",
    "Powerful Copywriting.",
    "Content That Converts."

];

let wordIndex = 0;
let letterIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function type(){

    if(!typing) return;

    const currentWord = words[wordIndex];

    if(!deleting){

        typing.textContent = currentWord.substring(0,letterIndex);

        letterIndex++;

        if(letterIndex > currentWord.length){

            deleting = true;

            setTimeout(type,1400);

            return;

        }

    }else{

        typing.textContent = currentWord.substring(0,letterIndex);

        letterIndex--;

        if(letterIndex < 0){

            deleting = false;

            wordIndex++;

            if(wordIndex >= words.length){

                wordIndex = 0;

            }

        }

    }

    setTimeout(type,deleting ? 45 : 85);

}

type();


/* ==========================================
   NAVBAR SCROLL
========================================== */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 50){

        navbar.classList.add("scrolled");

    }

    else{

        navbar.classList.remove("scrolled");

    }

});


/* ==========================================
   REVEAL ANIMATION
========================================== */

const reveals = document.querySelectorAll(
".section-title,.about-wrapper,.expert-card,.stat-box,.hero-left,.hero-right,.video-card"
);

function revealSections(){

    reveals.forEach(item=>{

        const top = item.getBoundingClientRect().top;

        if(top < window.innerHeight - 120){

            item.classList.add("active");

        }

    });

}

window.addEventListener("scroll",revealSections);

revealSections();


/* ==========================================
   COUNTER ANIMATION
========================================== */

const counters = document.querySelectorAll(".stat-box h2");

let counterStarted = false;

function runCounters(){

    if(counterStarted) return;

    const stats = document.querySelector(".stats-section");

    if(!stats) return;

    if(stats.getBoundingClientRect().top < window.innerHeight-120){

        counterStarted = true;

        counters.forEach(counter=>{

            const text = counter.innerText;

            const target = parseInt(text);

            const suffix = text.replace(/[0-9]/g,"");

            let count = 0;

            const speed = target / 60;

            const interval = setInterval(()=>{

                count += speed;

                if(count >= target){

                    counter.innerText = target + suffix;

                    clearInterval(interval);

                }else{

                    counter.innerText = Math.floor(count) + suffix;

                }

            },20);

        });

    }

}

window.addEventListener("scroll",runCounters);

runCounters();


/* ==========================================
   SMOOTH ACTIVE NAVIGATION
========================================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

        const sectionTop = section.offsetTop - 180;

        if(scrollY >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});


/* ==========================================
   PARALLAX PHOTO
========================================== */

const photo = document.querySelector(".photo-frame");

window.addEventListener("mousemove",(e)=>{

    if(!photo) return;

    const x = (window.innerWidth/2 - e.clientX)/35;
    const y = (window.innerHeight/2 - e.clientY)/35;

    photo.style.transform =

    `rotateY(${-x}deg) rotateX(${y}deg)`;

});


/* ==========================================
   FLOATING CARDS PARALLAX
========================================== */

const cards = document.querySelectorAll(".floating-card");

window.addEventListener("mousemove",(e)=>{

    cards.forEach((card,index)=>{

        const moveX = (e.clientX-window.innerWidth/2)/(40+index*15);

        const moveY = (e.clientY-window.innerHeight/2)/(40+index*15);

        card.style.transform =

        `translate(${moveX}px,${moveY}px)`;

    });

});


/* ==========================================
   BUTTON MAGNET EFFECT
========================================== */

const buttons = document.querySelectorAll(

".primary-btn,.secondary-btn,.talk-btn"

);

buttons.forEach(button=>{

    button.addEventListener("mousemove",(e)=>{

        const rect = button.getBoundingClientRect();

        const x = e.clientX - rect.left - rect.width/2;

        const y = e.clientY - rect.top - rect.height/2;

        button.style.transform =

        `translate(${x*0.18}px,${y*0.18}px)`;

    });

    button.addEventListener("mouseleave",()=>{

        button.style.transform="translate(0,0)";

    });

});


/* ==========================================
   SCROLL PROGRESS BAR
========================================== */

const progress = document.createElement("div");

progress.style.position="fixed";
progress.style.top="0";
progress.style.left="0";
progress.style.height="4px";
progress.style.width="0%";
progress.style.background="linear-gradient(90deg,#e30613,#f4c430)";
progress.style.zIndex="999999";

document.body.appendChild(progress);

window.addEventListener("scroll",()=>{

    const scroll =

    window.scrollY/

    (document.body.scrollHeight-window.innerHeight);

    progress.style.width=(scroll*100)+"%";

});


/* ==========================================
   PRELOADER FADE (OPTIONAL)
========================================== */

window.addEventListener("load",()=>{

    document.body.classList.add("loaded");

});

/* ==========================================
   VIDEO FULLSCREEN
========================================== */

const videos = document.querySelectorAll(".video-card video");

videos.forEach(video => {

    video.addEventListener("play", () => {

        videos.forEach(v => {
            if (v !== video) {
                v.pause();
            }
        });

    });

    video.addEventListener("click", () => {

        if (video.requestFullscreen) {
            video.requestFullscreen();
        } else if (video.webkitRequestFullscreen) {
            video.webkitRequestFullscreen();
        }

        video.play();

    });

});