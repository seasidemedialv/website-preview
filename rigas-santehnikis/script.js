const menuButton = document.querySelector("#menu-button");
const mobileNav = document.querySelector("#mobile-nav");
const requestForm = document.querySelector("#request-form");
const formStatus = document.querySelector("#form-status");
const year = document.querySelector("#year");

year.textContent = new Date().getFullYear();

menuButton.addEventListener("click", () => {
  const isOpen = mobileNav.classList.toggle("open");
  document.body.classList.toggle("menu-open", isOpen);
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Aizvērt izvēlni" : "Atvērt izvēlni");
});

mobileNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileNav.classList.remove("open");
    document.body.classList.remove("menu-open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Atvērt izvēlni");
  });
});

requestForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!requestForm.checkValidity()) {
    formStatus.textContent = "Lūdzu, aizpildiet visus obligātos laukus.";
    requestForm.reportValidity();
    return;
  }

  formStatus.textContent =
    "Testa forma darbojas — dati netika nosūtīti. Reālā vietnē te pieslēgtu pieteikumu sistēmu.";
  requestForm.reset();
});
