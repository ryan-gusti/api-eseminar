const User = require("../../api/v1/users/model");
const Organizer = require("../../api/v1/organizers/model");
const { BadRequestError } = require("../../errors");

const createOrganizer = async (req) => {
  const { organizer, email, password, confirmPassword, name, role } = req.body;
  if (password !== confirmPassword) {
    throw new BadRequestError("Password dan Konfirmasi Pass tidak sesuai");
  }

  console.log(req.body);
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

module.exports = { createOrganizer };
