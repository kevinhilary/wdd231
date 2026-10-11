const menuBtn = document.querySelector("#menuBtn");
const navMenu = document.querySelector(".navMenu");

menuBtn.addEventListener("click", function () {
    navMenu.classList.toggle("open");
    if (navMenu.classList.contains("open")) {
        menuBtn.textContent = "X";
    }
    else {
        menuBtn.textContent = "≡";
    }
});

const displayRandomCards = async() => {
    try{
        const response = await fetch("data/news.json");
        const news = await response.json();
        const shuffled = news.sort(() => Math.random() - 0.5);
        const randomNews = shuffled.slice(0,3);
        console.log(randomNews);

        function displayRandomNews(randomNews){
            randomNews.forEach(function (newss){
                const oCard = document.createElement("div");
                oCard.classList.add("Ocard");
                const randomCards = document.querySelector(".randomCards");
                randomCards.appendChild(oCard);
                const imagee = document.createElement("img");
                imagee.src = newss.image;
                oCard.appendChild(imagee);
                const taglinee = document.createElement("p");
                taglinee.classList.add("headline");
                taglinee.textContent = newss.category;
                oCard.appendChild(taglinee);
                const headline = document.createElement("h3");
                headline.textContent = newss.title;
                oCard.appendChild(headline);
                const summary = document.createElement("p");
                summary.classList.add("summary");
                summary.textContent = newss.summary;
                oCard.appendChild(summary);
                const read = document.createElement("a");
                read.href = "index.html";
                read.textContent = "Read More →"
                oCard.appendChild(read);
            });
        }
        displayRandomNews(randomNews);
    }
    catch(error){
        console.error(error);
    }
}
displayRandomCards();
const displayAllCards = async() => {
    try{
        const res = await fetch("data/news.json");
        const eNews =await res.json();

        function displaynews(eachNews){
            eachNews.forEach(function (newsss){
                const oCard = document.createElement("div");
                oCard.classList.add("Ocard");
                const randomCards = document.querySelector(".allCards");
                randomCards.appendChild(oCard);
                const imagee = document.createElement("img");
                imagee.src = newsss.image;
                oCard.appendChild(imagee);
                const taglinee = document.createElement("p");
                taglinee.classList.add("headline");
                taglinee.textContent = newsss.category;
                oCard.appendChild(taglinee);
                const headline = document.createElement("h3");
                headline.textContent = newsss.title;
                oCard.appendChild(headline);
                const summary = document.createElement("p");
                summary.classList.add("summary");
                summary.textContent = newsss.summary;
                oCard.appendChild(summary);
                const read = document.createElement("a");
                read.href = "index.html";
                read.textContent = "Read More →"
                oCard.appendChild(read);
            });
        }
        displaynews(eNews);
    }
    catch(error){
        console.error(error);
    }
}
displayAllCards();

const teamLogos = {
    "Arsenal FC": "images/arsenal.jpeg",
    "Coventry City FC": "images/coventry.jpeg",
    "Hull City AFC":"images/hull.jpeg" ,
    "Manchester United FC": "images/manu.jpeg",
    "Ipswich Town FC": "images/ipswich.jpeg",
    "Sunderland AFC": "images/sunderland.jpeg",
    "Nottingham Forest FC": "images/forest.jpeg",
    "Leeds United FC": "images/leeds.jpeg",
    "Everton FC": "images/everton.jpeg",
    "Crystal Palace FC":"images/palace.jpeg",
    "Brentford FC":"images/brentford.jpeg",
    "Tottenham Hotspur FC": "images/totte.jpeg",
    "Manchester City FC": "images/city.jpeg",
    "AFC Bournemouth FC": "images/mouth.jpeg",
    "Brighton & Hove Albion FC": "images/ton.jpeg",
    "Aston Villa FC": "images/villa.jpeg",
    "Newcastle United FC": "images/castle.jpeg",
    "Liverpool FC": "images/pool.jpeg",
    "Fulham FC":"images/fulham.jpeg",
    "Chelsea FC":"images/chel.jpeg"
}


