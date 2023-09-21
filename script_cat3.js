const cat3Products = [
    {
        productId : "c1",
        productImg : "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/18814622/2023/2/17/bb106374-78d2-4d1f-8338-08941e624ab31676633811695-Puma-Unisex-Grey-Softride-Sports-Sandals-8281676633811608-6.jpg",
        productBrand : "Puma",
        productName : "Men Grey Softride Sports Sandals",
        productPrice : ["1999"],
        productQuantity : 1
    },
    {
        productId : "c2",
        productImg : "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/22889272/2023/4/25/8785ad50-1e4b-4289-aa2e-3e4734ea9d401682424727491FilaMenROZZASandals1.jpg",
        productBrand : "FILA",
        productName : "Men Velcro Closure Comfort Sandals",
        productPrice : ["2999"],
        productQuantity : 1
    },
    {
        productId : "c3",
        productImg : "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/16373814/2022/7/24/c677a40b-17a1-4b45-84ba-44a81d1223701658643598207RedChiefMenBrownLeatherComfortSandals1.jpg",
        productBrand : "Red Chief",
        productName : "Men Brown Leather Comfort Sandals",
        productPrice : ["1849"],
        productQuantity : 1
    },
    {
        productId : "c4",
        productImg : "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/21260094/2023/4/10/e49bfb3c-ca64-4aac-86cf-bab2ea89e55c1681124957495-Crocs-Unisex-Sandals-2881681124957039-1.jpg",
        productBrand : "Crocs",
        productName : "Men Printed Clogs - Multicolor",
        productPrice : ["5499"],
        productQuantity : 1
    },
    {
        productId : "c5",
        productImg : "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/16285650/2022/5/20/0d7b8f23-e7b8-41ce-ad8a-10b6c15f50b21653050020268-Tommy-Hilfiger-Men-Grey-Sports-Sandals-3691653050019899-1.jpg",
        productBrand : "Tommy Hilfiger",
        productName : "Men Grey Sports Sandals",
        productPrice : ["2999"],
        productQuantity : 1
    },
    {
        productId : "c6",
        productImg : "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/11334758/2020/5/22/03d526ab-8ee3-4e29-ae33-9a6075ecf6df1590137024029-Puma-Unisex-Navy-Blue-Glen-IDP-Sports-Sandals-61115901370223-1.jpg",
        productBrand : "Puma",
        productName : "Men Navy Blue Glen Sports Sandals",
        productPrice : ["1949"],
        productQuantity : 1
    },
    {
        productId : "c7",
        productImg : "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/22889274/2023/4/25/9e124ed7-15cd-4974-a571-0bce0e3e58f01682424725406FilaMenOBSTERSandals1.jpg",
        productBrand : "FILA",
        productName : "Men Textured Comfort Sandals",
        productPrice : ["2499"],
        productQuantity : 1
    },
    {
        productId : "c8",
        productImg : "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/18917512/2022/7/24/df16296b-4fab-4858-8e33-58a5a6e3403b1658643230606RedChiefMenBlackLeatherComfortSandals1.jpg",
        productBrand : "Red Chief",
        productName : "Men Black Leather Comfort Sandals",
        productPrice : ["2599"],
        productQuantity : 1
    },
    {
        productId : "c9",
        productImg : "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/21260104/2023/4/26/aaa7c306-62c6-4045-8a4c-8ea915fe198a1682508362143-Crocs-Unisex-Sandals-1511682508361879-1.jpg",
        productBrand : "Crocs",
        productName : "Men Classic Clogs - White",
        productPrice : ["2299"],
        productQuantity : 1
    },
    {
        productId : "c10",
        productImg : "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/23201294/2023/7/27/a8c037b3-6cc4-4cf3-af7b-e6ef43a89ee81690441145102-Tommy-Hilfiger-Men-Sandals-6611690441144738-1.jpg",
        productBrand : "Tommy Hilfiger",
        productName : "Men Sandal Tape Printed Comfort Sandals",
        productPrice : ["6499"],
        productQuantity : 1
    }
]

// const cardContainer_cat3 = document.querySelector("#card-container-cat3")
// cat3Products.forEach((productObj, index) => {
//     const productCardCat3 = document.createElement("div")
//     productCardCat3.className = "card text-center product-card"
//     productCardCat3.style.width = "18rem"
//     productCardCat3.innerHTML = `
//         <a href="#"><img src=${productObj.productImg} class="card-img-top" alt=${productObj.productName}></a>
//         <div class="card-body">
//             <h5 class="card-title product-brand">${productObj.productBrand}</h5>
//             <p class="card-text product-name">${productObj.productName}</p>
//             <p class="card-title price">₹ ${productObj.productPrice}.<span class="price-decimal">00</span></p>
//             <button type="button" class="btn btn-primary">Add To Cart</button>
//         </div>
//     `
//     cardContainer_cat3.appendChild(productCardCat3)
// })

function reloadPage(){
    window.location.reload();
}

localStorage.setItem("productsCat3", JSON.stringify(cat3Products));
if(!localStorage.getItem("cart")){
	localStorage.setItem("cart", "[]");
}

// SETTING GLOBAL VARIABLES SO WE CAN ACCESS THEM FROM INSIDE THE FUNCTIONS.
let productsCat3 = JSON.parse(localStorage.getItem("productsCat3"));
// console.log("productsCat3",productsCat3)
let cart = JSON.parse(localStorage.getItem("cart"));

// Adding the products from cart
function addItemToCart(productId){
	let product = productsCat3.find((product) => (product.productId == productId));

	if(cart.length == 0){
		cart.push(product);
	}else{
		let res = cart.find(element => element.productId == productId);
        if(res === undefined){
			cart.push(product);
		}
	}
	
	localStorage.setItem("cart", JSON.stringify(cart));
}
// addItemToCart("c2");

// Remove the called products from cart
function removeItemFromCart(productId){
	let temp = cart.filter(item => item.productId != productId); 
	localStorage.setItem("cart", JSON.stringify(temp));
}
// removeItemFromCart("c2");

// Remove all products from cart
function removeAllFromCart() {
    let temp = [];
    localStorage.setItem("cart", JSON.stringify(temp));
}
// removeAllFromCart()

// displaying all the products from local storage
const cardContainer_cat3 = document.querySelector("#card-container-cat3")
productsCat3.forEach((productObj, index) => {
    const productCardCat3 = document.createElement("div")
    productCardCat3.className = "card text-center product-card"
    productCardCat3.style.width = "18rem"
    productCardCat3.innerHTML = `
        <a href="#"><img src=${productObj.productImg} class="card-img-top" alt=${productObj.productName}></a>
        <div class="card-body">
            <h5 class="card-title product-brand">${productObj.productBrand}</h5>
            <p class="card-text product-name">${productObj.productName}</p>
            <p class="card-title price">₹ ${productObj.productPrice[0]}.<span class="price-decimal">00</span></p>
            <button type="button" class="btn btn-primary addToCart">Add To Cart</button>
        </div>
    `
    cardContainer_cat3.appendChild(productCardCat3)
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
    addItemToCart(productsCat3[index].productId)
    // console.log(addItemToCart(productsCat1[index].productId));
    setTimeout(reloadPage,1)
}))