const mongoose = require("mongoose");
const { model, Schema, Types } = mongoose;

let talentSchema = Schema(
  {
    name: {
      type: String,
      required: [true, "Nama wajib diisi"],
    },
    role: {
      type: String,
      default: "-",
    },
    image: {
      type: Types.ObjectId,
      ref: "Image",
      required: true,
    },
    organizer: {
      type: Types.ObjectId,
      ref: "Organizer",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Talent", talentSchema);
