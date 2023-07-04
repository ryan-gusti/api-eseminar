//import mongoose
const mongoose = require("mongoose");

//import config mongodb
const { urlDb } = require("../config");

//connect ke mongodb
mongoose.connect(urlDb);

//simpan koneksi ke variabel db
const db = mongoose.connection;

//export db supaya bisa digunakan oleh file lain yang membutuhkan
module.exports = db;
