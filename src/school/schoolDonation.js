document.querySelector(".donate-btn").addEventListener("click", function () {
  let filler = document.getElementById("filler");
  let width = parseInt(filler.style.width);
  if (width < 100) {
    width += 10;
    filler.style.width = width + "%";
  }
});
