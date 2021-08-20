fetch("http://localhost:3000/products")
  .then(response => response.json())
  .then(data => render(data));

function render(products) {	
	let str = "";
	products.forEach(product => {
		str += generateProductsHTML(product.id, product.title, product.description, product.image, product.brand, product.price);
	})
	
	$("#product-list").empty();
	$("#product-list").html(str);
}

function generateProductsHTML(id, title, description, imageSrc, brand, price) {
	
let str = `<div class="product col-lg-4 col-md-6 mb-4">   
			<div class="card h-100"> 
			 <a href="#" 
				><img 
					class = "card-img-top" 
					 src =  ${imageSrc} 
					 alt = ${title} 
			/></a>
			<div class="card-body">
				<h4 class="card-title">
				    <a href="#">${title}</a> 
				</h4> 
				<h5 class="product-price"> ${new Intl.NumberFormat().format(price)} تومان </h5> 
				<p class="card-text"> 
				    ${description} 
				</p> 
			</div> 
			<div class="card-footer">
				<button class="btn btn-light add-to-cart" data-product-id=
				${id}>
					افزودن به سبد خرید
				</button>
			</div>
		</div> 
	</div>`
	
	return str;
}

