const express = require("express");
const fs=require("fs")
//@ts-ignore
const validRoutes=require("./routes/valid.routs")

const app = express();

app.use(express.json());
app.use(express.text());

const validationMiddleware = (req, res, next) => {
	if (req.method == "GET" || req.method=="PUT" || req.method == "PATCH" || req.method == "DELETE") {
		next();
		return;
	}

	try {
		const frontend_Movie_data = req.body;
		
		const checkPost = {
			id: "number",
			name: "string",
			rating: "number",
			description: "string",
			genre:"string",
			cast:"object"
		};

		for (let key in checkPost) {
			if (
				frontend_Movie_data[key] == undefined ||
				typeof frontend_Movie_data[key] != checkPost[key]
			) {
				// console.log(typeof frontend_Movie_data[key],key )
				
				return res.status(400).json({
					status:"error",
					error:"Validation Failed"
				});
			}
		}

		next();
	} catch (err) {
		res.send(err);
	}
};

app.use(validationMiddleware);


app.post("/movies",validRoutes)



app.listen(3000, () => {
	console.log("listening at port 3000");
});
