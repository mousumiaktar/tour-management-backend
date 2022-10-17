const mongoose = require("mongoose");
const valid = require("validator");

const tourSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "You have to set a tour name"],
            unique: true,
            trim: true,
            minlength: [5, "A tour name must have 5 characters"],
            maxLength:[50, "Name is too large"]
        },
        imageURLs: {
          type: String,
          required: true,
          validate: [valid.isURL, "wrong url"]
        },
        price: {
            type: Number,
            required: [true, "A tour must have a price"]
        },
        duration: {
            type: String,
            required: [true, "A tour must have a duration"],
          },
        description: {
            type: String,
            trim: true,
            required: [true, "A tour must have a description"],
          },
          views: {
            type: Number,
            default: 0,
          }
    },
    {
        timestamps: true,
      }
);

const Tour = mongoose.model("Tour", tourSchema);
module.exports = Tour;