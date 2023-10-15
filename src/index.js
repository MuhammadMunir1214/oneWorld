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
