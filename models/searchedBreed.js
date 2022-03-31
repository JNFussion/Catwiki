var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var SearchedBreed = new Schema({
  name: { type: String, required: true },
});

SearchedBreed.virtual("url").get(function () {
  return "/breed/" + this.name;
});

module.exports = mongoose.model("SearchedBreed", SearchedBreed);
