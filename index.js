//Criar Menu Carrinho de Compras
const shopCart = document.getElementById('shop-cart')
const shopCartMenu = document.getElementById('shop-cart-menu')


function hideMenuItens(){
    if(shopCartMenu.className !== 'active'){
        document.getElementById('shop-cart-menu').style.display = "none";
    }else if(shopCartMenu.className == 'active'){
        document.getElementById('shop-cart-menu').style.display = "block";
    }
}


function createShopCartMenu(){
    shopCartMenu.classList.toggle('active')
}

function shopcartMenu(){
    shopCart.classList.toggle('active')
    createShopCartMenu()
    hideMenuItens()
}

shopCart.addEventListener('click',shopcartMenu)

//Adicionar produtos carrinho de compras
const addToShopcartMenu = document.querySelectorAll('#addShopcartMenu')
const productSpan = document.querySelector('.productSpan')

function abc(ev){
    const productSection = document.createElement('section')
    productSection.id = "productSection"
    const productName = document.createElement('p')
    const productPrice = document.createElement('span')
    
    productSection.classList.add('product-section')
    productName.classList.add('product-name')
    productPrice.classList.add('porduct-price')

    const minusBtn = document.createElement('button')
    const productQtn = document.createElement('span')
    const plusBtn = document.createElement('button')
    const removeBtn = document.createElement('button')

    function removeItem(){
       document.getElementById('shop-cart-menu').removeChild(productSection) 
    }

    productQtn.classList.add('product-qtn')
    productQtn.textContent = '1'

    function addQtn(){
        let qtn = parseInt(productQtn.textContent)
        let sum = qtn+1
        productQtn.textContent = parseFloat(sum)
    }

    function subQtn(){
        let qtn = parseInt(productQtn.textContent)
        let sum = qtn-1
        productQtn.textContent = parseFloat(sum)
        if(sum <=0){
            removeItem()
        }
     }

    minusBtn.classList.add('minus-btn')
    minusBtn.textContent = '-'
    minusBtn.addEventListener('click',subQtn)


    plusBtn.classList.add('plus-btn')
    plusBtn.textContent = '+'
    plusBtn.addEventListener('click',addQtn)

    removeBtn.classList.add('remove-btn')
    removeBtn.textContent = 'Remover'
    removeBtn.addEventListener('click',removeItem)
    
    

    const parentContainer = ev.target.closest('.productSpan');
    if (!parentContainer) {
        console.error("Erro: Elemento contêiner não encontrado.");
        return;
    }

    const nameElement = parentContainer.querySelector('.productName');
    const priceElement = parentContainer.querySelector('.productPrice');

    const nameValue = nameElement ? nameElement.textContent : 'Nome do Produto Não Encontrado';
    const priceValue = priceElement ? priceElement.textContent : 'Preço do Produto Não Encontrado';

    productName.textContent = nameValue;
    productPrice.textContent = priceValue;

    shopCartMenu.appendChild(productSection)
    productSection.append(productName,productPrice,plusBtn,productQtn,minusBtn,removeBtn)
}

addToShopcartMenu.forEach(function(addToShopcartMenu){
    addToShopcartMenu.addEventListener('click',abc)
})

//Autorolagem automática de imagens
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

//Lançamentos Carrossel
const carousel = document.querySelector(".arrives-itens"),
firstImg = carousel.querySelectorAll("img")[0],
arrowIcons = document.querySelectorAll(".arrives i");
let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;

// const showHideIcons = () => {
//     let scrollWidth = carousel.scrollWidth - carousel.clientWidth;
//     arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
//     arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
// }
arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImg.clientWidth + 14;
        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(), 60);
    });
});
const autoSlide = () => {
    if(carousel.scrollLeft - (carousel.scrollWidth - carousel.clientWidth) > -1 || carousel.scrollLeft <= 0) return;
    positionDiff = Math.abs(positionDiff);
    let firstImgWidth = firstImg.clientWidth + 14;
    let valDifference = firstImgWidth - positionDiff;
    if(carousel.scrollLeft > prevScrollLeft) { 
        return carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
    }
    carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
}
const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
}
const dragging = (e) => {
    if(!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    carousel.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();
}
const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove("dragging");
    if(!isDragging) return;
    isDragging = false;
    autoSlide();
}
carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);
document.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("touchend", dragStop);

//Combos Carrossel
const carouselCombo = document.querySelector(".combos-itens"),
firstImgCombo = carouselCombo.querySelectorAll("img")[0],
arrowIconsCombo = document.querySelectorAll(".combos i");

// const showHideIconsCombos = () => {
//     let scrollWidth = carouselCombo.scrollWidth - carouselCombo.clientWidth;
//     arrowIconsCombo[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
//     arrowIconsCombo[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
// }
arrowIconsCombo.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImgCombo.clientWidth + 14;
        carouselCombo.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIconsCombos(), 60);
    });
});
const autoSlideCombo = () => {
    if(carouselCombo.scrollLeft - (carouselCombo.scrollWidth - carouselCombo.clientWidth) > -1 || carouselCombo.scrollLeft <= 0) return;
    positionDiff = Math.abs(positionDiff);
    let firstImgWidth = firstImgCombo.clientWidth + 14;
    let valDifference = firstImgWidth - positionDiff;
    if(carouselCombo.scrollLeft > prevScrollLeft) { 
        return carouselCombo.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
    }
    carouselCombo.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
}
const dragStartCombo = (e) => {
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carouselCombo.scrollLeft;
}
const draggingCombo = (e) => {
    if(!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    carouselCombo.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carouselCombo.scrollLeft = prevScrollLeft - positionDiff;
    showHideIconsCombos();
}
const dragStopCombo = () => {
    isDragStart = false;
    carouselCombo.classList.remove("dragging");
    if(!isDragging) return;
    isDragging = false;
    autoSlideCombo();
}

carouselCombo.addEventListener("mousedown", dragStartCombo);
carouselCombo.addEventListener("touchstart", dragStartCombo);
document.addEventListener("mousemove", draggingCombo);
carouselCombo.addEventListener("touchmove", draggingCombo);
document.addEventListener("mouseup", dragStopCombo);
carouselCombo.addEventListener("touchend", dragStopCombo);