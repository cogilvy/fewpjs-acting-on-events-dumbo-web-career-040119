// First we need to find the 'dodger' element.
var dodger = document.getElementById('dodger');

// This function will be how the dodger moves left
function moveDodgerLeft() {
  // dodger.style.left is the coordinate of where the dodger is.
  // We want to 'replace' the coordinate (180px) with a blank slate first.
  var leftNumbers = dodger.style.left.replace('px', '');

  // Then use parseInt to turn that string into a number.
  var left = parseInt(leftNumbers, 10)
  // Then reassign the value of the coordinate to 1 less than it is now
  // So if it was 180px from the left, it would then be 179px from the left
  // making it close to the left wall aka move left!
  if (left > 0) {
    dodger.style.left = `${left - 1}px`
  }
}

// This function will be how the dodger moves right
function moveDodgerRight() {
  var leftNumbers = dodger.style.left.replace('px', '');
  var left = parseInt(leftNumbers, 10)
  if (left > 0) {
    dodger.style.left = `${left + 1}px`
  }
}

// Make the dodger move to the left
document.addEventListener('keydown', function(event) {
  if (event.key === "ArrowLeft") {
    moveDodgerLeft()
  }
})

// Make the dodger move to the right
document.addEventListener('keydown', function(e) {
  if (event.key === "ArrowRight") {
    moveDodgerRight()
  }
})
