const mongoose = require("mongoose");
const { model, Schema, Types } = mongoose;

const paymentSchema = new Schema(
  {
    type: {
      type: String,
      required: [true, "Tipe pembayaran wajib diisi"],
      minlength: 3,
      maxlength: 50,
    },
    image: {
      type: Types.ObjectId,
      enum: "Image",
      required: true,
    },
    status: {
      type: Boolean,
      enum: [true, false],
      default: true,
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

module.exports = model("Payment", paymentSchema);
