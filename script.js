// ==========================
// Mobile Navigation
// ==========================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Close menu when a link is clicked
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});
const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        header.style.background = "rgba(2, 6, 23, 0.95)";
        header.style.boxShadow = "0 8px 25px rgba(0,0,0,.35)";

    }else{

        header.style.background = "rgba(15, 23, 42, 0.75)";
        header.style.boxShadow = "none";

    }

});
// ==========================
// Smooth Scrolling
// ==========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({
            behavior: "smooth"
        });

    });

});

// ==========================
// Contact Form Validation
// ==========================

const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (name === "") {
        alert("Please enter your name.");
        return;
    }

    if (!email.match(emailPattern)) {
        alert("Please enter a valid email address.");
        return;
    }

    if (subject === "") {
        alert("Please enter a subject.");
        return;
    }

    if (message.length < 10) {
        alert("Message should contain at least 10 characters.");
        return;
    }

    alert("Message sent successfully!");

    form.reset();

});

// ==========================
// Scroll Reveal Animation
// ==========================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.2
});

sections.forEach(section => {
    observer.observe(section);
});

// ==========================
// Active Navigation Link
// ==========================

const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 100;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// ==========================
// Navbar Background on Scroll
// ==========================

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {

        header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.15)";

    } else {

        header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.08)";

    }

});

// ==========================
// Typing Effect
// ==========================

const roles = [
    "Frontend Developer",
    "Web Designer",
    "JavaScript Developer",
    "React Developer"
];

let roleIndex = 0;
let charIndex = 0;

const roleElement = document.querySelector(".hero-text h2");

function typeRole() {

    if (charIndex < roles[roleIndex].length) {

        roleElement.textContent += roles[roleIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeRole, 100);

    } else {

        setTimeout(eraseRole, 1500);

    }

}

function eraseRole() {

    if (charIndex > 0) {

        roleElement.textContent = roles[roleIndex].substring(0, charIndex - 1);

        charIndex--;

        setTimeout(eraseRole, 50);

    } else {

        roleIndex++;

        if (roleIndex >= roles.length) {

            roleIndex = 0;

        }

        setTimeout(typeRole, 300);

    }

}

roleElement.textContent = "";

typeRole();