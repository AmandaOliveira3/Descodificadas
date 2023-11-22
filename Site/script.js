const hamburguer = document.querySelector(".hamburguer")
const navMenu = document.querySelector(".section-library-right")


hamburguer.addEventListener("click", ()=>{
    hamburguer.classList.toggle('active');
    navMenu.classList.toggle('active');
})