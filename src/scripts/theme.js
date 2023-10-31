/* Desenvolva sua lógica aqui ... */
function handleDarkMode() {
    const darkModeButton = document.querySelector(".header__btn");
    const html = document.querySelector("html");
  
    const darkMode = localStorage.getItem("@openMusic:theme");
  
    if (darkMode) {
      html.classList.add("dark-mode");
      darkModeButton.classList.toggle("header__btn--dark-mode");
    }
  
    darkModeButton.addEventListener("click", (event) => {
      html.classList.toggle("dark-mode");
      darkModeButton.classList.toggle("header__btn--dark-mode");
  
      if (html.classList.contains("dark-mode")) {
        localStorage.setItem("@openMusic:theme", "dark");
      } else {
        localStorage.removeItem("@openMusic:theme");
      }
    });
  }
  
  handleDarkMode();