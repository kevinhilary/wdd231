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

const getData = async () => {
    try {
        const response = await fetch("data/members.json");
        const members = await response.json();
        const cardcolumns = document.querySelector(".card-columns");

        function displayMembers(members) {
            members.forEach(function (member) {
                const cardflexcards = document.createElement("div");
                cardflexcards.classList.add("cardflex-cards");
                cardcolumns.appendChild(cardflexcards);
                const bname = document.createElement("p");
                bname.classList.add("bname");
                bname.textContent = member.name;
                cardflexcards.appendChild(bname);
                const tagline = document.createElement("p");
                tagline.classList.add("bname");
                tagline.textContent = member.membership;
                cardflexcards.appendChild(tagline);
                const carsdflex = document.createElement("div");
                carsdflex.classList.add("card-flex");
                cardflexcards.appendChild(carsdflex);
                const imagediv = document.createElement("div")
                carsdflex.appendChild(imagediv);
                const image = document.createElement('img');
                image.src = member.image;
                imagediv.appendChild(image);
                const textdiv = document.createElement("div")
                carsdflex.appendChild(textdiv);
                const phone1 = document.createElement("p");
                const span1 = document.createElement("span");
                span1.classList.add("phone");
                span1.textContent = "Address"
                phone1.appendChild(span1);
                phone1.append(`; ${member.address}`)
                textdiv.appendChild(phone1);
                const phone2 = document.createElement("p");
                const span2 = document.createElement("span");
                span2.classList.add("phone");
                span2.textContent = "Phone"
                phone2.appendChild(span2);
                phone2.append(`; ${member.phone}`)
                textdiv.appendChild(phone2);
                const phone3 = document.createElement("p");
                const span3 = document.createElement("span");
                span3.classList.add("phone");
                span3.textContent = "URL"
                phone3.appendChild(span3);
                phone3.append(`; ${member.url}`)
                textdiv.appendChild(phone3);
            });
        }
        const grid = document.querySelector("#grid");
        grid.addEventListener("click", function () {
            cardcolumns.classList.add("columngrid")
            cardcolumns.classList.remove("columnlist");
        })
        const list = document.querySelector("#list");
        list.addEventListener("click", function () {
            cardcolumns.classList.add("columnlist")
            cardcolumns.classList.remove("columngrid")
        })
        displayMembers(members);
    }
    catch (error) {
        const errormessage = "Something went wrong";
    }
};

getData();

const grid = document.querySelector("#grid");
grid.addEventListener("click", function () {
    cardcolumns.classList.add("columngrid")
})

const lastmodiii = document.querySelector("#lastmodiii");
const Lastmodifiication = document.lastModified;
lastmodiii.textContent = `Last Modification: ${Lastmodifiication}`;