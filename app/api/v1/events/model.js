const mongoose = require("mongoose");
const { model, Schema, Types } = mongoose;

const ticketCategoriesSchema = Schema({
  type: {
    type: String,
    required: [true, "Tipe tiket wajib diisi"],
  },
  price: {
    type: Number,
    default: 0,
  },
  stock: {
    type: Number,
    default: 0,
  },
  statusTicketCategories: {
    type: Boolean,
    enum: [true, false],
    default: true,
  },
  expired: {
    type: Date,
  },
});

const EventSchema = Schema(
  {
    title: {
      type: String,
      required: [true, "Judul wajib diisi"],
      minlength: 3,
      maxlenght: 50,
    },
    date: {
      type: Date,
      required: [true, "Tanggal dan waktu wajib diisi"],
    },
    about: {
      type: String,
    },
    tagline: {
      type: String,
      required: [true, "Tagline wajib diisi"],
    },
    keyPoint: {
      type: [String],
    },
    venueName: {
      type: String,
      required: [true, "Tempat event wajib diisi"],
    },
    statusEvent: {
      type: String,
      enum: ["Draft", "Published"],
      default: "Draft",
    },
    tickets: {
      type: [ticketCategoriesSchema],
      required: true,
    },
    image: {
      type: Types.ObjectId,
      ref: "Image",
      required: true,
    },
    category: {
      type: Types.ObjectId,
      ref: "Category",
      required: true,
    },
    talent: {
      type: Types.ObjectId,
      ref: "Talent",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = model("Event", EventSchema);
