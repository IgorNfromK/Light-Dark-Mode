//select elements

const modeSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById("nav");
const toggleIcon = document.getElementById("toggle-icon");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const textBox = document.getElementById("text-box");

const DARK = "dark";
const LIGHT = "light";

//image swith
function imageAndColorHandler(color) {
  document.documentElement.setAttribute("data-theme", color);
  localStorage.setItem("theme", color);
  toggleIcon.children[0].textContent =
    color === DARK ? `Dark Mode` : "Light Mode";
  nav.style.backgroundColor =
    color === DARK ? `rgb(0 0 0/50%)` : `rgb(255 255 255/50%)`;
  textBox.style.backgroundColor =
    color === DARK ? `rgb(255 255 255/50%)` : `rgb(0 0 0/50%)`;
  color === DARK
    ? toggleIcon.children[1].classList.replace("fa-sun", "fa-moon")
    : toggleIcon.children[1].classList.replace("fa-moon", "fa-sun");
  image1.src = `img/undraw_proud_coder_${color}.svg`;
  image2.src = `img/undraw_feeling_proud_${color}.svg`;
  image3.src = `img/undraw_conceptual_idea_${color}.svg`;
}

// switch theme dynamically

const switchTheme = (event) =>
  event.target.checked
    ? imageAndColorHandler(DARK)
    : imageAndColorHandler(LIGHT);

//listen for events
modeSwitch.addEventListener("change", switchTheme);

//retrieve theme from local storage

const currentSetTheme = localStorage.getItem("theme");

if (currentSetTheme) {
  document.documentElement.setAttribute("data-theme", currentSetTheme);
  if (currentSetTheme === DARK) {
    modeSwitch.checked = true;
    imageAndColorHandler(DARK);
  }
}
