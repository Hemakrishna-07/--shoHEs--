let cart = JSON.parse(localStorage.getItem("cart"));

// Display no of cart items in badge
const cartBtn = document.querySelector("#cart-btn")
cartBtn.innerHTML = `+${cart.length}`
if(cart.length == 0) {
    cartBtn.style.display = "none";
}