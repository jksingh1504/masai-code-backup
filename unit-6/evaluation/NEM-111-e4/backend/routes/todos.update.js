const { Router } = require("express");
const userModel = require("../models/user.model");
const todoModel = require("../models/todos.model");
require("dotenv").config();
const jwt = require("jsonwebtoken");

const updateTodo = Router();

updateTodo.patch("/todos/:Id", async (req, res) => {
	const { Id } = req.params;
	try {
		const token = req.headers.token;

		jwt.verify(token, process.env.secret_key, async (err, decoded) => {
			try {
				if (err) {
					return res.send("please login again");
				}
				const x = await userModel.find({ email: decoded.email });
				const { _id: id } = x[0];

				const usertodos = await todoModel.updateOne(
					{ user_id: id, _id: Id },
					{ $set: { ...req.body } }
				);

				res.send({ ...req.body });
			} catch (err) {
				res.send("something went wrong");
			}
			if (err) {
				return res.send("please login again");
			}
			const x = await userModel.find({ email: decoded.email });
			const { _id: id } = x[0];

			const usertodos = await todoModel.updateOne(
				{ user_id: id, _id: Id },
				{ $set: { ...req.body } }
			);

			res.send(req.body);
		});
	} catch (error) {
		res.send("something went wrong");
	}
});

module.exports = updateTodo;
