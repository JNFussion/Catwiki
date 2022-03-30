var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var SearchedBreed = new Schema({
  name: { type: String, required: true },
});

module.exports = mongoose.model("SearchedBreed", SearchedBreed);
