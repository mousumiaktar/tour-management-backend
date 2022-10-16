const mongoose = require("mongoose");

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
        packageName: {
            type: String,
            required: [true, "You have to set a tour name"],
            unique: true,
            trim: true,
            minlength: [5, "A tour name must have 5 characters"],
            maxLength:[50, "Name is too large"]
        },
        price: {
            type: Number,
            required: [true, "A tour must have a price"]
        },
        duration: {
            type: Number,
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
    }
);

const Tour = mongoose.model("Tour", tourSchema);
module.exports = Tour;