const mongoose = require("mongoose");
const { model, Schema, Types } = mongoose;

let categorySchema = Schema(
  {
    name: {
      type: String,
      minlength: [3, "Panjang nama kategori minimal 3 karakter"],
      maxlength: [20, "Panjang nama kategori maksimal 20 karakter"],
      required: [true, "Nama kategori wajib diisi"],
    },
    organizer: {
      type: Types.ObjectId,
      ref: "Organizer",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = model("Category", categorySchema);
