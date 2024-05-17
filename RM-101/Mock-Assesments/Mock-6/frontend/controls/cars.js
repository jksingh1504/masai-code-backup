const getCars = () => {
	fetch("https://jk-mock-6-server.herokuapp.com/cars")
		.then((r) => r.json())
		.then((data) => {
			
			appendCars(data);
		});
};

getCars();

const appendCars = (data) => {
	let carCardParent = document.getElementById("carCardParent");
	carCardParent.innerHTML = "";
	data.map((ele) => {
		let carCard = document.createElement("div");
		carCard.setAttribute("class", "carCard");

		let image = document.createElement("img");
		image.src =
			"https://media.autoexpress.co.uk/image/private/s--B2kg9LMk--/v1562246208/autoexpress/2018/04/dsc_3683-2.jpg";

		let brand = document.createElement("p");
		brand.innerText = `brand : ${ele.brand}`;

		let type = document.createElement("p");
		type.innerText = `Transmission type : ${ele.type}`;

		let year = document.createElement("p");
		year.innerText = `year of purchase : ${ele.year}`;

		let kms = document.createElement("p");
		kms.innerText = `KMS on Road : ${ele.kms}`;
		kms.style.color = "red";

		let price = document.createElement("p");
		price.innerText = `Price : ${ele.Price}`;
		price.style.color = "green";

		let deleteButton = document.createElement("button");
		deleteButton.addEventListener("click", () => {
			handleDelete(ele);
		});
		deleteButton.innerText = "Delete";

		let wishlist = document.createElement("div");
		wishlist.innerHTML = `<span class="material-icons">
        favorite_border
        </span>`;

		wishlist.addEventListener("click", () => {
			addToWishlist(ele, wishlist);
		});
		wishlist.style.display = "flex";
		wishlist.style.width = "100%";
		wishlist.style.justifyContent = "right";
		wishlist.style.marginTop = "-22px";

		carCard.append(
			image,
			brand,
			type,
			year,
			kms,
			price,
			deleteButton,
			wishlist
		);

		carCardParent.append(carCard);
	});
};

const handleDelete = (ele) => {
	fetch(`https://jk-mock-6-server.herokuapp.com/cars/${ele.id}`, {
		method: "DELETE",
	})
		.then((r) => r.json())
		.then((data) => {
			getCars();
		});
};

const handlePriceSort = () => {
	fetch(
		`https://jk-mock-6-server.herokuapp.com/cars?_sort=${event.target.name}&_order=${event.target.value}`
	)
		.then((r) => r.json())
		.then((data) => {
			console.log(data);
			appendCars(data);
		});
};

const addToWishlist = (ele, x) => {

	delete ele.id

	let post=JSON.stringify(ele)

	
	x.innerHTML = `<span class="material-icons">
    favorite
    </span>`;
	fetch("https://jk-mock-6-server.herokuapp.com/wishlisted_cars", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
        body:post
	}).then(r=>r.json()).then(data=>console.log(data));
};
