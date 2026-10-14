export function formatVisitDate(timestamp) {
    return new Date(Number(timestamp)).toLocaleString();
}

const lastVisit = localStorage.getItem("lastVisit");
const currentVisit = Date.now();

if (lastVisit) {
    const previousDate = new Date(Number(lastVisit));

    visitMessage.textContent =
        `Welcome back! Your last visit was on ${previousDate.toLocaleString()}.`;
} else {
    visitMessage.textContent =
        "Welcome to Football Hub! This is your first recorded visit.";
}

localStorage.setItem("lastVisit", currentVisit);

const subscribeForm = document.querySelector("#subscribeForm");

subscribeForm.addEventListener("submit", (event) => {
    if (!subscribeForm.checkValidity()) {
        event.preventDefault();
        subscribeForm.reportValidity();
        return;
    }

    const submitButton = subscribeForm.querySelector("button[type='submit']");
    submitButton.textContent = "Submitting...";
});

const params = new URLSearchParams(window.location.search);

console.log("First name:", params.get("firstName"));
console.log("Last name:", params.get("lastName"));
console.log("Email:", params.get("email"));
console.log("Favourite team:", params.get("favoriteTeam"));
console.log("Updates:", params.get("updates"));