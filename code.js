const desktopClickMenu = document.querySelector(".navbar-email")
const mobileClickMenu = document.querySelector(".menu")
const desktopMenu = document.querySelector(".desktop-menu")
const mobileMenu = document.querySelector(".mobile-menu")
desktopClickMenu.addEventListener("click", toggleMenuDesktop)
mobileClickMenu.addEventListener("click", toggleMenuMobile)

const shoppingCartIcon = document.querySelector(".navbar-shopping-cart")
const aside = document.querySelector(".product-detail")
shoppingCartIcon.addEventListener("click", toggleAside)

function toggleMenuDesktop(){
    if(!aside.classList.contains("inactive") || !desktopMenu.classList.contains("inactive")){
        aside.classList.add("inactive")
    }else{
        desktopMenu.classList.toggle("inactive")
    }
}
function toggleMenuMobile(){
    if(aside.classList.contains("inactive")){
        mobileMenu.classList.toggle("inactive")
    }else{
        toggleAside()
        mobileMenu.classList.toggle("inactive")
    }
}
function toggleAside(){
    if(mobileMenu.classList.contains("inactive")){
        aside.classList.toggle("inactive")
    }else{
        toggleMenuMobile()
        aside.classList.toggle("inactive")
    }
}