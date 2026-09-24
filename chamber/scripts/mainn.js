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
if (grid){
grid.addEventListener("click", function () {
    cardcolumns.classList.add("columngrid")
});
};

const lastmodiii = document.querySelector("#lastmodiii");
const Lastmodifiication = document.lastModified;
lastmodiii.textContent = `Last Modification: ${Lastmodifiication}`;

const displayRandomCards = async () => {
    try {
        const responsee = await fetch("data/members.json");
        const memberss = await responsee.json();
        const cardcolumnss = document.querySelector(".card-columnss");

        const randomMembers = memberss.filter(member => member.membership === "Gold" || member.membership === "Silver")
        .sort(() => Math.random() - 0.5).slice(0, 3);

    
        function displayRandomMembers(randomMembers) {
            randomMembers.forEach(function (memberr) { 
                const cardflexcardss = document.createElement("div");
                cardflexcardss.classList.add("cardflex-cards");
                cardcolumnss.appendChild(cardflexcardss);
                const bnamee = document.createElement("p");
                bnamee.classList.add("bname");
                bnamee.textContent = memberr.name;
                cardflexcardss.appendChild(bnamee);
                const taglinee = document.createElement("p");
                taglinee.classList.add("bname");
                taglinee.textContent = memberr.membership;
                cardflexcardss.appendChild(taglinee);
                const carsdflexx = document.createElement("div");
                carsdflexx.classList.add("card-flex");
                cardflexcardss.appendChild(carsdflexx);
                const imagedivv = document.createElement("div")
                carsdflexx.appendChild(imagedivv);
                const imagee = document.createElement('img');
                imagee.src = memberr.image;
                imagedivv.appendChild(imagee);
                const textdivv = document.createElement("div")
                carsdflexx.appendChild(textdivv);
                const phone11 = document.createElement("p");
                const span11 = document.createElement("span");
                span11.classList.add("phone");
                span11.textContent = "Address"
                phone11.appendChild(span11);
                phone11.append(`; ${memberr.address}`)
                textdivv.appendChild(phone11);
                const phone22 = document.createElement("p");
                const span22 = document.createElement("span");
                span22.classList.add("phone");
                span22.textContent = "Phone"
                phone22.appendChild(span22);
                phone22.append(`; ${memberr.phone}`)
                textdivv.appendChild(phone22);
                const phone33 = document.createElement("p");
                const span33 = document.createElement("span");
                span33.classList.add("phone");
                span33.textContent = "URL"
                phone33.appendChild(span33);
                phone33.append(`; ${memberr.url}`)
                textdivv.appendChild(phone33);
            });
        }

        displayRandomMembers(randomMembers);
    }
    catch (error) {
        console.error(error);
    }
}
displayRandomCards();

const getWeather = async() => {
    const apiKey = "55636973d6f3beb6edcb3689af5fc49e";
    const currentURL = `https://api.openweathermap.org/data/2.5/weather?q=Kericho,KE&units=metric&appid=${apiKey}`;
    const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?q=Kericho,KE&units=metric&appid=${apiKey}`

    try{
        const currentResponse = await fetch(currentURL);
        const currentData = await currentResponse.json();
        const forecastResponse = await fetch(forecastURL);
        const forecastData = await forecastResponse.json();

        const currentDiv = document.querySelector("#current-weather");
        currentDiv.innerHTML = `<p>Temperature: ${currentData.main.temp}℃</p>
        <p>Condition: ${currentData.weather[0].description}</p`;
        const dailyForecast = forecastData.list.filter(item => item.dt_txt.includes("12:00:00")).slice(0,3);
        const forecastDiv = document.querySelector("#forecast");
        dailyForecast.forEach(day => {
            const date = new Date(day.dt_txt);
            const card = document.createElement("div");
            card.innerHTML = `<h4>${date.toLocaleDateString("en-KE", {
                weekday: "long"})}</h4>
                <p>Temperature: ${day.main.temp}℃</p>`;
                forecastDiv.appendChild(card);
        });
    }
    catch(error){
        console.error("Weather error:", error)
    }  
};

getWeather();