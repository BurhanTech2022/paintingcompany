function changeColor() {
   let desktopMenue = document.querySelector('.desktop__menu');
   let scrollValue = window.scrollY;
   if (scrollValue <=150) {
      desktopMenue.classList.remove('navColor');

   }
   else {
      desktopMenue.classList.add('navColor');
      // console.log(scrollValue);
   }

}
window.addEventListener('scroll', changeColor);

// Grap all variable needed
let mobile = document.querySelector('.mobile__menu');
let openMobile = document.querySelector('.modal__open');
let closeMobile = document.querySelector('.modal__close');
let mobileElement = document.querySelector('.menu__link')
let ancherTags = document.getElementsByTagName('a');
for(let i =0;i < ancherTags.length;i++){
   ancherTags[i].addEventListener('click',function(e){
      if(ancherTags){
         mobile.style.display = 'none';
         console.log(ancherTags[i]);
      }
   })
}

closeMobile.addEventListener('click',function(e) {
  if(closeMobile) {
     mobile.style.display = 'none';
  }

})


openMobile.addEventListener('click',function(e) {
    if(openMobile) {
       mobile.style.display = 'block';
    }
  
  })



//  form validation


let form = document.getElementById("contact__form");
let submitButton = document.querySelector(".form__btn")
let mobile__menu = document.querySelector(".mobile__menu")
let userName = document.getElementById("name");
let userEmail = document.getElementById("email");
 let userMessage = document.getElementById("message");
// let messageInput = document.querySelector(".user__message");
let errorMessage = document.querySelector(".errorMsg")
let successMsg = document.querySelector(".successMsg");

form.addEventListener("submit", function (event) {
  if (!formValidation(event)) {
    event.preventDefault();

  }
 console.log("hello");
}

);

function formValidation(event) {
  event.preventDefault(); // Prevent the form from submitting

  const puplicKey ="B9W97OfRZFVjjRzok";
  const serviceID = "service_t78x73u";
  const templateID = "template_xzgdodn";

//initialize email js with public key

emailjs.init(puplicKey);
const inputFields = {
      
  name: userName.value,
  email : userEmail.value,
  message : userMessage.value,

 }
emailjs.send(serviceID,templateID,inputFields).then(

)

  /* Preventing  submission if  the form is empty*/
  if (userName.value === "" || userEmail.value === "" || userMessage.value === "") {
    errorMessage.innerHTML = "All fields are required 👇🏽";
    errorMessage.style.color = "red"
    submitButton.disabled = "true";
    submitButton.style.cursor = "not-allowed";
    // setTimeout(function () {
    //   cancelForm();
    // }, 2500)
  } else {
    errorMessage.innerHTML = "Your Message is successfully sent";
    errorMessage.style.color = "green";
    submitButton.disabled = "true";
    submitButton.style.cursor = "not-allowed";
     setTimeout(function(){
      cancelForm();
    }, 3500)
  }
   

  

    
  let name = userName.value; // Get the value of the input field
  let email = userEmail.value;
  let message = userMessage.value
  console.log(name); // Log the input value
  console.log(email); // Log the input value
  console.log(message); // Log the input value
  form.reset(); // Clear the entire form
  
}

//Opening the model-form

let Form__content = document.getElementById('formModel');

function openModelForm() {
  if (Form__content) {
    Form__content.style.display = 'block';
    mobile__menu.style.display = 'none';
    console.log('model-form is visible');
  } else {
    console.log('model-form is not visible');
  }
}


//Cance model-form
function cancelForm() {

  if (Form__content) {
    Form__content.style.display = "none";
   //  hamburger.style.display ="flex";
    // sections .style.display = "block";
    // hero.style.display = "block";
    // errormessage should disappear when the form is closed
    form.reset();
    // window.location.reload(true);
    errorMessage.innerHTML = "Send us a message"
    errorMessage.style.color = "blue"


    console.log('Cancelled');
  } else {
    console.log('Form container not found');
  }
}

// const goingService = document.querySelector('.service')
// goingService.addEventListener('click', (e) => {
//   let isVisible = navMenu.getAttribute('data-visible');
//   if (isVisible == "true") {
//     //Qari
//     navMenu.setAttribute('data-visible', 'false');
//     icons[0].setAttribute('data-visible', 'true');
//     icons[1].setAttribute('data-visible', 'false');

//   } else if (isVisible == "false") {
//     //soo bandhig;
//     navMenu.setAttribute('data-visible', 'true');

//   }
// })
// All animations will take exactly 500ms
var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
}); 