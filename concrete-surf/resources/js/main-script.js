const navToggle = () => {
  const navIcon = document.querySelector(".navbar-icon");
  const nav = document.querySelector(".navbar");

  navIcon.addEventListener('click', () => {
    nav.classList.toggle('is-visible');
  })

}
navToggle();
