const db = require("../config/connection");
const { Dog, User } = require("../models");

const dogData = require("./dogSeeds.json");
const userData = require("./userSeeds.json");

db.once("open", async () => {
  if (Dog) {
    await db.collection("dogs").deleteMany;
  }

  if (User) {
    await db.collection("users").deleteMany;
  }

  const dogs = await db.collection("dogs").insertMany(dogData);
  const users = await db.collection("users").insertMany(userData);

  console.log("dogs and users seeded!");
  process.exit(0);
});
