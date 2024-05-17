const express = require("express");
const { movieModel } = require("./index");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

app.get("/movies", async (req, res) => {
	try {
		const query = req.query.q || "";

		const { page, limit } = req.query;

		if (req.query.sortby) {
			var sortby = req.query.sortby;
			var order = req.query.order === "asc" ? 1 : -1;

			var sort = {};
			sort[sortby] = order;
		}

		const movies = await movieModel
			.find({ title: { $regex: `${query}`, $options: "i" } }, { _id: 0 })
			.sort(sort)
			.skip(limit * (page - 1))
			.limit(limit);
		res.send(movies);
	} catch (err) {
		res.send(err);
	}
});

app.post("/movies/create", async (req, res) => {
	try {
		const movie = new movieModel(req.body);
		await movie.save();
		res.send("movie saved");
	} catch (err) {
		res.send(err);
	}
});

app.listen(3000, async () => {
	try {
		await mongoose.connect("mongodb://127.0.0.1:27017/moviesDB");
		console.log("connected to database");
	} catch (err) {
		console.log(err);
	}
});
