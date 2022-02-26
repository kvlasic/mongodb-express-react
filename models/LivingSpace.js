const mongoose = require("mongoose");

// a schema is a description of what data should look like
const LivingSpaceSchema = new mongoose.Schema(
  {
    title: {
      type: "String",
    },
    address: {
      type: "String",
    },
    date: {
      type: "Date",
    },
    description: {
      type: "String",
    },
    minimum_nights: {
      type: "Number",
    },
    maximum_nights: {
      type: "Number",
    },
    currently_available: {
      type: "Boolean",
    },
    rooms: {
      type: "Number",
    },
    maximum_guests: {
      type: "Number",
    },
    parking: {
      type: "Boolean",
    },
    wifi: {
      type: "Boolean",
    },
    price_per_night: {
      type: "Number",
    },
    createdAt: {
      type: "Date",
    },
    updatedAt: {
      type: "Date",
    },
    publishedAt: {
      type: "Date",
    },
    image_src: {
      type: "String",
    },
  },
  { timestamps: true }
);

// model is the tool you use to interact with DB
const LivingSpace = mongoose.model("LivingSpace", LivingSpaceSchema);

module.exports = LivingSpace;
