const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
	res.setHeader("content-type", "text/html");

	const urlParam = req.url;
	// console.log(urlParam);
	if (urlParam === "/favicon.ico") return res.end();

    // fs.readFile(`./index.js`,"utf-8",(e,d)=>{
    //     console.log(d)
    //     res.end(JSON.stringify(d))
    // })


	const DirPath = path.join(__dirname, urlParam);

	fs.readdir(DirPath, "utf-8", (err, files) => {
		files
			? res.end(
					`<ul>${files.map((ele) => {
						return `<li><a href=http://localhost:3000${urlParam}/${ele}>${ele}</a></li>`;
					})}</ul>`
			  )
			: fs.readFile(`./${urlParam}`, "utf-8", (Err, data) => {
					if (Err) {
						res.end("something went wrong, Please try again");
					} else {
						res.end(JSON.stringify(data));
					}
			  });
	});
});

server.listen(3000, () => {
	console.log("Listening at localhost:3000");
});
