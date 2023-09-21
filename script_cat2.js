const cat2Products = [
    {
        productId : "b1",
        productImg : "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/24570720/2023/8/21/795d1e8e-785a-47a4-84f5-73263d2bcc521692615224779LibertyMenLeatherFormalBrogues1.jpg",
        productBrand : "Liberty",
        productName : "Men Textured Leather Formal Brogues",
        productPrice : ["2199"],
        productQuantity : 1
    },
    {
        productId : "b2",
        productImg : "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/23992796/2023/7/12/263abcc9-11cd-4c7d-b6d8-691b3ef2a7f81689168655773RuoshMenLeatherFormalDerbys1.jpg",
        productBrand : "Ruosh",
        productName : "Men Textured Leather Formal Derbys",
        productPrice : ["3899"],
        productQuantity : 1
    },
    {
        productId : "b3",
        productImg : "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/17239026/2022/3/4/b8836651-8b82-4107-9ea7-5f162c751d5c1646371656142-Louis-Philippe-Men-Tan-Brown-Leather-Solid-Oxfords-with-Perf-1.jpg",
        productBrand : "Louis Philippe",
        productName : "Men Tan Brown Leather Solid Oxfords with Perforations",
        productPrice : ["2749"],
        productQuantity : 1
    },
    {
        productId : "b4",
        productImg : "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/15725422/2022/2/3/fdd49260-3e28-44d8-a3d1-40d63d720b7e1643889376801HIGHLANDERMenBrownPerforationsDerbys1.jpg",
        productBrand : "HIGHLANDER",
        productName : "Men Brown Perforations Derbys",
        productPrice : ["799"],
        productQuantity : 1
    },
    {
        productId : "b5",
        productImg : "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/23129100/2023/7/3/fffc3d90-ff01-4dfa-a231-72ba339935951688359849961-Van-Heusen-Men-Formal-Shoes-2441688359849703-1.jpg",
        productBrand : "Van Heusen",
        productName : "Men Textured Leather Formal Derbys",
        productPrice : ["1749"],
        productQuantity : 1
    },
    {
        productId : "b6",
        productImg : "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/13676246/2021/2/18/3e6682d1-46cf-4f58-b39e-b53947208e091613637993970RedTapeMenBrownSolidLeatherMid-TopFlatBoots1.jpg",
        productBrand : "Red Tape",
        productName : "Men Brown Solid Leather Mid-Top Flat Boots",
        productPrice : ["1849"],
        productQuantity : 1
    },
    {
        productId : "b7",
        productImg : "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/23640730/2023/8/1/e67012f1-a71c-46f6-8109-39509f7efd1b1690888196734-Arrow-Men-Perforated-Leather-Formal-Derbys-2151690888196678-11.jpg",
        productBrand : "Arrow",
        productName : "Men Perforated Leather Formal Derbys",
        productPrice : ["2499"],
        productQuantity : 1
    },
    {
        productId : "b8",
        productImg : "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/1176382/2021/11/18/2dc0a8a6-beb4-46a7-a9f7-fe39c5e5da7d1637245299866-Sir-Corbett-Men-Black-Semiformal-Shoes-8191637245299746-6.jpg",
        productBrand : "Sir Corbett",
        productName : "Men Black Semiformal Shoes",
        productPrice : ["949"],
        productQuantity : 1
    },
    {
        productId : "b9",
        productImg : "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/20788860/2022/11/17/695bd49d-936c-4569-aa69-4bd7d67970eb1668676075013InvictusMensBrownFauxLeatherFormalMonkShoes1.jpg",
        productBrand : "INVICTUS",
        productName : "Men Brown Solid Formal Loafers",
        productPrice : ["1159"],
        productQuantity : 1
    },
    {
        productId : "b10",
        productImg : "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/23640726/2023/8/1/0a5e4d2f-ee33-4bc8-9505-bbb1c7fb60461690888143888-Arrow-Men-Leather-Formal-Loafers-8621690888143835-11.jpg",
        productBrand : "Arrow",
        productName : "Men Leather Formal Loafers",
        productPrice : ["2799"],
        productQuantity : 1
    }
]

// const cardContainer_cat2 = document.querySelector("#card-container-cat2")
// cat2Products.forEach((productObj, index) => {
//     const productCardCat2 = document.createElement("div")
//     productCardCat2.className = "card text-center product-card"
//     productCardCat2.style.width = "18rem"
//     productCardCat2.innerHTML = `
//         <a href="#"><img src=${productObj.productImg} class="card-img-top" alt=${productObj.productName}></a>
//         <div class="card-body">
//             <h5 class="card-title product-brand">${productObj.productBrand}</h5>
//             <p class="card-text product-name">${productObj.productName}</p>
//             <p class="card-title price">₹ ${productObj.productPrice}.<span class="price-decimal">00</span></p>
//             <button type="button" class="btn btn-primary">Add To Cart</button>
//         </div>
//     `
//     cardContainer_cat2.appendChild(productCardCat2)
// })

function reloadPage(){
    window.location.reload();
}

localStorage.setItem("productsCat2", JSON.stringify(cat2Products));
if(!localStorage.getItem("cart")){
	localStorage.setItem("cart", "[]");
}

// SETTING GLOBAL VARIABLES SO WE CAN ACCESS THEM FROM INSIDE THE FUNCTIONS.
let productsCat2 = JSON.parse(localStorage.getItem("productsCat2"));
// console.log("productsCat2",productsCat2)
let cart = JSON.parse(localStorage.getItem("cart"));

// Adding the products from cart
function addItemToCart(productId){
	let product = productsCat2.find((product) => (product.productId == productId));

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
// addItemToCart("b2");

// Remove the called products from cart
function removeItemFromCart(productId){
	let temp = cart.filter(item => item.productId != productId); 
	localStorage.setItem("cart", JSON.stringify(temp));
}
// removeItemFromCart("b2");

// Remove all products from cart
function removeAllFromCart() {
    let temp = [];
    localStorage.setItem("cart", JSON.stringify(temp));
}
// removeAllFromCart()

// displaying all the products from local storage
const cardContainer_cat2 = document.querySelector("#card-container-cat2")
productsCat2.forEach((productObj, index) => {
    const productCardCat2 = document.createElement("div")
    productCardCat2.className = "card text-center product-card"
    productCardCat2.style.width = "18rem"
    productCardCat2.innerHTML = `
        <a href="#"><img src=${productObj.productImg} class="card-img-top" alt=${productObj.productName}></a>
        <div class="card-body">
            <h5 class="card-title product-brand">${productObj.productBrand}</h5>
            <p class="card-text product-name">${productObj.productName}</p>
            <p class="card-title price">₹ ${productObj.productPrice[0]}.<span class="price-decimal">00</span></p>
            <button type="button" class="btn btn-primary addToCart">Add To Cart</button>
        </div>
    `
    cardContainer_cat2.appendChild(productCardCat2)
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
    addItemToCart(productsCat2[index].productId)
    // console.log(addItemToCart(productsCat1[index].productId));
    setTimeout(reloadPage,1)
}))