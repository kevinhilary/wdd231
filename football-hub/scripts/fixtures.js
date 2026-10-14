async function getDataa() {
    try {
        const response = await fetch('https://raw.githubusercontent.com/openfootball/football.json/master/2026-27/en.1.json');
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        const data = await response.json();
        const now = new Date();
        const upcomingMatchess = data.matches.filter(match => new Date(`${match.date}T${match.time}:00`) > now);
        console.log(upcomingMatchess);

        function displayMatchCardss(upcomingMatches) {
            upcomingMatches.forEach(function (matches) {
                const fixturesContainer = document.querySelector("#fixturessContainer");
                const matchCard = document.createElement("div");
                matchCard.classList.add("match-card");
                fixturesContainer.appendChild(matchCard);
                const league = document.createElement("p");
                league.classList.add("match-league");
                league.textContent = `English Premier League`
                matchCard.appendChild(league);
                const matchTeams = document.createElement("div");
                matchTeams.classList.add("match-teams");
                matchCard.appendChild(matchTeams);
                const team = document.createElement("div");
                team.classList.add("team");
                matchTeams.appendChild(team);
                const team1img = document.createElement("img");
                team1img.src = teamLogos[matches.team1];
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
        displayMatchCardss(upcomingMatchess);
    }
    catch (error) {
        console.error('Error:', error);
    }
}

getDataa();

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

        function displayfinished(finishedMatches) {
            finishedMatches.forEach(function (matches) {
                const fixturesContainer = document.querySelector("#recenttContainer");
                const matchCard = document.createElement("div");
                matchCard.classList.add("match-card");
                fixturesContainer.appendChild(matchCard);
                const league = document.createElement("p");
                league.classList.add("match-league");
                league.textContent = matches.competition;
                matchCard.appendChild(league);
                const matchTeams = document.createElement("div");
                matchTeams.classList.add("match-teams");
                matchCard.appendChild(matchTeams);
                const team = document.createElement("div");
                team.classList.add("team");
                matchTeams.appendChild(team);
                const team1img = document.createElement("img");
                team1img.src = matches.home_logo;
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
        displayfinished(finishedMatches);


    } catch (error) {
        console.error("Failed to fetch matches:", error);
    }
}

getMatches();