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
