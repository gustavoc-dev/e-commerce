const shopCart = document.getElementById('shop-cart')
const shopCartMenu = document.getElementById('shop-cart-menu')

function createShopCartMenu(){
    shopCartMenu.classList.toggle('active')
}

function shopcartMenu(){
    shopCart.classList.toggle('active')
    createShopCartMenu()
}

shopCart.addEventListener('click',shopcartMenu)
