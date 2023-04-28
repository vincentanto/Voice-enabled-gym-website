/*=============== SHOW MENU ===============*/
var navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/

const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
  const header = document.getElementById("header");
  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  this.scrollY >= 50
    ? header.classList.add("bg-header")
    : header.classList.remove("bg-header");
};
window.addEventListener("scroll", scrollHeader);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav__menu a[href*=" + sectionId + "]"
      );

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

/*=============== SCROLL REVEAL ANIMATION ===============*/

/*=============== CALCULATE JS ===============*/
const calculateForm = document.getElementById("calculate-form"),
  calculateCm = document.getElementById("calculate-cm"),
  calculateKg = document.getElementById("calculate-kg"),
  calculateMessage = document.getElementById("calculate-message");

const calculateBmi = (e) => {
  e.preventDefault();
  // check field have a value
  if (calculateCm.value === "" || calculateKg.value === "") {
    //Add and remove color
    calculateMessage.classList.remove("color-green");
    calculateMessage.classList.add("color-red");

    //show message
    calculateMessage.textContent = "Fill in the Height and Weight";
    //Remove message three second
    setTimeout(() => {
      calculateMessage.textContent = "";
    }, 3000);
  } else {
    //BMI formula
    const cm = calculateCm.value / 100,
      kg = calculateKg.value,
      bmi = Math.round(kg / (cm * cm));

    //show your health status
    if (bmi < 18.5) {
      calculateMessage.classList.add("color-green");
      calculateMessage.textContent = `Your BMI is ${bmi} and your are skinny`;
    } else if (bmi < 25) {
      calculateMessage.classList.add("color-green");
      calculateMessage.textContent = `Your BMI is ${bmi} and your are healthy`;
    } else {
      calculateMessage.classList.remove("color-green");
      calculateMessage.classList.add("color-red");
      calculateMessage.textContent = `Your BMI is ${bmi} and your are overweight`;
    }
    //toclear input field
    calculateCm.value = "";
    calculateKg.value = "";

    //Remove message five second
    setTimeout(() => {
      calculateMessage.textContent = "";
    }, 5000);
  }
};
calculateForm.addEventListener("submit", calculateBmi);

function checkDetails() {
  event.preventDefault(); // Prevent the default form submission behavior

  const name = document.getElementById("contact-user").value;
  const phone = document.getElementById("contact-phone").value;
  const detailsCheck = document.getElementById("detailsCheck");

  if (name.trim() === "" || phone.trim() === "") {
    detailsCheck.innerHTML = "Please enter your name and phone number";
    detailsCheck.style.color = "red"; // Set the color of the error message to red
  } else if (!/^\d{10}$/.test(phone)) {
    // Use regular expression to check if the phone number has 10 digits
    detailsCheck.innerHTML = "Please enter a valid 10-digit phone number";
    detailsCheck.style.color = "red"; // Set the color of the error message to red
  } else {
    detailsCheck.innerHTML = "Registration successful";
    detailsCheck.style.color = "#20fc03"; // Clear the color of the error message if there are no errors
    document.getElementById("contact-form").reset(); // Clear the form fields
  }
}
