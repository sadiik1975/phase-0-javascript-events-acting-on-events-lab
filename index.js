function moveDodgerLeft() {
  const dodger = document.getElementById("dodger");
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10) || 100; // Fallback to 0 if NaN
  console.log(left)
  if (left > 0) {
      dodger.style.left = `${left - 1}px`;
  }
}

function moveDodgerRight() {
  const dodger = document.getElementById("dodger");
  const rightNumbers = dodger.style.left.replace("px", "");
  const right = parseInt(rightNumbers, 10) || 100; // Fallback to 0 if NaN
  const gameWidth = document.getElementById("game").clientWidth;

  if (right < 360 ) { // Assumes dodger width is 40px
      dodger.style.left = `${right + 1}px`;
  }
}

// Initialization code
//document.addEventListener('DOMContentLoaded', () => {
 // const dodger = document.getElementById("dodger");
  // Initialize dodger's position
  //if (!dodger.style.left) {
    //  dodger.style.left = "0px"; // Ensure there is a valid left position
 // }

  document.addEventListener("keydown", function (e) {
    console.log (e.key)
      if (e.key === "ArrowLeft") {
          moveDodgerLeft();
      } else if (e.key === "ArrowRight") {
          moveDodgerRight();
      }
  });
//});
