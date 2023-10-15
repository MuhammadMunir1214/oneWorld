// This is for the Auto-Text Effect on the landing page

const textEl = document.getElementById("text"); //This gets the HTML element id named "text"
const text = "Together, We Can     "; // This is the text that will be displayed
let idx = 1; // This is the starting index
let speed = 300; // This is the speed of the text being displayed

writeText();

function writeText() {
  // This defines the func.
  textEl.innerText = text.slice(0, idx); // This wil set the content of the "textEl" element to a slice of the "text" string

  idx++; //This increments

  if (idx > text.length) {
    //This simpley checks if the idx is greater than the text length
    idx = 1;
  }

  setTimeout(writeText, speed); //This will continously call the function at the set speed
}


// This is for the testimonial section on the landing page

const sliderContainer = document.querySelector('.slider-container')
const slideRight = document.querySelector('.right-slide')
const slideLeft = document.querySelector('.left-slide')
const upButton = document.querySelector('.up-button')
const downButton = document.querySelector('.down-button')
const slidesLength = slideRight.querySelectorAll('div').length

let activeSlideIndex = 0

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`

upButton.addEventListener('click', () => changeSlide('up'))
downButton.addEventListener('click', () => changeSlide('down'))

const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight
    if(direction === 'up') {
        activeSlideIndex++
        if(activeSlideIndex > slidesLength - 1) {
            activeSlideIndex = 0
        }
    } else if(direction === 'down') {
        activeSlideIndex--
        if(activeSlideIndex < 0) {
            activeSlideIndex = slidesLength - 1
        }
    }

    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
    slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
}