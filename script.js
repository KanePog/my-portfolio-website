const numBlobs = 7;
const container = document.getElementById('blobs-container');

for (let i = 0; i < numBlobs; i++) {
  const blob = document.createElement('div');
  blob.classList.add('blob');
  container.appendChild(blob);
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));

    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

window.addEventListener('scroll', () => {
  console.log('scroll fired!');
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

let randomNumber = Math.floor(Math.random() * 100) + 1;
  let attempts = 10;

  function checkGuess() {
    const inputElement = document.getElementById("guess");
    const feedbackElement = document.getElementById("feedback");
    const guess = parseInt(inputElement.value, 10);

    if (guess === randomNumber) {
      feedbackElement.innerHTML = "Congratulations!";
      feedbackElement.style.color = "#77a373";
      attempts = 0;
    } else {
      attempts--;
      if (attempts > 0) {
        feedbackElement.innerHTML = guess < randomNumber
          ? "Too low! Try again. " + attempts + " attempts remaining."
          : "Too high! Try again. " + attempts + " attempts remaining.";
        feedbackElement.style.color = "#ff404c";
      } else {
        feedbackElement.innerHTML = "Sorry, you're out of attempts!";
        feedbackElement.style.color = "#ff404c";
      }
    }
  }

  function restartGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 10;
    document.getElementById("guess").value = '';
    document.getElementById("feedback").innerHTML = '';
  }