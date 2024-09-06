

// Grab all variables needed
const desktopMenu = document.querySelector('.desktop__menu');
const mobileMenu = document.querySelector('.mobile__menu');
const openMobile = document.querySelector('.modal__open');
const closeMobile = document.querySelector('.modal__close');
const anchorTags = document.getElementsByTagName('a');
const form = document.getElementById("contact__form");
const submitButton = document.querySelector(".form__btn");
const userName = document.getElementById("name");
const userEmail = document.getElementById("email");
const userMessage = document.getElementById("message");
const errorMessage = document.querySelector(".errorMsg");
const hero = document.querySelector(".hero");
const mainSection = document.getElementById("main");
const logo = document.querySelector(".logo");
const FormContent = document.getElementById('formModel');

// Change menu color on scroll
function changeColor() {
   const scrollValue = window.scrollY;
   if (scrollValue <= 150) {
      desktopMenu.classList.remove('navColor');
   } else {
      desktopMenu.classList.add('navColor');
   }
}
window.addEventListener('scroll', changeColor);

// Handle menu link clicks
Array.from(anchorTags).forEach(anchor => {
   anchor.addEventListener('click', () => {
      if (mobileMenu) {
         mobileMenu.style.display = 'none';
      }
   });
});

// Handle mobile menu toggling
if (openMobile) {
   openMobile.addEventListener('click', () => {
      mobileMenu.style.display = 'block';
   });
}

if (closeMobile) {
   closeMobile.addEventListener('click', () => {
      mobileMenu.style.display = 'none';
   });
}

// Form validation and submission
form.addEventListener("submit", (event) => {
   if (formValidation(event)) {
      event.preventDefault();
   }
});

function formValidation(event) {
   event.preventDefault(); // Prevent the form from submitting

   const publicKey = "B9W97OfRZFVjjRzok";
   const serviceID = "service_t78x73u";
   const templateID = "template_xzgdodn";

   emailjs.init(publicKey);

   const inputFields = {
      name: userName.value,
      email: userEmail.value,
      message: userMessage.value,
   };

   if (userName.value === "" || userEmail.value === "" || userMessage.value === "") {
      errorMessage.innerHTML = "All fields are required 👇🏽";
      errorMessage.style.color = "red";
      submitButton.disabled = true;
      submitButton.style.cursor = "not-allowed";
   } else {
      emailjs.send(serviceID, templateID, inputFields)
         .then(() => {
            errorMessage.innerHTML = "Your Message is successfully sent";
            errorMessage.style.color = "green";
            submitButton.disabled = true;
            submitButton.style.cursor = "not-allowed";
            setTimeout(cancelForm, 3500);
         })
         .catch(error => {
            console.error('Error sending message:', error);
            errorMessage.innerHTML = "An error occurred, please try again.";
            errorMessage.style.color = "red";
         });

      form.reset(); // Clear the entire form
   }

   return false; // Ensure form submission is prevented
}

// Open and close form modal
function openModelForm() {
   if (FormContent) {
      FormContent.style.display = 'block';
      desktopMenu.style.background = "#3f3f48";
      hero.style.display = 'none';
      mobileMenu.style.display = 'none';
      mainSection.style.display = 'none';
   }
}

function cancelForm() {
   if (FormContent) {
      FormContent.style.display = "none";
      desktopMenu.style.background = "#3f3f46";
      logo.style.display = 'block';
      hero.style.display = 'block';
      mainSection.style.display = 'block';
      errorMessage.innerHTML = "Send us a message";
      errorMessage.style.color = "blue";
      form.reset();
   }
}

// Smooth scrolling
new SmoothScroll('a[href*="#"]', {
   speed: 1000,
   speedAsDuration: true,
});
