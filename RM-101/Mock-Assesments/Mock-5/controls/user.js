const handleSubmit = async () => {
	event.preventDefault();
	const form = await event.target.elements;
	// console.log(form[0])
	const formData = {};

	for (let i = 0; i < form.length - 1; i++) {
		const name = form[i].name;
		const value = form[i].value;
		formData[name]=value;
	}

	fetch("http://localhost:8080/users", {
		method: "POST",
		body: JSON.stringify(formData),
		headers: { "content-type": "application/json" },
	})
		.then((r) => r.json())
		.then((data) => console.log(data));
};

