const navbutton = document.querySelector('#ham-btn');
const navlinks = document.querySelector('#nav-bar');

navbutton.addEventListener('click', () => {
    navbutton.classList.toggle('show');
    navlinks.classList.toggle('show');
});

const cardsContainer = document.getElementById("cards-container");

// Fetch JSON and display cards
async function loadMembers() {
    try {
        const response = await fetch('data/members.json');
        const members = await response.json();

        members.forEach(member => {
            const card = document.createElement('section');
            card.classList.add('card');
            card.innerHTML = `<p class="name">${member.name}</p>
                <p class="tagline">Membership Level: ${member.membership}</p>
                <div class="business-info">
                    <img src="images/${member.image}" alt="${member.name}" loading="lazy">
                    <div class="contact">
                        <p><strong>ADDRESS:</strong> ${member.address}</p>
                        <p><strong>PHONE:</strong> ${member.phone}</p>
                        <p><strong>URL:</strong> <a href="${member.url}" target="_blank">${member.url}</a></p>
                        <p>${member.other}</p>
                    </div>
                </div>
            `;
            cardsContainer.appendChild(card);
        });
    } catch (err) {
        console.error("Error loading members:", err);
    }
}

// Toggle grid/list view
document.addEventListener("DOMContentLoaded", () => {
    const gridBtn = document.getElementById("grid-view");
    const listBtn = document.getElementById("list-view");
    const body = document.body;

    // Default view
    body.classList.remove('list-view');

    // Grid view button
    gridBtn.addEventListener('click', () => {
        body.classList.remove('list-view'); // grid layout
        gridBtn.disabled = true;  // disable grid button to indicate active
        listBtn.disabled = false;
    });

    // List view button
    listBtn.addEventListener('click', () => {
        body.classList.add('list-view'); // list layout
        listBtn.disabled = true; // disable list button to indicate active
        gridBtn.disabled = false;
    });
});

// Footer info
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Load members on page load
loadMembers();