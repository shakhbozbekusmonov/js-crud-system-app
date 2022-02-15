
let products = [];
let selectedIndex = -1;


function addProduct(){
	let productName = document.getElementById("product-name").value;
	let productPrice = document.getElementById("product-price").value;
	let productColor = document.getElementById("product-color").value;

	document.getElementById("product-name").value = "";
	document.getElementById("product-price").value = "";
	document.getElementById("product-color").value = "";


	let newProduct ={
		name: productName,
		price: productPrice,
		color: productColor
	};

	if (selectedIndex >= 0){
		products[selectedIndex] = newProduct;
		selectedIndex = -1;
	} else {
		products.push(newProduct);
	}


	drawCards();


	console.log(products);
}

function deleteProduct(index){
	products.splice(index, 1);
	drawCards();
}

function drawCards(){
	let result = "";

	for (let i = 0; i < products.length; i++){
		result +=
			"<div class='col-4 mb-3'>" +
			"<div class='card'>" +
			"<div class='card-header'><h5>"+ products[i].name +"</h5></div>" +
			"<div class='card-body'>" +
			"<p>Price: <b>"+ products[i].price +"</b></p>" +
			"<p>Color: <b style='color: "+ products[i].color +"'>"+ products[i].color +"</b></p>" +
			"</div>" +
			"<div class='card-footer d-flex justify-content-between'>" +
			"<button type='button' class='btn btn-success' onclick='editProduct("+ i +")'>Edit</button>" +
			"<button type='button' class='btn btn-danger' onclick='deleteProduct("+ i +")'>Delete</button>" +
			"</div>" +
			"</div>" +
			"</div>"
	}
	document.getElementById("result").innerHTML = result;
}

function editProduct(index){
	document.getElementById("product-name").value = products[index].name;
	document.getElementById("product-price").value = products[index].price;
	document.getElementById("product-color").value = products[index].color;

	selectedIndex = index;
}