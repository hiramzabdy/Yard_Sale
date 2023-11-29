const desktopClickMenu = document.querySelector(".navbar-email")
const mobileClickMenu = document.querySelector(".menu")
const desktopMenu = document.querySelector(".desktop-menu")
const mobileMenu = document.querySelector(".mobile-menu")
desktopClickMenu.addEventListener("click", toggleMenuDesktop)
mobileClickMenu.addEventListener("click", toggleMenuMobile)
const shoppingCartIcon = document.querySelector(".navbar-shopping-cart")
const shoppingCart = document.querySelector(".shopping-cart")
shoppingCartIcon.addEventListener("click", toggleShoppingCart)

const cardsContainer = document.querySelector(".cards-container")

function toggleMenuDesktop(){
    if(!shoppingCart.classList.contains("inactive")){
        shoppingCart.classList.toggle("inactive")
        if(desktopMenu.classList.contains("inactive")){
            desktopMenu.classList.toggle("inactive")
        }
    }else{
        desktopMenu.classList.toggle("inactive")
    }
}
function toggleMenuMobile(){
    if(!shoppingCart.classList.contains("inactive")){
        shoppingCart.classList.toggle("inactive")
        if(mobileMenu.classList.contains("inactive")){
            mobileMenu.classList.toggle("inactive")
        }
    }else{
        mobileMenu.classList.toggle("inactive")
    }
}
function toggleShoppingCart(){
    if(!mobileMenu.classList.contains("inactive")){
        mobileMenu.classList.toggle("inactive")
    }
    if(!desktopMenu.classList.contains("inactive")){
        desktopMenu.classList.toggle("inactive")
    }
    shoppingCart.classList.toggle("inactive")
}

function renderProducts(arr){
    //It's not that I forgot...
    for (const product of arr) {
        let productCard = document.createElement("div")
        productCard.classList.add("card")
    
        let productImg = document.createElement("img")
        productImg.setAttribute("src", product.image)
        productImg.setAttribute("alt", product.name)
    
        let productInfo = document.createElement("div")
        productInfo.classList.add("product-info")
    
        let productPrice = document.createElement("div")
        productPrice.classList.add("price")
    
        let priceP = document.createElement("p")
        priceP.innerText = "$" + product.price
        let nameP = document.createElement("p")
        nameP.innerText = product.name
    
        let productFigure = document.createElement("figure")
        let imgCart = document.createElement("img")
        imgCart.setAttribute("src", "./icons/bt_add_to_cart.svg")
    
        productPrice.appendChild(priceP)
        productPrice.appendChild(nameP)
        productFigure.appendChild(imgCart)
        productInfo.appendChild(productPrice)
        productInfo.appendChild(productFigure)
        productCard.appendChild(productImg)
        productCard.appendChild(productInfo)
    
        cardsContainer.appendChild(productCard)
    }
    //...I did it both ways
    arr.forEach((product) => {
        productCard = `
            <div class="card">
            <img src="${product.image}" alt="${product.name}">
            <div class="product-info">
                <div>
                    <p>$${product.price}</p>
                    <p>${product.name}</p>
                </div>
                <figure>
                    <img src="./icons/bt_add_to_cart.svg" alt="">
                </figure>
            </div>    
            </div>
        `
        cardsContainer.innerHTML += productCard   
    }
    )
    }

const products = []
products.push({
    name: "Bike",
    price: 999,
    image: "https://chedrauimx.vtexassets.com/arquivos/ids/22664380/7503024070521_02.jpg?v=638363969701370000"
})
products.push({
    name: "Screen",
    price: 499,
    image: "https://i5.walmartimages.com.mx/mg/gm/1p/images/product-images/img_large/00750940181554l.jpg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
})
products.push({
    name: "Computer",
    price: 799,
    image: "https://m.media-amazon.com/images/I/715zrA5cmLL.jpg"
})
products.push({
    name: "S23 Ultra",
    price: 1199,
    image: "https://cdn1.coppel.com/images/catalog/pm/2003883-1.jpg"
})

renderProducts(products)