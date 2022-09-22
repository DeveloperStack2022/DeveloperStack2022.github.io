/*==================== SHOW MENU ====================*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show-menu");
    });
  }
};

showMenu("nav-toggle", "nav-menu");
/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/

/*==================== SHOW SCROLL TOP ====================*/

/*==================== DARK LIGHT THEME ====================*/
const $ = document;
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "bx-sun";

//previus select
const selectedtheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");
//
function getCurrentTheme() {
  return document.body.classList.contains(darkTheme) ? "dark" : "light";
}

const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "box-moon" : "bx-sun";

if (selectedtheme) {
  $.body.classList[selectedtheme == "dark" ? "add" : remove](darkTheme);
  themeButton.classList[selectedIcon == "bx-moon" ? "add" : "remove"](
    iconTheme
  );
}

themeButton.addEventListener("click", () => {
  $.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);

  localStorage.setItem("selected-theme", getCurrentTheme);
  localStorage.setItem("selected-icon", getCurrentIcon);
});
/*==================== REDUCE THE SIZE AND PRINT ON AN A4 SHEET ====================*/
function scaleCv() {
  document.body.classList.add("scale-cv");
}

/*==================== REMOVE THE SIZE WHEN THE CV IS DOWNLOADED ====================*/
function removeScale() {
  document.body.classList.remove("scale-cv");
}
/*==================== GENERATE PDF ====================*/
// PDF generated area
let areaCv = document.getElementById("area-cv");
let resumeButton = document.getElementById("resume-button");

// Html2pdf options
let opt = {
  margin: 0,
  filename: "LuisZapata.pdf",
  image: { type: "jpeg", quality: 0.98 },
  html2canvas: { scale: 4 },
  jsPDF: { format: "a4", orientation: "portrait" },
};
// Function to call areaCv and Html2Pdf options
function generateResume() {
  html2pdf(areaCv, opt);
}
// When the button is clicked, it executes the three functions
resumeButton.addEventListener("click", () => {
  // 1. The class .scale-cv is added to the body, where it reduces the size of the elements
  scaleCv();
  // 2. The PDF is generated
  generateResume();
  // 3. The .scale-cv class is removed from the body after 3 seconds to return to normal size.
  setTimeout(removeScale, 3000);
});
