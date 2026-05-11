// =========================
// TYPING EFFECT
// =========================

const typingText =
document.querySelector(".typing-text");

if(typingText){

    const words = [

        "Full Stack Developer",
        "AI & ML Enthusiast",
        "Django Developer",
        "Frontend Developer"

    ];

    let wordIndex = 0;

    let charIndex = 0;

    let currentWord = "";

    let isDeleting = false;

    function typeEffect(){

        currentWord = words[wordIndex];

        // TYPING

        if(!isDeleting){

            typingText.textContent =
            currentWord.substring(0,charIndex + 1);

            charIndex++;

            if(charIndex === currentWord.length){

                isDeleting = true;

                setTimeout(typeEffect,1200);

                return;
            }

        }

        // DELETING

        else{

            typingText.textContent =
            currentWord.substring(0,charIndex - 1);

            charIndex--;

            if(charIndex === 0){

                isDeleting = false;

                wordIndex++;

                if(wordIndex === words.length){

                    wordIndex = 0;
                }

            }

        }

        setTimeout(typeEffect,
        isDeleting ? 60 : 120);

    }

    typeEffect();

}


// =========================
// SCROLL ANIMATION
// =========================

const cards =
document.querySelectorAll(
".skill-card, .project-card, .contact-card"
);

window.addEventListener("scroll", revealCards);

function revealCards(){

    const triggerBottom =
    window.innerHeight * 0.85;

    cards.forEach(card => {

        const cardTop =
        card.getBoundingClientRect().top;

        if(cardTop < triggerBottom){

            card.classList.add("show-card");

        }

    });

}

revealCards();


// =========================
// ACTIVE NAV LINK
// =========================

const navLinks =
document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {

    if(link.href === window.location.href){

        link.style.color = "#60a5fa";

    }

});


// =========================
// IMAGE HOVER EFFECT
// =========================

const profileImage =
document.querySelector(".image-circle");

if(profileImage){

    profileImage.addEventListener("mousemove", () => {

        profileImage.style.transform =
        "scale(1.03)";

    });

    profileImage.addEventListener("mouseleave", () => {

        profileImage.style.transform =
        "scale(1)";

    });

}


// =========================
// BUTTON RIPPLE EFFECT
// =========================

const buttons =
document.querySelectorAll(
".btn, .btn-outline, .project-links a"
);

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.boxShadow =
        "0 0 25px rgba(59,130,246,0.45)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.boxShadow = "none";

    });

});