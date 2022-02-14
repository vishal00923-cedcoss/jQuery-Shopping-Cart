const products = [
	{ id: 101, name: "Basket Ball", image: "basketball.png", price: 150, quantity: 0 },
	{ id: 102, name: "Football", image: "football.png", price: 120, quantity: 0 },
	{ id: 103, name: "Soccer", image: "soccer.png", price: 110, quantity: 0 },
	{ id: 104, name: "Table Tennis", image: "table-tennis.png", price: 130, quantity: 0 },
	{ id: 105, name: "Tennis", image: "tennis.png", price: 100, quantity: 0 },
];

$(document).ready(function () {
	displayAllProducts();

	$(".add-to-cart").on("click", function () {
		let pid = $(this).data("id");

		// console.log(pid);
		cartProducts(pid);
	});
});

function displayAllProducts() {
	let allProducts = ``;

	for (item of products) {
		allProducts += `<div id="product-${item.id}" class="product">
                    <img src="images/${item.image}" />
                    <h3 class="title"><a href="#">Product ${item.id}</a></h3>
                    <span>Price: $${item.price.toFixed(2)}</span>
                    <a class="add-to-cart" href="#" data-id="${item.id}">Add To Cart</a>
                </div>`;
	}

	$("#products").append(allProducts);
}

function cartProducts(pid) {
	let cartTable = ``;

	for (item of products) {
		if (item.id === pid) {
			if (item.quantity == "0") {
				item.quantity++;

				cartTable += `<tr>
                   <td>${item.id}</td>
                   <td>${item.name}</td>
                   <td>$${item.price.toFixed(2)}</td>
                   <td><input type="text" value="${item.quantity}" id="${item.id}"></td>
                   <td><a href="#" id="remove" data-id="${item.id}">X</a></td>
                </tr>`;

				break;
			} else {
				let $input1 = $(`#${item.id}`);
				$input1 = $input1.val(parseInt($input1.val()) + 1);
				item.quantity++;
			}
		}
	}

	$("#cart-table").append(cartTable);
}
