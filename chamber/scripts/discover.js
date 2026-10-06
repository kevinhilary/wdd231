import {places} from "../data/discover.mjs";
const discoverGrid = document.querySelector(".discover-grid");

places.forEach((place) => {
    const card = document.createElement("article");
    card.classList.add("discover-card");
    card.innerHTML = `<h2>${place.name}</h2
    <figure>
        <img src="images/${place.image}" alt="${place.name}" loading="lazy">
    </figure>
    <address>${place.address}</address>
    <p>${place.description}</p>
    <button type="button" class="learn-more">Learn More</button>`;

    discoverGrid.appendChild(card);
});

const VisitMessage = document.querySelector("#visit-message");
const currentVisit = Date.now();
const lastVisit = localStorage.getItem("lastVisit");

if (!lastVisit){
    VisitMessage.textContent = "Welcome! Let us know if you have any questions.";
}
else{
    const daySinceVist = Math.floor(
        (currentVisit - Number(lastVisit))/(1000 * 60 * 60 * 24)
    );
    if (daySinceVist < 1){
        VisitMessage.textContent = "Back so soon! Awesome!";
    }
    else{
        VisitMessage.textContent = `You last visited ${daySinceVist} ${daySinceVist === 1 ? "day" : "days"} ago.`;}
}
localStorage.setItem("lastVisit", currentVisit);