const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const birthdaySchema = new Schema({
  name: { type: String },

  age: { type: Number },

  image: { type: String },
});

module.exports = mongoose.model("Birthday", birthdaySchema);
