function showSection(sectionId) {
  const sections = document.querySelectorAll('.content');
  sections.forEach(sec => sec.classList.remove('active'));

  document.getElementById(sectionId).classList.add('active');
}

// Game logic
let score = 0;
function increaseScore() {
  score++;
  document.getElementById('score').innerText = score;
}

// Quotes
const quotes = [
  "Discipline is the bridge between goals and success.",
  "Your mindset decides your future.",
  "Small progress is still progress.",
  "Games train the brain when used wisely.",
  "Consistency beats talent."
];

function generateQuote() {
  const random = Math.floor(Math.random() * quotes.length);
  document.getElementById('quoteText').innerText = quotes[random];
}
