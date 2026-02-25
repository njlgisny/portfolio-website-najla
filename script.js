const menu = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-xmark');
    menu.classList.toggle('fa-bars');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-xmark');
    menu.classList.add('fa-bars');
    navbar.classList.remove('active');
}

function downloadInfografis() {
  const link = document.createElement("a");
  link.href = "assets/infografis.png";
  link.download = "infografis.png";
  link.click();
}