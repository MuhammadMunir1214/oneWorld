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
  });
});
