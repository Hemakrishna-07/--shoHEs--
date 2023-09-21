const cat1Products = [
    {
        productId : "a1",
        productImg : "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/17020984/2022/5/25/6ece6d2a-41e9-4111-ab1d-9ea20c7edbfe1653460983408-Skechers-Men-Casual-Shoes-6261653460983086-1.jpg",
        productBrand : "Skechers",
        productName : "Men Beige Woven Design Sneakers",
        productPrice : ["4674"],
        productQuantity : 1
    },
    {
        productId : "a2",
        productImg : "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/10339033/2023/8/28/cddbcb00-a90c-43a9-8c63-d69dbaa0b2bb1693219412898-US-Polo-Assn-Men-White-Clarkin-Sneakers-6251693219412794-6.jpg",
        productBrand : "U.S. Polo Assn.",
        productName : "Men White Clarkin Sneakers",
        productPrice : ["1649"],
        productQuantity : 1
    },
    {
        productId : "a3",
        productImg : "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/22526204/2023/5/12/dc86e6d3-9fc4-4303-9396-88de387320051683869182564-Puma-Men-Sneakers-2481683869182271-1.jpg",
        productBrand : "Puma",
        productName : "Men Catel Sneakers",
        productPrice : ["1574"],
        productQuantity : 1
    },
    {
        productId : "a4",
        productImg : "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/23066084/2023/5/8/8c5c8a1c-ad78-4201-9765-0d9ed807c63f1683524969077MenWhiteChunkyColourblockedCasualSneakersShoes1.jpg",
        productBrand : "Roadster",
        productName : "Men Colourblocked Lightweight Sneakers",
        productPrice : ["849"],
        productQuantity : 1
    },
    {
        productId : "a5",
        productImg : "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/17350728/2022/5/11/0f1ce8f1-6394-4785-9c67-d238acce820c1652267748897-Puma-Men-Casual-Shoes-9391652267748578-1.jpg",
        productBrand : "Puma",
        productName : "Men Colourblocked Sneakers",
        productPrice : ["2699"],
        productQuantity : 1
    },
    {
        productId : "a6",
        productImg : "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/24142284/2023/7/22/73a3baa9-e527-4c0e-89c0-245d4400ace51689998837853CasualShoes1.jpg",
        productBrand : "Red Tape",
        productName : "Men Textured Mesh Basics Sneakers",
        productPrice : ["1724"],
        productQuantity : 1
    },
    {
        productId : "a7",
        productImg : "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/24225588/2023/7/27/3fabbe01-bce3-4c64-8759-817d3e9c99881690460220412DOODLE1.jpg",
        productBrand : "Solethreads",
        productName : "Men DOODLE Mid-Top Sneakers",
        productPrice : ["1799"],
        productQuantity : 1
    },
    {
        productId : "a8",
        productImg : "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/11097174/2021/2/17/590f6671-a8de-4b11-96a9-61bdd8b846b51613525195280HIGHLANDERMenBlackSneakers1.jpg",
        productBrand : "HIGHLANDER",
        productName : "Men Black Sneakers",
        productPrice : ["899"],
        productQuantity : 1
    },
    {
        productId : "a9",
        productImg : "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/24611576/2023/8/24/45cde7b4-93ff-4d21-9700-637864bc6a941692859493887OFFLIMITSMenTanSneakers1.jpg",
        productBrand : "OFF LIMITS",
        productName : "Men Big Tall Sneakers",
        productPrice : ["2999"],
        productQuantity : 1
    },
    {
        productId : "a10",
        productImg : "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/18922446/2023/3/8/1825f32d-0ada-4153-b7ac-a0a1bb9a27301678277547864-HRX-by-Hrithik-Roshan-Men-Navy-Blue--Red-Urban-Street-Athlei-1.jpg",
        productBrand : "HRX",
        productName : "Men Urban Street Athleisure Shoe",
        productPrice : ["850"],
        productQuantity : 1
    }
]


