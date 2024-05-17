const formData={}

const handleSubmit = async () => {
	event.preventDefault();
	const form = await event.target.elements;
	// console.log(form[0])
	
	for (let i = 0; i < form.length - 1; i++) {
		const name = form[i].name;
		const value = form[i].value;
		formData[name] = value;
	}

	// console.log(formData);

	appendModal();
};

const toggle_input = (e, ref, i) => {
	e.preventDefault();
	// console.log(e, ref, i);
	if (e.key == "Backspace" && i > 0) {
		ref[i].value = "";
		ref[i - 1].focus();
	} else if (i < ref.length - 1 && e.key != "Backspace") {
		ref[i].value = e.key;
		ref[i + 1].focus();
	} else if (e.key == "Backspace" && i == 0) {
		ref[0].value = "";
		document.getElementById("0").value = "";
	} else if (e.key != "Backspace" && i == ref.length - 1) {
		ref[ref.length - 1].value = e.key;
		document.getElementById("3").value = e.key;
	}
};

const appendModal = () => {

	let div=document.createElement("div")
	div.setAttribute("id","modalParent")

	let modal = document.createElement("div");
	modal.setAttribute("id", "modal");

	let heading = document.createElement("h1");
	heading.innerText = "Enter OTP";

	modal.append(heading);

	let arr = new Array(4).fill(1);
	console.log(arr);

	let input_div = document.createElement("div");
	let ref = [];

	for (let i = 0; i < arr.length; i++) {
		let input = document.createElement("input");
		ref[i] = input;
		input.id = `${i}`;
		input_div.append(input);
	}

	for (let i = 0; i < ref.length; i++) {
		ref[i].addEventListener("keydown", () => {
			toggle_input(event, ref, i);
		});
	}

	let submit_button = document.createElement("button");
	submit_button.innerText = "Submit";
	submit_button.addEventListener("click", () => {
		handle_modal_Submit(ref);
	});

	modal.append(input_div, submit_button);

	div.append(modal)

	let body = document.querySelector("body");
	body.append(div);
};

const handle_modal_Submit = (ref) => {
	let bag = "";

	for (let i = 0; i < 4; i++) {
		bag += ref[i].value;
	}

	if (bag === "1234") {
		alert("Ad posted successfully");

		fetch("https://jk-mock-6-server.herokuapp.com/cars", {
			method: "POST",
			body: JSON.stringify(formData),
			headers: { "content-type": "application/json" },
		})
			.then((r) => r.json())
			.then((data) => {
                console.log(data)
                window.location.reload()
            });
	} else {
		alert("wrong OTP");
	}
};
