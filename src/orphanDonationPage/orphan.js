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
