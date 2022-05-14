const express = require("express");
const { ObjectId } = require("mongodb");
const router = express.Router();
const connection = require("./connection");

router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.get("/users", async (req, res) => {
  try {
    if (connection.isConnected()) {
      const db = connection.db("db_latihan");
      const users = await db.collection("users").find().toArray();
      res.send({ data: users });
    } else {
      res.send("Connection database failed");
    }
  } catch (error) {
    res.send({ message: error.message || "internal server error" });
  }
});

router.post("/users", async (req, res) => {
  try {
    if (connection.isConnected()) {
      const { name, age, status } = req.body;
      const db = connection.db("db_latihan");
      const user = await db.collection("users").insertOne({
        name,
        age,
        status,
      });
      if (user.insertCount === 1) {
        res.send({ message: "Berhasil ditambahkan" });
      } else {
        res.send({ message: "Gagal menambahkan user" });
      }
    } else {
      res.send("Connection databse failed");
    }
  } catch (error) {
    res.send({ message: error.message || "internal server error" });
  }
});

router.put("/user/:id", async (req, res) => {
  try {
    if (connection.isConnected()) {
      const { id } = req.params;
      const { name, age, status } = req.body;
      const db = connection.db("db_latihan");
      const user = await db.collection("users").updateOne(
        { _id: ObjectId(id) },
        {
          $set: {
            name,
            age,
            status,
          },
        }
      );
      if (user.modifiedCount === 1) {
        res.send({ message: "Berhasil diubah" });
      } else {
        res.send({ message: "Gagal mengubah user" });
      }
    } else {
      res.send("Connection databse failed");
    }
  } catch (error) {
    res.send({ message: error.message || "internal server error" });
  }
});

router.delete("/user/:id", async (req, res) => {
  try {
    if (connection.isConnected()) {
      const { id } = req.params;
      const db = connection.db("db_latihan");
      const user = await db
        .collection("users")
        .deleteOne({ _id: ObjectId(id) });
      if (user.deletedCount === 1) {
        res.send({ message: "Berhasil dihapus" });
      } else {
        res.send({ message: "Gagal menghapus user" });
      }
    } else {
      res.send("Connection databse failed");
    }
  } catch (error) {
    res.send({ message: error.message || "internal server error" });
  }
});

module.exports = router;