async function getData() {
    try {
        const response = await fetch('https://raw.githubusercontent.com/openfootball/football.json/master/2026-27/en.1.json');
        if(!response.ok){
        throw new Error(`HTTP error: ${response.status}`);
        }
        const data = await response.json();
        console.log(data.matches);
        const now = new Date();
        const upcomingMatches = data.matches.filter(match => new Date(`${match.date}T${match.time}:00`) > now);
        const shuffledd = upcomingMatches.sort((a,b) => new Date(a.Date) - new Date(b.date));
        const randomMatches = shuffledd.slice(0,5);

        function displayMatchCards(randomMatches){
            randomMatches.forEach(function (matches){
                const fixturesContainer  = document.querySelector("#fixturesContainer");
                const matchCard = document.createElement("div");
                matchCard.classList.add("match-card");
                fixturesContainer.appendChild(matchCard);
                const league = document.createElement("p");
                league.classList.add("match-league");
                league.textContent = `English Premier League`
                matchCard.appendChild(league);
                const matchTeams = document.createElement("div");
                matchTeams.classList.add("match-teams") ;
                matchCard.appendChild(matchTeams);
                const team = document.createElement("div");
                team.classList.add("team");
                matchTeams.appendChild(team);
                const team1img = document.createElement("img");
                team1img.src =   teamLogos[matches.team1];
                team1img.alt = matches.team1;
                team.appendChild(team1img);
                const hometeam = document.createElement("span");
                hometeam.textContent = matches.team1;
                team.appendChild(hometeam);
                const team2 = document.createElement("div");
                team2.classList.add("team");
                matchTeams.appendChild(team2);
                const team2img = document.createElement("img");
                team2img.src = teamLogos[matches.team2];
                team2img.alt = matches.team2;
                team2.appendChild(team2img);
                const Awayteam = document.createElement("span");
                Awayteam.textContent = matches.team2;
                team2.appendChild(Awayteam);
                const matcdate = document.createElement("p");
                matcdate.classList.add("match-date");
                matcdate.textContent = `Date: ${matches.date}, Time: ${matches.time}`
                matchCard.appendChild(matcdate);
            });
        }
        displayMatchCards(randomMatches);
    }
    catch (error){
    console.error('Error:', error);
    }
}

getData();

async function getMatches() {
  try {
    const response = await fetch(
      "https://sportscore.com/api/widget/matches/?sport=football&limit=20"
    );

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const data = await response.json();

    const finishedMatches = data.matches.filter(match => match.status === "finished");
    const shuffled = finishedMatches.sort(() => Math.random()-0.5);
    const randomfinishedMatches = shuffled.slice(0,5);

    function displayfinished(randomfinishedMatches){
            randomfinishedMatches.forEach(function (matches){
                const fixturesContainer  = document.querySelector("#recentContainer");
                const matchCard = document.createElement("div");
                matchCard.classList.add("match-card");
                fixturesContainer.appendChild(matchCard);
                const league = document.createElement("p");
                league.classList.add("match-league");
                league.textContent = matches.competition;
                matchCard.appendChild(league);
                const matchTeams = document.createElement("div");
                matchTeams.classList.add("match-teams") ;
                matchCard.appendChild(matchTeams);
                const team = document.createElement("div");
                team.classList.add("team");
                matchTeams.appendChild(team);
                const team1img = document.createElement("img");
                team1img.src =   matches.home_logo;
                team1img.alt = matches.home;
                team.appendChild(team1img);
                const hometeam = document.createElement("span");
                hometeam.textContent = matches.home;
                team.appendChild(hometeam);

                const matchScore = document.createElement("div");
                matchScore.classList.add("match-score");
                matchTeams.appendChild(matchScore);
                const score = document.createElement("p");
                score.classList.add("score");
                score.textContent = `${matches.home_score} - ${matches.away_score}`;
                matchScore.appendChild(score);
                const status = document.createElement("span");
                status.classList.add("stat")
                status.textContent = matches.status_text;
                matchScore.appendChild(status);


                const team2 = document.createElement("div");
                team2.classList.add("team");
                matchTeams.appendChild(team2);
                const team2img = document.createElement("img");
                team2img.src = matches.away_logo;
                team2img.alt = matches.away;
                team2.appendChild(team2img);
                const Awayteam = document.createElement("span");
                Awayteam.textContent = matches.away;
                team2.appendChild(Awayteam);
                const dateTime = document.createElement("p");
                dateTime.classList.add("match-date");
                dateTime.textContent = new Date(matches.time).toLocaleString();
                matchCard.appendChild(dateTime);
            });
        }
        displayfinished(randomfinishedMatches);


  } catch (error) {
    console.error("Failed to fetch matches:", error);
  }
}

getMatches();

const year = document.querySelector("#yearmodified");
const curreny = new Date().getFullYear();
year.textContent = `© ${curreny} Football Hub | All rights reserved`



