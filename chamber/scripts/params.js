const params = new URLSearchParams(window.location.search);

const fname = params.get("firstName");
const ttt = params.get("tt");
const email = params.get("email");
const phone = params.get("phone");
const ogName = params.get("ogName");
const memb = params.get("membershiprequired");
const times = params.get("timestamp");


document.querySelector("#firstNamee").textContent = fname;
document.querySelector("#ogTitle").textContent = ttt;
document.querySelector("#emaill").textContent = email;
document.querySelector("#phonee").textContent = phone;
document.querySelector("#ogName").textContent = ogName;
document.querySelector("#memb").textContent = memb;
document.querySelector("#timee").textContent = times;
