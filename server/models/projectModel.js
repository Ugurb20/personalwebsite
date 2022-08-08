const mongoose = require("mongoose");

const goalSchema = mongoose.Schema(
  {
    heading: {
      type: String,
      required: [true],
    },
    text: {
      type: String,
      required: [true, "Please add a text value"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Goal", goalSchema);
