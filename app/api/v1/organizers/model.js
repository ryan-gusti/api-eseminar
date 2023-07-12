const mongoose = require("mongoose");
const { model, Schema } = mongoose;

let organizerShcema = Schema({
  organizer: {
    type: String,
    required: [true, "Penyelenggara harus diisi"],
  },
});

module.exports = model("Organizer", organizerShcema);
