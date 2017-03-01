// Require mongoose
var mongoose = require("mongoose");
// Create Schema object constructor
var Schema = mongoose.Schema;

// Create article schema
var ArticleSchema = new Schema({
  // title of article
  title: {
    type: String,
    required: true
},
  // date article was written
  date: {
    type: Date,
    required: true,
  },
  // url of article
  url: {
    type: String,
    required: true
  }
});

// Create the Article model with the ArticleSchema
var Article = mongoose.model("Article", ArticleSchema);

// Export the model
module.exports = Article;
