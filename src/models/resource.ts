const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const Resource = new Schema({
  data: String
});

export default mongoose.model('Resource', Resource);