const { Router } = require("express");
const fs = require("fs");

//@ts-ignore
const validRoutes = Router();

validRoutes.post("/movies", (req, res) => {
	fs.readFile("./movies.json", "utf-8", (err, data) => {
		if (!err) {
			const parsed_data = JSON.parse(data);
			parsed_data.movies.push(req.body);
			fs.writeFile("./movies.json", JSON.stringify(parsed_data),"utf-8",(e)=>{
				if(!e)
				res.send(req.body)
				else res.send(e)
			});

		} else res.send(err);
	});
});

module.exports = validRoutes;
