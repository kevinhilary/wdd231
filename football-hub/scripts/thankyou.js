import { formatVisitDate } from "./utils.js";
const params = new URLSearchParams(window.location.search);
const details = document.querySelector("#submissionDetails");

const firstName = params.get("firstName");
const lastName = params.get("lastName");
const email = params.get("email");
const favoriteTeam = params.get("favoriteTeam");
const updates = params.get("updates");

if (firstName && lastName && email && favoriteTeam && updates) {
    details.innerHTML = `
        <h2>Subscription Details</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Favourite Team:</strong> ${favoriteTeam}</p>
        <p><strong>Updates:</strong> ${updates}</p>
    `;
} else {
    details.textContent = "No complete subscription details were provided. Please complete the form first.";
}

const lastVisit = localStorage.getItem("lastVisit");

if (lastVisit) {
    const visitDate = formatVisitDate(lastVisit);

    const visitInfo = document.createElement("p");
    visitInfo.textContent = `Your last recorded visit was: ${visitDate}`;

    document.querySelector("#submissionDetails").append(visitInfo);
}
