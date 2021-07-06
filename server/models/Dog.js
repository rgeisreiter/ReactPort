const { Schema, model } = require("mongoose");

const dogSchema = new Schema({
  image: {
    type: String,
  },
  name: {
    type: String,
  },
  desc: {
    type: String,
  },
  age: {
    type: String,
  },
  size: {
    type: String,
  },
  gender: {
    type: Boolean,
  },
  liked: {
    type: Boolean,
  },
  adopted: {
    type: Boolean,
  },
});

const Dog = model("Dog", dogSchema);

module.exports = Dog;
