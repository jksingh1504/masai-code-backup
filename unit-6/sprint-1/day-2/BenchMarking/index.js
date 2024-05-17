const fs = require("fs");
const http = require("http");

const server1 = http.createServer((req, res) => {
	try {
		const data = fs.readFileSync("./hello.txt", "utf-8");
		res.end(data);
	} catch (err) {
		res.end(err || "something went wrong");
	}
});

const server2 = http.createServer((req, res) => {
	try {
		fs.readFile("./hello.txt", "utf-8", (err, data) => {
			if (err) {
				return res.end("something went wrong");
			} else {
				return res.end(data);
			}
		});
	} catch (err) {
		res.end(err || "something went wrong");
	}
});

const server3 = http.createServer((req, res) => {
	try {
		let readerStream = fs.createReadStream("./hello.txt","utf-8");
		readerStream.pipe(res);
	} catch (err) {
		res.end(err || "something went wrong");
	}
});

const server4 = http.createServer((req, res) => {
	try {
		const data = fs.readFileSync("./helloSmall.txt", "utf-8");
		res.end(data);
	} catch (err) {
		res.end(err || "something went wrong");
	}
});

const server5 = http.createServer((req, res) => {
	try {
		fs.readFile("./helloSmall.txt", "utf-8", (err, data) => {
			if (err) {
				return res.end("something went wrong");
			} else {
				return res.end(data);
			}
		});
	} catch (err) {
		res.end(err || "something went wrong");
	}
});

const server6 = http.createServer((req, res) => {
	try {
		let readerStream = fs.createReadStream("./helloSmall.txt","utf-8");
		readerStream.pipe(res);
	} catch (err) {
		res.end(err || "something went wrong");
	}
});

server1.listen(3000, () => {
	console.log("Listening at port localhost:3000");
});

server2.listen(3001, () => {
	console.log("Listening at port localhost:3001");
});

server3.listen(3002, () => {
	console.log("Listening at port localhost:3002");
});

server4.listen(3003, () => {
	console.log("Listening at port localhost:3003");
});

server5.listen(3004, () => {
	console.log("Listening at port localhost:3004");
});

server6.listen(3005, () => {
	console.log("Listening at port localhost:3005");
});
