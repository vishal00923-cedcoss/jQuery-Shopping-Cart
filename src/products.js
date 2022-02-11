var products = [
	{ id: 101, name: "Basket Ball", image: "basketball.png", price: 150 },
	{ id: 102, name: "Football", image: "football.png", price: 120 },
	{ id: 103, name: "Soccer", image: "soccer.png", price: 110 },
	{ id: 104, name: "Table Tennis", image: "table-tennis.png", price: 130 },
	{ id: 105, name: "Tennis", image: "tennis.png", price: 100 },
];

var cart = [];

$(document).ready(function () {
	displayProducts(products);
	addToCart(products);
});

function displayProducts(products) {
	for (var i = 0; i < products.length; ++i) {
		var product = `<div id="product-" + ${products[i].id} class="product">
		<img src="images/${products[i].image}" />
		<h3 class="title"><a href="#">Product ${products[i].id}</a></h3>
		<span>Price: $${products[i].price.toFixed(2)}</span>
		<a class="add-to-cart" href="#" data-id=${products[i].id}>Add To Cart</a>
		</div>`;

		$("#products").append(product);
	}
}

function addToCart(products) {
	$(".add-to-cart").click(function () {
		var pId = $(this).data("id");

		for (var i = 0; i < products.length; ++i) {
			if (pId == products[i].id) {
				cart.push(products[i]);
				displayCartProducts(products[i]);
			}
		}
	});
}

function displayCartProducts(product) {
	var cartProduct = `<div id="product-" + ${product.id} class="product">
		<img src="images/${product.image}" />
		<h3 class="title"><a href="#">Product ${product.id}</a></h3>
		<span>Price: $${product.price.toFixed(2)}</span>
		</div>`;

	$("#cart").append(cartProduct);
}

console.log(cart);
