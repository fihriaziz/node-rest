const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://localhost:27017/db_latihan");
}

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => {
  console.log("server database connect");

  // Create Data

  //   const newUser = await User.create({
  //     name: "fihri aziz",
  //     age: 26,
  //     status: "active",
  //   });

  //   console.log(newUser);
  //   const newUser = new User();
  //   newUser.name = "tio";
  //   newUser.age = 24;
  //   newUser.status = "non active";
  //   const insert = await newUser.save();
  //   console.log(insert);

  // Update Data
  //   const updateUser = await User.updateOne(
  //     { _id: "62807223f35c756dbe99955a" },
  //     { name: "tio saputra" }
  //   );
  //   const updateUser = await User.findById({ _id: "62807223f35c756dbe99955a" });
  //   updateUser.name = "tio";
  //   const update = await updateUser.save();
  //   console.log(update);

  // Delete Data
  //   const deleteUser = await User.deleteOne({
  //     _id: "627e0d496eb6ea80d90cc6f7",
  //   });
  //   console.log(deleteUser);
});
