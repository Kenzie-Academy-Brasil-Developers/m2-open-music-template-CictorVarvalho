/* Desenvolva sua lógica aqui ... */
export const theme = () => {
  const btn__theme = document.querySelector(".header__btn");
  const html = document.querySelector("html");

  if(localStorage.getItem('@openMusic:theme')){
      btn__theme.classList.toggle("header__btn--dark-mode");
      html.classList.add('dark-mode');
  }
  
  btn__theme.addEventListener("click", (event)=>{
      btn__theme.classList.toggle("header__btn--dark-mode");
      html.classList.toggle("dark-mode");
      if(html.classList.contains("dark-mode")) {
          localStorage.setItem('@openMusic:theme', 'dark-mode')
      } else {
          localStorage.removeItem('@openMusic:theme', 'dark-mode')
      }
  })
}