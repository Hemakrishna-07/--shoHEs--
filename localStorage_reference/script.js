// fetch("products.json")
// .then(function(response){
// 	return response.json();
// })
// .then(function(data){
// 	localStorage.setItem("products", JSON.stringify(data));
// 	console.log(localStorage.getItem("cart"));
// 	if(!localStorage.getItem("cart")){
// 		localStorage.setItem("cart", "[]");
// 	}
// });


// // SETTING GLOBAL VARIABLES SO WE CAN ACCESS THEM FROM INSIDE THE FUNCTIONS.
// let products = JSON.parse(localStorage.getItem("products"));
// let cart = JSON.parse(localStorage.getItem("cart"));

// // ADDING A PRODUCT IN THE CART
// function addItemToCart(productId){
	
// 	let product = products.find(function(product){
// 		return product.id == productId;	
// 	});

// 	if(cart.length == 0){
// 		cart.push(product);
// 	}else{
// 		let res = cart.find(element => element.id == productId);
// 		if(res === undefined){
// 			cart.push(product);
// 		}
// 	}
	
// 	localStorage.setItem("cart", JSON.stringify(cart));
// }
// addItemToCart(1);
// addItemToCart(2);
// addItemToCart(3);


// // REMOVING A PRODUCT FROM THE CART
// function removeItemFromCart(productId){
// 	let temp = cart.filter(item => item.id != productId); 
// 	localStorage.setItem("cart", JSON.stringify(temp));
// }
// //removeItemFromCart(3);


// // UPDATING THE PRODUCTS QUANTITY.
// function updateQuantity(productId, quantity){
// 	for(let product of cart){
// 		if(product.id == productId){
// 			product.quantity = quantity;
// 			product.price = product.price * quantity;
// 		}
// 	}
// 	localStorage.setItem("cart", JSON.stringify(cart));
// }
// // updateQuantity(1, 8);


// // GET THE CART'S TOTAL SUM
// function getTotal(){
// 	let temp = cart.map(function(item){
// 		return parseInt(item.price);
// 	})
	
// 	let sum = temp.reduce(function(prev, next){
// 		return prev + next;
// 	}, 0);
// 	console.log(sum);
// }
// // getTotal();
