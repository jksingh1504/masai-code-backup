const fs = require("fs");
const express = require("express");

const app = express();

app.use(express.json());
app.use(express.text());

const validator = (req, res, next) => {
	if (req.method == "GET" || req.method == "PATCH" || req.method == "DELETE") {
		next();
		return;
	}
	// console.log(req.method)

	const frontEndPost = req.body;
	const checkPost = {
		id: "number",
		title: "string",
		content: "string",
		author: "string",
	};

	for (let key in checkPost) {
		if (
			frontEndPost[key] == undefined ||
			typeof frontEndPost[key] != checkPost[key]
		) {
			res.send("Validation Failed");
			return;
		}
	}
	next();
};

const logger = (req, res, next) => {
	const log = req.method + "," + req.url + "," + req.headers["user-agent"];
	// console.log(log)

	function processInput(text) {
		fs.open("./logs.txt", "a", 666, function (e, id) {
			fs.write(id, text + "\n", null, "utf8", function () {
				fs.close(id, function () {
					console.log("file is updated");
				});
			});
		});
	}
	processInput(log);
	next();
	// let log=req.method+","+req.route+","+req.user-agent
};


const guard=(req,res,next)=>{

    if (req.method == "GET" || req.method == "POST") {
		next();
		return;
	}



    if(req.query.password==54123)
    next()
    else {
        res.send("You are not authorised to do this operation")
        return
    }
}





app.use(validator, guard ,logger);

app.get("/posts", (req, res) => {
	try {
		fs.readFile("./posts.json", "utf-8", (err, data) => {
			if (!err) {
				const parsed_Data = JSON.parse(data);
				res.send(parsed_Data.posts);
			} else {
				res.send(err);
			}
		});
	} catch (Err) {
		res.send(Err);
	}
});

app.post("/posts/create", (req, res) => {
	const frontEndPost = req.body;

	try {
		fs.readFile("./posts.json", "utf-8", (err, data) => {
			if (!err) {
				const parsed_Data = JSON.parse(data);
				parsed_Data.posts.push(frontEndPost);
				fs.writeFile(
					"./posts.json",
					JSON.stringify(parsed_Data),
					"utf-8",
					() => {
						res.send(frontEndPost);
					}
				);
			} else {
				res.send(err);
			}
		});
	} catch (Err) {
		res.send(Err);
	}
});

app.put("/posts/:postId", (req, res) => {
	const { postId: id } = req.params;
	const frontEndPost = req.body;

	try {
		fs.readFile("./posts.json", "utf-8", (err, data) => {
			if (!err) {
				const parsed_Data = JSON.parse(data);
				parsed_Data.posts = parsed_Data.posts.map((ele) => {
					if (ele.id == id) {
						return frontEndPost;
					}
					return ele;
				});
				fs.writeFile(
					"./posts.json",
					JSON.stringify(parsed_Data),
					"utf-8",
					() => {
						res.send(frontEndPost);
					}
				);
			} else {
				res.send(err);
			}
		});
	} catch (Err) {
		res.send(Err);
	}
});

app.patch("/posts/:postId", (req, res) => {
	const { postId: id } = req.params;
	const frontEndPost = req.body;

	try {
		fs.readFile("./posts.json", "utf-8", (err, data) => {
			if (!err) {
				const parsed_Data = JSON.parse(data);
				parsed_Data.posts = parsed_Data.posts.map((ele) => {
					if (ele.id == id) {
						return { ...ele, ...frontEndPost };
					}
					return ele;
				});
				fs.writeFile(
					"./posts.json",
					JSON.stringify(parsed_Data),
					"utf-8",
					() => {
						res.send(frontEndPost);
					}
				);
			} else {
				res.send(err);
			}
		});
	} catch (Err) {
		res.send(Err);
	}
});

app.delete("/posts/:postId", (req, res) => {
	const { postId: id } = req.params;
	// console.log("hello")

	try {
		fs.readFile("./posts.json", "utf-8", (err, data) => {
			if (!err) {
				const parsed_Data = JSON.parse(data);
				parsed_Data.posts = parsed_Data.posts.filter((ele) => {
					// console.log(ele.id==id )
					return ele.id != id;
				});
				fs.writeFile(
					"./posts.json",
					JSON.stringify(parsed_Data),
					"utf-8",
					() => {
						res.send({});
					}
				);
			} else {
				res.send(err);
			}
		});
	} catch (Err) {
		res.send(Err);
	}
});

app.listen(3000, () => {
	console.log("Listening on localhost:3000");
});



