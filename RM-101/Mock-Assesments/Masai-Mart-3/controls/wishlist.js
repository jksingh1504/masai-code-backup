const showWishList=()=>{
    const wishList=JSON.parse(localStorage.getItem("MasaiCart")) || [];

    let List = document.getElementById("productList");
        List.style.width="90%"
        List.style.margin="auto"
        
    wishList.map(ele=>{
        

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

		titleParent.append(title);

		productCard.append(image,brand, titleParent, price);

		List.append(productCard);
    })
}

showWishList()