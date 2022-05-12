const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.get("/user/:id", (req, res) => {
  const id = req.params.id;
  const user = {
    id: 1,
    name: "fihri aziz",
    age: 26,
  };
  if (Number(id) === 1) {
    res.send(user);
  } else {
    const user = {
      id: 2,
      name: "rizkyan",
      age: 25,
    };
    res.send(user);
  }
});

router.post("/users", (req, res) => {
  res.send("Got a POST request");
});

router.put("/user", (req, res) => {
  res.send("Got a PUT request at /user");
});

router.delete("/user", (req, res) => {
  res.send("Got a DELETE request at /user");
});

module.exports = router;
