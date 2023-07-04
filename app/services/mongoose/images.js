const Images = require("../../api/v1/images/model");

const createImages = async (req) => {
  const result = await Images.create({
    url: req.file ? `uploads/${req.file.filename}` : "uploads/avatar/user.png",
  });

  return result;
};

module.exports = { createImages };
