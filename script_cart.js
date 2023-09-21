let cart = JSON.parse(localStorage.getItem("cart"));
// console.log(cart)

function reloadPage(){
    window.location.reload();
}

function removeAllFromCart() {
    let temp = [];
    localStorage.setItem("cart", JSON.stringify(temp));
}
// removeAllFromCart()

// Remove the called products from cart
function removeItemFromCart(productId){
	let temp = cart.filter(item => item.productId != productId); 
	localStorage.setItem("cart", JSON.stringify(temp));
}
// removeItemFromCart("a1");

// UPDATING THE PRODUCTS QUANTITY.
function updateQuantity(productId, quantity){
	for(let product of cart){
		if(product.productId == productId){
			product.productQuantity = quantity;
			product.productPrice[1] = parseInt(product.productPrice[0]) * quantity;
            // console.log("price", product.productPrice, typeof(product.productPrice));
		}
	}
	localStorage.setItem("cart", JSON.stringify(cart));
}
// updateQuantity("a10", 3);

// GET THE CART'S TOTAL SUM
function getCartTotal(){
	let temp = cart.map(item => {
		return parseInt(item.productPrice[item.productPrice.length-1]);
	})
    // console.log(temp)
	
	let sum = temp.reduce((prev, next) => {
		return prev + next;
	}, 0);
	// console.log(sum);
    return sum;
}
// getCartTotal();
// console.log(getCartTotal());

// Display no of cart items in badge
const cartBtn = document.querySelector("#cart-btn")
cartBtn.innerHTML = `+${cart.length}`
if(cart.length == 0) {
    cartBtn.style.display = "none";
}

// Get current date and time
let date = new Date();
let newDate = date.toDateString();
let newHour = date.getHours();
let newMin = date.getMinutes();
let ampm = newHour >= 12 ? "PM" : "AM";
let newTime = `${String(newHour).padStart(2,"0")}:${String(newMin).padStart(2,"0")}`;
let newDateTime = `${newTime}, ${newDate}`
// console.log(`new-date: ${newDateTime}`)

// Display the list of items in cart from LocalStorage
const cartProductList = document.querySelector("#cart-card-list")
cart.forEach((cartObject, index) => {
    const cartProduct = document.createElement("div")
    cartProduct.className = "card cart-list-container"
    cartProduct.innerHTML = `
        <div class="card">
            <div class="card-header">
                <b>${cartObject.productName}</b>
            </div>
            <div class="cart-flex-body">
                <div class="card-body">
                    <p class="card-text cart-text cart-brand"><b>Brand : ${cartObject.productBrand}</b></p>
                    <p class="card-text cart-product-date cart-text">Added on : ${newDateTime}</p>
                    <p class="card-text price cart-text">₹ <span class="product-price">${(cartObject.productPrice[cartObject.productPrice.length-1])}</span>.<span class="price-decimal">00</span></p>
                    <div class="add-qty">
                        <div><button type="button" class="btn btn-outline-secondary btn-sm reduce-item"><i class="fa-solid fa-minus"></i></button></div>
                        <div class="card-text add-qty-input"></div>
                        <div><button type="button" class="btn btn-outline-secondary btn-sm add-item"><i class="fa-solid fa-plus"></i></button></div>
                        <div class="remove-from-cart"><button type="button" class="btn btn-outline-danger btn-sm remove-item">Remove from cart</button></div>
                    </div>
                </div>
                <img src=${cartObject.productImg} alt=${cartObject.productName} class="cartImg"/>
            </div>
        </div>
    `
    cartProductList.append(cartProduct)
})

// Display the list of items in checkout from LocalStorage
const checkoutList = document.querySelector("#cart-checkout-container")
cart.forEach((chkoutObj, index) => {
    const chkoutProduct = document.createElement("div")
    chkoutProduct.className = "checkout-item-list"
    chkoutProduct.innerHTML=`
        <p class="cko-text">${(chkoutObj.productName).slice(0, 15).padEnd(18, '.')}</p>
        <p class="cko-text"><span class="checkout-xn">(x${chkoutObj.productQuantity})</span> - <span class="checkout-price">₹ <span class="product-price">${chkoutObj.productPrice[chkoutObj.productPrice.length-1]}</span>.</span><span class="price-decimal-checkout">00</span></p>
    `
    checkoutList.append(chkoutProduct)
})

const chkoutTotal = document.createElement("div")
chkoutTotal.className = "checkout-item-list"
chkoutTotal.innerHTML = `
    <p class="cart-total">Total</p>
    <p class="cart-total"><span class="checkout-price">₹ <span class="product-price">${getCartTotal()}</span>.</span><span class="price-decimal-checkout">00</span></p>
`
checkoutList.append(chkoutTotal)

// Remaove all items from cart
let clearCart = document.querySelector(".clear-cart")
clearCart.addEventListener("click", () => {
    // console.log("clear cart button is clicked")
    removeAllFromCart();
    setTimeout(reloadPage,1)
})

// Remove item from cart
let removeItem = [...document.querySelectorAll(".remove-item")]
removeItem.forEach((eachBtn, removeIndex) => eachBtn.addEventListener("click", function() {
    // console.log(`Btn clicked ${removeIndex}`)
    removeItemFromCart(cart[removeIndex].productId);
    setTimeout(reloadPage,1)
}))

// update no. of cart items
let productQty = [...document.querySelectorAll(".add-qty-input")]
productQty.forEach((eachInput, ix) => {
    eachInput.innerText = `${cart[ix].productQuantity}`
});

let productPrice = [...document.querySelectorAll(".product-price")]
productPrice.forEach((eachPrice, index) => {
    // let initialPrice = eachPrice.textContent
    // console.log(initialPrice);
});

const reduceItem = [...document.querySelectorAll(".reduce-item")]
reduceItem.forEach((eachBtn, reduceIndex) => eachBtn.addEventListener("click", function() {
    console.log(`reduce item button is clicked, ${reduceIndex}`)
    let currentCartValue = parseInt(productQty[reduceIndex].textContent)
    productQty[reduceIndex].innerText = --currentCartValue;
    if(currentCartValue <= 1) {
        productQty[reduceIndex].innerText = 1;
    }
    console.log(currentCartValue, typeof(currentCartValue))
    updateQuantity(`${cart[reduceIndex].productId}`, currentCartValue)
    setTimeout(reloadPage,1)

    // let initialPrice = +(productPrice[reduceIndex].textContent)
    // let finalPrice = initialPrice;
    // finalPrice = initialPrice - finalPrice
    // console.log(initialPrice, typeof(initialPrice))
    // console.log(finalPrice, typeof(finalPrice))
    // productPrice[reduceIndex].innerText = `${finalPrice}`
}))

const addItem = [...document.querySelectorAll(".add-item")]
addItem.forEach((eachBtn, addIndex) => eachBtn.addEventListener("click", function() {
    console.log(`add item button is clicked, ${addIndex}`)
    let currentCartValue = parseInt(productQty[addIndex].textContent)
    productQty[addIndex].innerText = ++currentCartValue;
    if(currentCartValue >= 10) {
        productQty[addIndex].innerText = 10;
    }
    console.log(currentCartValue, typeof(currentCartValue))
    updateQuantity(`${cart[addIndex].productId}`, currentCartValue)
    setTimeout(reloadPage,1)

    // let initialPrice = +(productPrice[addIndex].textContent)
    // let finalPrice = initialPrice;
    // finalPrice = initialPrice + finalPrice
    // console.log(initialPrice, typeof(initialPrice))
    // console.log(finalPrice, typeof(finalPrice))
    // productPrice[addIndex].innerText = `${finalPrice}`
}))