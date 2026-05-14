const texts = [
    "Frontend Developer",
    "Web Designer",
    "UI/UX Designer",
    "Graphic Designer",
    "Web Developer"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
    if (count === texts.length) {
        count = 0;
    }

    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.querySelector(".multiple-text").textContent = letter;

    if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(type, 1200);
    } else {
        setTimeout(type, 100);
    }
})();

function showTab(event, tabId){

    let contents = document.querySelectorAll(".project-content");
    let buttons = document.querySelectorAll(".tab-btn");

    contents.forEach(content => {
        content.classList.remove("active");
    });

    buttons.forEach(button => {
        button.classList.remove("active");
    });

    document.getElementById(tabId).classList.add("active");
    event.currentTarget.classList.add("active");
}

// Sliding card image effect
const sliders = document.querySelectorAll('.project-slider');

sliders.forEach(slider => {
    const images = slider.querySelectorAll('img');
    let index = 0;

    setInterval(() => {
        index = (index + 1) % images.length;

        images.forEach(img => {
            img.style.transform = `translateX(-${index * 100}%)`;
        });

    }, 3000);
});

function showInternshipTasks() {
    let tasks = document.getElementById("internshipTasks");

    if (tasks.style.display === "none" || tasks.style.display === "") {
        tasks.style.display = "grid";
    } else {
        tasks.style.display = "none";
    }
}

function showSchoolTasks() {
    let tasks = document.getElementById("schoolTasks");

    if (tasks.style.display === "none" || tasks.style.display === "") {
        tasks.style.display = "grid";
    } else {
        tasks.style.display = "none";
    }
}