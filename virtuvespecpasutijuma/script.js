document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("mobBtn");
  const nav = document.getElementById("mobNav");
  if (button && nav) {
    button.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      button.setAttribute("aria-expanded", String(open));
    });
    nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
      nav.classList.remove("open");
      button.setAttribute("aria-expanded", "false");
    }));
  }

  document.querySelectorAll("[data-demo-form]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const message = form.querySelector(".form-status");
      if (!message) return;
      message.textContent = "Šī ir priekšskatījuma forma. Dati netika nosūtīti.";
      message.classList.add("visible");
    });
  });

  document.querySelectorAll(".faq-q").forEach((question) => {
    question.addEventListener("click", () => {
      const item = question.closest(".faq-item");
      const wasOpen = item.classList.contains("open");
      document.querySelectorAll(".faq-item.open").forEach((openItem) => {
        openItem.classList.remove("open");
        openItem.querySelector(".faq-q")?.setAttribute("aria-expanded", "false");
      });
      if (!wasOpen) {
        item.classList.add("open");
        question.setAttribute("aria-expanded", "true");
      }
    });
  });

  const header = document.getElementById("siteHeader");
  const floating = document.getElementById("floatCta");
  window.addEventListener("scroll", () => {
    header?.classList.toggle("scrolled", window.scrollY > 60);
    floating?.classList.toggle("visible", window.scrollY > 360);
  }, { passive: true });
});
