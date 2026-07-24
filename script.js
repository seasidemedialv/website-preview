const testButton = document.querySelector("#test-button");
const confirmation = document.querySelector("#confirmation");
const year = document.querySelector("#year");

year.textContent = new Date().getFullYear();

testButton.addEventListener("click", () => {
  const isActive = testButton.getAttribute("aria-pressed") === "true";

  testButton.setAttribute("aria-pressed", String(!isActive));
  testButton.textContent = isActive ? "Test interaction" : "It works!";
  confirmation.textContent = isActive
    ? ""
    : "Everything is connected and responding correctly.";
});
