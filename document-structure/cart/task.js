const productControls = document.querySelectorAll('.product__quantity-controls');
const products = document.querySelectorAll('.product');

productControls.forEach(element => {
    const quantityDown = element.querySelector('.product__quantity-control_dec');
    const quantityUp = element.querySelector('.product__quantity-control_inc');
    const quantityValue = element.querySelector('.product__quantity-value')

    quantityDown.addEventListener('click', () => {
        if (quantityValue.textContent > 1) {
            quantityValue.textContent--;
        }
    })

    quantityUp.addEventListener('click', () => {
        quantityValue.textContent++;
    })
})

products.forEach(product => {
    const productAdd = product.querySelector('.product__add');
    const dataId = product.getAttribute('data-id');
    const productImage = product.querySelector('.product__image');
    const src = productImage.getAttribute('src')
    const cartCount = product.querySelector('.product__quantity-value');

    productAdd.onclick = () => {
        const productsInCard = Array.from(document.querySelectorAll('.cart__product'))
        const product = productsInCard.find(element => element.getAttribute('data-id') == dataId)
        const newDiw = document.createElement('div');
        const cart = document.querySelector('.cart__products');

        if (!product) {
            newDiw.innerHTML = `<div class="cart__product" data-id="${dataId}"><img class="cart__product-image" src="${src}"><div class="cart__product-count">${cartCount.textContent}</div></div>`
            cart.appendChild(newDiw);
        } else {
            const productCount = product.querySelector('.cart__product-count');
            productCount.textContent = parseInt(productCount.textContent) + parseInt(cartCount.textContent)
        }
    }
})