/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */
const sections = document.getElementsByTagName("section");
const ul = document.querySelector("ul");
const bar = document.getElementsByClassName("fa")[0];
const lists = document.getElementsByTagName("li");
/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
const buildNavBar = function () {
  const links = [];
  for (const section of sections) {
    links.push(
      `<a class="menu__link" href="#${section.id}">${section.dataset.nav}</a>`
    );
  }
  //------fragmentation-----------
  let fragment = document.createDocumentFragment();
  links.forEach(function (link) {
    let li = document.createElement("li");
    li.innerHTML = link;
    fragment.appendChild(li);
  });

  ul.appendChild(fragment);
};

// Add class 'active' to section when near top of viewport
const setActive = function () {
  for (const section of sections) {
    if (
      section.getBoundingClientRect().top > 0 &&
      section.getBoundingClientRect().top < 400
    ) {
      for (const section of sections) {
        section.classList.remove("your-active-class");
        document
          .querySelector(`[href="#${section.id}"]`)
          .classList.remove("active");
      }
      section.classList.add("your-active-class");
      document.querySelector(`[href="#${section.id}"]`).classList.add("active");
    }
  }
};

// Scroll to anchor ID using scrollTO event
const smothScroll = function (event) {
  if (event.target.getAttribute("href")) {
    const clickedSectionId = event.target.getAttribute("href").substring(1);
    const clickSection = document.getElementById(clickedSectionId);
    console.log(clickSection);
    clickSection.scrollIntoView({ behavior: "smooth", block: "center" });
  }
};
/**
 * End Main Functions
 * Begin Events
 *
 */
// Build menu
document.addEventListener("DOMContentLoaded", buildNavBar);

// Scroll to section on link click
ul.addEventListener("click", function (event) {
  event.preventDefault();
  smothScroll(event);
});
// Set sections as active
document.addEventListener("scroll", setActive);

//Responsive menu-Bar
bar.addEventListener("click", function () {
  
  
  if(this.classList.contains("fa-bars"))
{
  this.classList.remove("fa-bars");
  this.classList.add("fa-window-close");
  ul.classList.remove("d-none");
  ul.classList.add("d-block");
}
else
{
  this.classList.remove("fa-window-close");
  this.classList.add("fa-bars");
  ul.classList.remove("d-block");
  ul.classList.add("d-none");
}

});
