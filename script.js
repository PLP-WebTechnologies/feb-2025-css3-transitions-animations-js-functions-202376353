// Select elements
const box = document.getElementById('box');
const saveButton = document.getElementById('saveButton');
const loadButton = document.getElementById('loadButton');

// Function to trigger an animation on the box
function triggerAnimation() {
  box.classList.add('animate-box');
  setTimeout(() => {
    box.classList.remove('animate-box');
  }, 1000); // Match the duration of the animation in CSS
}

// Event listener to change the box's background color and trigger animation
box.addEventListener('click', () => {
  const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  box.style.backgroundColor = randomColor;
  triggerAnimation();
});

// Save the current background color to localStorage
saveButton.addEventListener('click', () => {
  const currentColor = box.style.backgroundColor;
  localStorage.setItem('boxColor', currentColor);
  alert('Color saved!');
});

// Load the saved background color from localStorage
loadButton.addEventListener('click', () => {
  const savedColor = localStorage.getItem('boxColor');
  if (savedColor) {
    box.style.backgroundColor = savedColor;
    alert('Color loaded!');
  } else {
    alert('No color saved!');
  }
});