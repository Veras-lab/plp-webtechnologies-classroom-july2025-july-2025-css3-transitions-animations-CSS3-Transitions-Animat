// Part 2: Functions, Parameters, Scope

// Global scope variable
let globalCount = 0;

// Function with parameter + return value
function doubleValue(num) {
  return num * 2;
}

// Function demonstrating local scope
function increaseCount() {
  let localCount = 1;
  globalCount += localCount;
  console.log("Global Count:", globalCount);
}

// Reusable function to toggle a class (used for animations)
function toggleAnimation(elementId, className) {
  const element = document.getElementById(elementId);
  element.classList.remove(className); // reset if already animating

  // Force reflow for restart
  void element.offsetWidth;
  element.classList.add(className);
}

// Part 3: Combining CSS + JS

// Animate box on button click
document.getElementById("animateBtn").addEventListener("click", () => {
  toggleAnimation("animateBox", "animate");
  increaseCount(); // demonstrate scope
  console.log("Double of globalCount:", doubleValue(globalCount));
});

// Modal popup logic
const modal = document.getElementById("popupModal");
document.getElementById("openModal").addEventListener("click", () => {
  modal.style.display = "flex";
});
document.getElementById("closeModal").addEventListener("click", () => {
  modal.style.display = "none";
});
