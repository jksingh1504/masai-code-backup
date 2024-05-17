const fs = require("fs");
const express = require("express");

const app = express();

app.use(express.json());

app.get("/todos", (req, res) => {
	fs.readFile("./db.json", "utf-8", (err, todos) => {
		const finalRes = JSON.parse(todos);
		res.setHeader("content-type", "application/json");
		res.send(finalRes.todos);
	});
});

app.post("/todos", (req, res) => {
	// console.log(req.body)

	fs.readFile("./db.json", "utf-8", (err, todos) => {
		const serverData = JSON.parse(todos);
		serverData.todos.push(req.body);
		fs.writeFile("./db.json", JSON.stringify(serverData), (e, finalData) => {
			res.send(req.body);
		});
	});
});

app.patch("/todos", (req, res) => {
	let index;

	fs.readFile("./db.json", "utf-8", (err, todos) => {
		if (err) {
			res.send("something went wrong");
		} else {
			const serverData = JSON.parse(todos);
			const { id } = req.body;
			serverData.todos = serverData.todos.map((ele, indx) => {
				if (ele.id === id) {
					index = indx;
					return { ...ele, ...req.body };
				}
				return ele;
			});
			fs.writeFile("./db.json", JSON.stringify(serverData), (e, finalData) => {
				// console.log(serverData.todos[index])
				res.send(serverData.todos[index]);
			});
		}
	});
});

app.put("/todos", (req, res) => {
	let index;

	fs.readFile("./db.json", "utf-8", (err, todos) => {
		if (err) {
			res.send("something went wrong");
		} else {
			const serverData = JSON.parse(todos);
			const { id } = req.body;
			serverData.todos = serverData.todos.map((ele, indx) => {
				if (ele.id === id) {
                    index=indx;
					return req.body;
				}
				return ele;
			});
			fs.writeFile("./db.json", JSON.stringify(serverData), (e, finalData) => {
				console.log(serverData.todos[index])
				res.send(serverData.todos[index]);
			});
		}
	});
});

app.delete("/todos", (req, res) => {

	fs.readFile("./db.json", "utf-8", (err, todos) => {
		if (err) {
			res.send("something went wrong");
		} else {
			const serverData = JSON.parse(todos);
			const { id } = req.body;
			serverData.todos = serverData.todos.filter((ele, indx) => {
				return ele.id !== id;
			});
			fs.writeFile("./db.json", JSON.stringify(serverData), (e, finalData) => {
				// console.log(serverData.todos[index])
				res.send({});
			});
		}
	});
});

app.listen(3000, () => {
	console.log("Listening at port 3000");
});
