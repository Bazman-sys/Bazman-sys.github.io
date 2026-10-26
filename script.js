const liens = document.querySelectorAll('.navbar a');

liens.forEach(lien => {
  lien.addEventListener('click', () => {
    liens.forEach(l => l.classList.remove('active'));
    lien.classList.add('active');
  });
});