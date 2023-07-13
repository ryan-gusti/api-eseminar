const User = require("../../api/v1/users/model");
const Organizer = require("../../api/v1/organizers/model");
const { BadRequestError } = require("../../errors");
const { StatusCodes } = require("http-status-codes");

const createOrganizer = async (req) => {
  const { organizer, email, password, confirmPassword, name, role } = req.body;
  if (password !== confirmPassword) {
    throw new BadRequestError("Password dan Konfirmasi Pass tidak sesuai");
  }

  const result = await Organizer.create({ organizer });

  const users = await User.create({
    email,
    name,
    password,
    role,
    organizer: result._id,
  });

  delete users._doc.password;

  return users;
};

const createUsers = async (req, res) => {
  const { name, password, role, confirmPassword, email } = req.body;

  if (password !== confirmPassword) {
    throw new BadRequestError("Password dan Konfirmasi Password");
  }

  const result = await User.create({
    name,
    email,
    organizer: req.user.organizer,
    password,
    role,
  });

  return result;
};

const getAllUsers = async (req) => {
  const result = await User.find();
  return result;
};

module.exports = { createOrganizer, createUsers, getAllUsers };
