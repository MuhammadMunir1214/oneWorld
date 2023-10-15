/*USED UDEMY COURSE */

const img = document.querySelectorAll("#imgs img"); //here img is targeting all the images within the 'img' ID

let idx = 0; //this is to keep track of the current ID of the image

setInterval(run, 2000); //This code is just setting a delay of 2000ms before the run function is called again

//we excecute this function which changes the image, every 2000ms
function run() {
  idx++;
  changeImage();
}

function changeImage() {
  //This condition allows for the image to go back to the first image after trying to go past the last one by setting 'index = 0'
  if (idx > img.length - 1) {
    idx = 0;
  }
  //this is what gives the animation of it moving like a slideshow, moves by 500px because it is the width of the carousel container, therefore the image
  imgs.style.transform = `translateX(${-idx * 500}px)`;
}

const buttons = document.querySelectorAll(".orphanButton"); //This select all elements with the class "schoolButton" and store them in the "buttons" variable

buttons.forEach((button) => {
  // This is a loop that goes through each button and adds an event listener to each one
  button.addEventListener("click", function (e) {
    // This adds a click event listener to each button

    // This is to get the x and y coordinates of the button
    const x = e.pageX;
    const y = e.pageY;

    // This is to get the position of the button
    const buttonTop = e.target.offsetTop;
    const buttonLeft = e.target.offsetLeft;

    // This is to get the position of the click inside the button
    const xInside = x - buttonLeft;
    const yInside = y - buttonTop;

    //This is to create the span element with the class "circle" for the animations
    const circle = document.createElement("span");
    circle.classList.add("circle");
    circle.style.top = yInside + "px"; // This is to set the top position of the circle
    circle.style.left = xInside + "px"; //This is to set the left position of the circle

    this.appendChild(circle); //This is to append the circle to the button

    setTimeout(() => circle.remove(), 500); // this is to remove the circle after 500ms

    // ADDING THE THANK YOU TEXT AFTER THE USER DONATES


        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const phoneNumber = document.getElementById('phoneNumber').value;
        const email = document.getElementById('email').value;
        const creditCard = document.getElementById('creditCard').value;


        // Display a thank you message
        if (firstName && lastName && phoneNumber && email  && creditCard) {
        const thankYouMessage = document.createElement('p');
        thankYouMessage.textContent = 'Thank you for your donation!';
        thankYouMessage.style.color = 'red';
    
        // Insert the thank you message after the button
        button.insertAdjacentElement('afterend', thankYouMessage);
    
        // Remove the thank you message after a few seconds
        setTimeout(() => thankYouMessage.remove(), 3000);
    
        // Reset input values after a delay
        setTimeout(() => {
          const firstName = document.getElementById('firstName');
          const lastName = document.getElementById('lastName');
          const phoneNumber = document.getElementById('phoneNumber');
          const email = document.getElementById('email');
          const customAmount = document.querySelector('input[name="customAmount"]');
          const recurringPayment = document.querySelector('input[name="recurringPayment"]');
          const creditCard = document.getElementById('creditCard');
    
          // Clear input values
          firstName.value = '';
          lastName.value = '';
          phoneNumber.value = '';
          email.value = '';
          customAmount.value = '';
          recurringPayment.checked = false;
          const amountRadios = document.querySelectorAll('input[name="amount"]');
          amountRadios.forEach((radio) => (radio.checked = false));
          creditCard.value = '';
        }, 2000);
      }
  });
});