// const cardContainer_cat1 = document.querySelector("#card-container-cat1")
// cat1Products.forEach((productObj, index) => {
//     const productCardCat1 = document.createElement("div")
//     productCardCat1.className = "card text-center product-card"
//     productCardCat1.style.width = "18rem"
//     productCardCat1.innerHTML = `
//         <a href="#"><img src=${productObj.productImg} class="card-img-top" alt=${productObj.productName}></a>
//         <div class="card-body">
//             <h5 class="card-title product-brand">${productObj.productBrand}</h5>
//             <p class="card-text product-name">${productObj.productName}</p>
//             <p class="card-title price">₹ ${productObj.productPrice}.<span class="price-decimal">00</span></p>
//             <button type="button" class="btn btn-primary">Add To Cart</button>
//         </div>
//     `
//     cardContainer_cat1.appendChild(productCardCat1)
// })

function reloadPage(){
    window.location.reload();
}

localStorage.setItem("productsCat1", JSON.stringify(cat1Products));
// console.log(localStorage.getItem("cart"));
if(!localStorage.getItem("cart")){
	localStorage.setItem("cart", "[]");
}

// SETTING GLOBAL VARIABLES SO WE CAN ACCESS THEM FROM INSIDE THE FUNCTIONS.
let productsCat1 = JSON.parse(localStorage.getItem("productsCat1"));
// console.log("productsCat1",productsCat1)
let cart = JSON.parse(localStorage.getItem("cart"));

// Adding the products from cart
function addItemToCart(productId){
	let product = productsCat1.find((product) => (product.productId == productId));
    // console.log("product", product)

	if(cart.length == 0){
		cart.push(product);
	}else{
		let res = cart.find(element => element.productId == productId);
		// if(res === undefined || null){
        if(res === undefined){
			cart.push(product);
		}
	}
	
	localStorage.setItem("cart", JSON.stringify(cart));
}
// addItemToCart("a2");
// addItemToCart("a10");
// addItemToCart("a1");
// addItemToCart("a7");
// addItemToCart("a8");

// Remove the called products from cart
function removeItemFromCart(productId){
	let temp = cart.filter(item => item.productId != productId); 
	localStorage.setItem("cart", JSON.stringify(temp));
}
// removeItemFromCart("a2");
// removeItemFromCart("a10");
// removeItemFromCart("a1");
// removeItemFromCart("a7");

// Remove all products from cart
function removeAllFromCart() {
    let temp = [];
    localStorage.setItem("cart", JSON.stringify(temp));
}
// removeAllFromCart()

// displaying all the products from local storage
const cardContainer_cat1 = document.querySelector("#card-container-cat1")
productsCat1.forEach((productObj, index) => {
    const productCardCat1 = document.createElement("div")
    productCardCat1.className = "card text-center product-card"
    productCardCat1.style.width = "18rem"
    productCardCat1.innerHTML = `
        <a href="#"><img src=${productObj.productImg} class="card-img-top" alt=${productObj.productName}></a>
        <div class="card-body">
            <h5 class="card-title product-brand">${productObj.productBrand}</h5>
            <p class="card-text product-name">${productObj.productName}</p>
            <p class="card-title price">₹ ${productObj.productPrice[0]}.<span class="price-decimal">00</span></p>
            <button type="button" class="btn btn-primary addToCart">Add To Cart</button>
        </div>
    `
    cardContainer_cat1.appendChild(productCardCat1)
})

// Display no. of cart items in badge and if cart is empty hide badge
const cartBtn = document.querySelector("#cart-btn")
cartBtn.innerHTML = `+${cart.length}`
if(cart.length == 0) {
    cartBtn.style.display = "none";
}

// Add To Cart Btn funtionality for each individual
const addToCart = [...document.querySelectorAll(".addToCart")]
addToCart.forEach((eachBtn, index) => eachBtn.addEventListener("click", function() {
    // console.log(`Add to cart button is clicked - ${index}`);
    addItemToCart(productsCat1[index].productId)
    // console.log(addItemToCart(productsCat1[index].productId));
    setTimeout(reloadPage,1)
}))
// console.log("addToCart", addToCart)
// console.log("products", productsCat1)