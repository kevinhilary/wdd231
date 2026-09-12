const menuBtn = document.querySelector("#menuBtn");
const navMenu = document.querySelector("#navMenu");

menuBtn.addEventListener("click", function () {
    navMenu.classList.toggle("open");
    if (navMenu.classList.contains("open")) {
        menuBtn.textContent = "X";
    }
    else {
        menuBtn.textContent = "≡";
    }
})

const lastModification = document.querySelector("#lastmo");
const lastModified = document.lastModified;

lastModification.textContent = `Last Modification: ${lastModified}`;

const currentYear = document.querySelector("#currentyear");
const thisYear = new Date().getFullYear();

currentYear.textContent = `© ${thisYear} <KEVIN HILARY> NAIROBI, KENYA`

const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

const Allcourses = document.querySelector(".courses");

function displayAllCourses(courses) {
    Allcourses.innerHTML = "";
    courses.forEach(function (course) {
        const p = document.createElement("p")
        if (course.completed === true) {
            p.textContent = `✔ ${course.subject} ${course.number}`;
            p.style.backgroundColor = "green";
        }
        else {
            p.textContent = `❌ ${course.subject} ${course.number}`;
            p.style.backgroundColor = "red";
        }
        Allcourses.appendChild(p);
    })
}

displayAllCourses(courses)

const all = document.querySelector(".all");
const cse = document.querySelector(".cse");
const wdd = document.querySelector(".wdd");

all.addEventListener("click", function () {
    displayAllCourses(courses);
})

cse.addEventListener("click", function () {
    const cseCourses = courses.filter(course => course.subject === "CSE");
    displayAllCourses(cseCourses);

})

wdd.addEventListener("click", function () {
    const wddCourses = courses.filter(course => course.subject === "WDD");
    displayAllCourses(wddCourses);

})