const navbutton = document.querySelector('#ham-btn');
const navlinks = document.querySelector('#nav-bar');

navbutton.addEventListener('click', () => { 
    navbutton.classList.toggle('show');
    navlinks.classList.toggle('show');
 });

 const year = document.getElementById('year');
 year.textContent = new Date().getFullYear();

 const lastModification = document.getElementById('lastmodification');
 const lastModDate = new Date(document.lastModified);
 lastModification.textContent = `Last Modification: ${lastModDate.toLocaleString()}`;