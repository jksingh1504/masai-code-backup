const addTowishList = (ele) => {
	const wishList = JSON.parse(localStorage.getItem("MasaiCart")) || [];
	// console.log(wishList)
	for(let i=0;i<wishList.length;i++){
		// console.log(wishList[i].title)
		if(ele.title==wishList[i].title)
		return
	}
	wishList.push(ele);
	localStorage.setItem("MasaiCart", JSON.stringify(wishList));
};

const getData = async (page=1,limit=12,order="asc") => {

	await fetch(
		`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?page=${page}&limit=${limit}&orderBy=${order}`
	)
		.then((r) => r.json())
		.then((data) => {
			showData(data);
		});
};

getData();

const showData = async (Allproducts) => {
	console.log(Allproducts);
    let List = document.getElementById("productList");
    List.innerHTML="";

	await Allproducts.data.map((ele, indx) => {

		let productCard = document.createElement("div");
		productCard.setAttribute("id", "productCard");

		let image = document.createElement("img");
		image.src = ele.image;

		let brand=document.createElement("p");
		brand.innerText=`(${ele.brand})`
		brand.style.color="gray"
		brand.style.margin="10px 0px 0px"

		let titleParent = document.createElement("div");
		titleParent.style.display = "flex";
		titleParent.style.justifyContent = "space-between";
		titleParent.style.alignItems = "center";

		let title = document.createElement("p");
		title.innerText = ele.title;

		let wishlist = document.createElement("div");
		wishlist.style.marginTop = "6px";
		wishlist.innerHTML = `<span style="color:#744eaa" class="material-icons">
    favorite_border
    </span>`;

		wishlist.addEventListener("click", function () {
            // console.log(ele)
			addTowishList(ele);
            wishlist.innerHTML=`<span style="color:#744eaa" class="material-icons">
            favorite
            </span>`
		});

		let price = document.createElement("p");
		price.style.margin="0px 0px 10px"
		price.innerText = `$ ${ele.price}`;
		price.style.color = "green";
		price.style.display="flex"
		price.style.padding="6px 8px"
		price.style.borderRadius="4px"
		price.style.width="fit-content"
		price.style.backgroundColor="yellow"
		productCard.style.cursor = "pointer";
		price.style.alignSelf="flex-end"

		titleParent.append(title, wishlist);

		productCard.append(image,brand, titleParent, price);

		List.append(productCard);
	});
};
