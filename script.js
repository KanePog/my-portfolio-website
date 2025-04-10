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


