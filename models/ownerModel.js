const mongoose = require("mongoose");

const ownerSchema = mongoose.Schema({
  fullName: {
    type: String,
    minLength: 3,
    trim: true,
  },
  email: String,
  passowrd: String,
  isAdmin: Boolean,
  products: {
    type: Array,
    default: [],
  },
  gstin: String,
  picture: String,
});

module.exports = mongoose.model("owner", ownerSchema);
