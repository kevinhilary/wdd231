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

async function loadSpotlights() {
    try {
        const ressponse = await fetch('data/members.json');
        const members = await ressponse.json();

        const eligible = members.filter(m => m.membership === "Gold" || m.membership === "Silver");
        const shuffled = eligible.sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, 3);
        const containner = document.getElementById('spotlight-cards');
        containner.innerHTML = '';
        selected.forEach(member => {
            const card = document.createElement('div');
            card.className = 'spotlight-card';
            card.innerHTML = ` <img src="images/${member.image}" alt="${member.name} Logo">
            <h3>${member.name}</h3>
            <p>Phone: ${member.phone}</p>
            <p>Address: ${member.address}</p>
            <p>Website: <a href="${member.url}" target="_blank">${member.url}</a></p>
            <p>Membership: ${member.membership}</p>`;
            containner.appendChild(card);
        })
    }
    catch (error) {
        console.error('Error loading spotlights:', error);
    }
}

loadSpotlights();

// main.js - Weather section
const apiKey = '55636973d6f3beb6edcb3689af5fc49e';
const lat = -0.367;   // Kericho latitude
const lon = 35.283;   // Kericho longitude

const weatherTemp = document.getElementById('temp');
const weatherDesc = document.getElementById('desc');
const forecastList = document.getElementById('forecast');

async function loadWeather() {
    try {
        const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&cnt=24&appid=${apiKey}`;
        console.log('Fetching URL:', url);
        const res = await fetch(url);

        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        console.log('API Response:', data);

        // Current weather
        const current = data.list[0];
        weatherTemp.textContent = current.main.temp.toFixed(1);
        weatherDesc.textContent = current.weather[0].description;

        // 3-Day Forecast
        forecastList.innerHTML = '';
        for (let i = 8; i <= 24; i += 8) {
            const day = data.list[i];
            const date = new Date(day.dt * 1000).toLocaleDateString(undefined, { weekday: 'short' });
            const temp = day.main.temp.toFixed(1);
            const li = document.createElement('li');
            li.textContent = `${date}: ${temp}℃`;
            forecastList.appendChild(li);
        }

    } catch (err) {
        console.error('Error fetching weather:', err);
        weatherTemp.textContent = '--';
        weatherDesc.textContent = 'Error loading weather';
        forecastList.innerHTML = '<li>Forecast unavailable</li>';
    }
}

document.addEventListener('DOMContentLoaded', loadWeather);
document.getElementById("timestamp").value = new Date().toISOString();

function openModal(id) {
    document.getElementById(id).style.display = "block";
}

function closeModal(id) {
    document.getElementById(id).style.display = "none";
}
document.querySelectorAll(".open-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        document.getElementById(btn.dataset.modal).style.display = "block";
    });
});

document.querySelectorAll(".close-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        btn.closest(".modal").style.display = "none";
    });
});