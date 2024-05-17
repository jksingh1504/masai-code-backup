const express = require("express");
const cors = require("cors");
const fs = require("fs");
// Do not forget to export the server.
// e.g => module.exports = server;
const app = express();

function logger(req, res, next) {
  try {
    const { url, method } = req;
    fs.appendFileSync(
      "./logs.txt",
      `Method:${method}, Route:${url}, user-agent:${req.headers["user-agent"]}\n`,
      "utf-8"
    );
    return next();
  } catch (error) {
    next(error);
  }
}


app.use(express.json());
app.use(cors(), logger);

app.get("/", (req, res) => {
  return res
    .status(200)
    .send(
      `<h1>Welcome new Team Member, You are about to be the part of best Superhero Team Out there!!!</h1>`
    );
});

app.post("/marvel/addnew", (req, res) => {
  try {
    const { body } = req;
    const dbJSON = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
    const id = dbJSON.marvel.length;
    body.id = id + 1;
    dbJSON.marvel.push(body);
    fs.writeFileSync("./db.json", JSON.stringify(dbJSON), "utf-8");
    res.status(200).json("New superhero has been added");
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

app.post("/dc/addnew", (req, res) => {
  try {
    const { body } = req;
    const dbJSON = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
    const id = dbJSON.dc.length;
    body.id = id + 1;
    dbJSON.dc.push(body);
    fs.writeFileSync("./db.json", JSON.stringify(dbJSON), "utf-8");
    return res.status(200).json("New superhero has been added");
  } catch (error) {
    return res.status(500).json(error);
  }
});

app.get("/marvel", (req, res) => {
  try {
    const { alias } = req.query;
    const { marvel } = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
    if (alias) {
      for (const hero of marvel) {
        if (hero.alias === alias) return res.status(200).json(hero);
      }
    }
    return res.status(200).json(marvel);
  } catch (error) {
    return res.status(500).json(error);
  }
});

app.get("/dc", (req, res) => {
  try {
    const { alias } = req.query;
    const { dc } = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
    if (alias) {
      for (const hero of dc) {
        if (hero.alias === alias) {
          return res.status(200).json(hero);
        }
      }
    }
    return res.status(200).json(dc);
  } catch (error) {
    return res.status(500).json(error);
  }
});

app.get("/marvel/:id", (req, res) => {
  try {
    const { id } = req.params;
    const { marvel } = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
    for (const hero of marvel) {
      if (hero.id === Number(id)) {
        return res.status(200).json(hero);
      }
    }
    return res.status(200).json({});
  } catch (error) {
    return res.status(500).json(error);
  }
});

app.get("/dc/:id", (req, res) => {
  try {
    const { id } = req.params;
    const { dc } = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
    for (const hero of dc) {
      if (hero.id === Number(id)) {
        return res.status(200).json(hero);
      }
    }
    return res.status(200).json({});
  } catch (error) {
    return res.status(500).json(error);
  }
});

app.get("/winningteam", (req, res) => {
  try {
    const { marvel, dc } = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
    const marvelPower = marvel.reduce((acc, ele) => {
      return acc + ele.power_level;
    }, 0);
    const dcPower = dc.reduce((acc, ele) => {
      return acc + ele.power_level;
    }, 0);
    return res.status(200).json(marvelPower >= dcPower ? marvel : dc);
  } catch (error) {
    return res.status(500).json(error);
  }
});

app.patch("/marvel/update/:id", (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;
    const dbJSON = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
    dbJSON.marvel = dbJSON.marvel.map((ele) => {
      if (ele.id === Number(id)) {
        ele = { ...ele, ...body };
      }
      return ele;
    });
    fs.writeFileSync("./db.json", JSON.stringify(dbJSON), "utf-8");
    return res.status(200).json("Patched Character Details");
  } catch (error) {
    return res.status(500).json(error);
  }
});

app.patch("/dc/update/:id", (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;
    const dbJSON = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
    dbJSON.dc = dbJSON.dc.map((ele) => {
      if (ele.id === Number(id)) {
        ele = { ...ele, ...body };
      }
      return ele;
    });
    fs.writeFileSync("./db.json", JSON.stringify(dbJSON), "utf-8");
    return res.status(200).json("Patched Character Details");
  } catch (error) {
    return res.status(500).json(error);
  }
});

app.delete("/marvel/delete/:id", (req, res) => {
  try {
    const { id } = req.params;
    const dbJSON = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
    dbJSON.marvel = dbJSON.marvel.filter((ele) => ele.id != id);
    fs.writeFileSync("./db.json", JSON.stringify(dbJSON), "utf-8");
    return res.status(200).send("Deleted Character Details");
  } catch (error) {
    return res.status(200).json(error);
  }
});

app.delete("/dc/delete/:id", (req, res) => {
  try {
    const { id } = req.params;
    const dbJSON = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
    dbJSON.dc = dbJSON.dc.filter((ele) => ele.id != id);
    fs.writeFileSync("./db.json", JSON.stringify(dbJSON), "utf-8");
    return res.status(200).send("Deleted Character Details");
  } catch (error) {
    return res.status(200).json(error);
  }
});

app.listen(3000, () => {
  console.log("server connected at port : 3000");
});

module.exports = app;
