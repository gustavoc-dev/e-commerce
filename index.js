//Carrinho de compras
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

//Slide automatico

let count = 1
document.getElementById('radio1').checked = true

setInterval( function(){
    nextImage()
},4000)

function nextImage(){
    count++
    if(count>3){
        count = 1
    }
    document.getElementById('radio'+count).checked = true
}

//Lançamentos
const controls = document.querySelectorAll(".control");
let currentItem = 2;
const items = document.querySelectorAll(".item");
const maxItems = items.length;

controls.forEach((control) => {
  control.addEventListener("click", (e) => {
    isLeft = e.target.classList.contains("arrow-left");
    console.log(currentItem);

    if (isLeft) {
      currentItem -= 1;
    } else {
      currentItem += 1;
    }

    if (currentItem >= maxItems) {
      currentItem = 0;
    }

    if (currentItem < 0) {
      currentItem = maxItems - 1;
    }

    items.forEach((item) => item.classList.remove("current-item"));

    items[currentItem].scrollIntoView({
      behavior: "smooth",
      block:'nearest'
    });

    items[currentItem].classList.add("current-item");
  });
});