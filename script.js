const typingText = document.getElementById("typing-text");

const words = [
  "Aspiring Data Analyst",
  "AI/ML Enthusiast",
  "Web Developer",
  "Problem Solver"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect(){

  const currentWord = words[wordIndex];

  if(isDeleting){
    typingText.textContent =
      currentWord.substring(0,charIndex--);
  }

  else{
    typingText.textContent =
      currentWord.substring(0,charIndex++);
  }

  let speed = isDeleting ? 60 : 120;

  if(!isDeleting &&
    charIndex === currentWord.length){

    speed = 1500;
    isDeleting = true;
  }

  else if(isDeleting &&
    charIndex === 0){

    isDeleting = false;
    wordIndex =
      (wordIndex + 1) % words.length;
  }

  setTimeout(typeEffect,speed);
}

typeEffect();

const themeToggle = document.getElementById("theme-toggle");

  themeToggle.addEventListener("click", () => {
    const currentTheme =
      document.documentElement.getAttribute("data-theme");

    if (currentTheme === "light") {
      document.documentElement.setAttribute("data-theme", "dark");
      themeToggle.textContent = "☀️";
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      themeToggle.textContent = "🌙";
    }
  });
