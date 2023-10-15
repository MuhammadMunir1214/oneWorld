document.addEventListener("DOMContentLoaded", function() {
    var countries = document.querySelectorAll('.country');
    var totalCountries = countries.length;
    var radius = '40%'; // Adjust this value to set the circle size.

    for (var i = 0; i < totalCountries; i++) {
        var angle = i * (360 / totalCountries);
        var x = 50 + Math.sin(angle * (Math.PI / 180)) * parseInt(radius, 10) + '%';
        var y = 50 + Math.cos(angle * (Math.PI / 180)) * -parseInt(radius, 10) + '%';

        countries[i].style.left = x;
        countries[i].style.top = y;
    }

    const target = document.getElementById('typeText');
    
    const observer = new IntersectionObserver(function(entries) {
        if(entries[0].isIntersecting === true) {
            target.classList.add('start-typing');  // Add a class to start the animation
            observer.disconnect(); // Stop observing after the animation starts
        }
    }, { threshold: [0] });  // start when at least 0% of the target is visible

    observer.observe(target);
});

/*USED UDEMY COURSE */

const imgContainers = document.querySelectorAll(".image-container");

imgContainers.forEach((container, index) => {
  let idx = 0;
  setInterval(() => {
    idx++;
    changeImage(container, idx);
    if (idx >= container.querySelectorAll('img').length - 1) {
      idx = -1; // reset index to -1 so that it becomes 0 on the next interval
    }
  }, 2000);
});

function changeImage(container, idx) {
  const imageWidth = container.querySelector('img').offsetWidth;
  container.style.transform = `translateX(${-idx * imageWidth}px)`;
}

// This is for the ripple effect
const buttons = document.querySelectorAll(".warTornButton"); //This select all elements with the class "orphanButton" and store them in the "buttons" variable

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




