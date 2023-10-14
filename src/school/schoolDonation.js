// document.addEventListener("DOMContentLoaded", function () {
//   document.querySelector(".donate-btn").addEventListener("click", function () {
//     let filler = document.getElementById("filler");
//     let width = parseInt(filler.style.width);
//     if (width < 100) {
//       width += 10;
//       filler.style.width = width + "%";
//     }
//   });

//   window.addEventListener("DOMContentLoaded", function () {
//     const buttons = document.querySelectorAll(".schoolButton");

//     buttons.forEach((button) => {
//       button.addEventListener("click", function (e) {
//         const rect = this.getBoundingClientRect();
//         const x = e.clientX - rect.left;
//         const y = e.clientY - rect.top;

//         // const buttonTop = e.target.offsetTop;
//         // const buttonLeft = e.target.offsetLeft;

//         // const xInside = x - buttonLeft;
//         // const yInside = y - buttonTop;

//         const circle = document.createElement("span");
//         circle.classList.add("circle");
//         circle.style.top = y + "px";
//         circle.style.left = x + "px";

//         this.appendChild(circle);

//         setTimeout(() => circle.remove(), 500);
//       });
//     });
//   });
// });

const buttons = document.querySelectorAll(".schoolButton");

buttons.forEach((button) => {
  button.addEventListener("click", function (e) {
    const x = e.pageX;
    const y = e.pageY;

    const buttonTop = e.target.offsetTop;
    const buttonLeft = e.target.offsetLeft;

    const xInside = x - buttonLeft;
    const yInside = y - buttonTop;

    const circle = document.createElement("span");
    circle.classList.add("circle");
    circle.style.top = yInside + "px";
    circle.style.left = xInside + "px";

    this.appendChild(circle);

    setTimeout(() => circle.remove(), 500);
  });
});

const img = document.querySelectorAll("#imgs img"); //here img is targeting all the images within the 'img' ID

let idx = 0; //this is to keep track of the current ID of the image

setInterval(run, 3000); //This code is just setting a delay of 2000ms before the run function is called again

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
