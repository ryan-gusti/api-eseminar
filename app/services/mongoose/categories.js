const Categories = require("../../api/v1/categories/model");
const { BadRequestError, NotFoundError } = require("../../errors");

const getAllCategories = async (req) => {
  const result = await Categories.find({ organizer: req.user.organizer });

  return result;
};

const createCategories = async (req) => {
  const { name } = req.body;

  // cek categories filed name
  const check = await Categories.findOne({
    name,
    organizer: req.user.organizer,
  });

  // apabila check true maka categories sudah ada makan tampilkan bad request
  if (check) throw new BadRequestError("Kategori sudah ada!");

  const result = await Categories.create({
    name,
    organizer: req.user.organizer,
  });
  return result;
};

const getOneCategories = async (req) => {
  const { id } = req.params;
  const result = await Categories.findOne({
    _id: id,
    organizer: req.user.organizer,
  });

  if (!result) throw new NotFoundError(`Tidak ada kategori dengan id : ${id}`);

  return result;
};

const updateCategories = async (req) => {
  const { id } = req.params;
  const { name } = req.body;

  //cari kategori dengan field name dan id selain dari yang dikirim dari params
  const check = await Categories.findOne({
    name,
    organizer: req.user.organizer,
    _id: { $ne: id },
  });

  //apabila check = true / data kategori sudah ada maka tampilkan error bad request
  if (check) throw new BadRequestError("nama kategori duplikat");

  const result = await Categories.findOneAndUpdate(
    { _id: id },
    { name },
    { new: true, runValidators: true }
  );

  //jika id result false/null maka tampilkan error NotFound
  if (!result) throw new NotFoundError(`Tidak ada kategori dengan id : ${id}`);

  return result;
};

const deleteCategories = async (req) => {
  const { id } = req.params;
  const result = await Categories.findOne({
    _id: id,
    organizer: req.user.organizer,
  });

  if (!result) throw new NotFoundError(`Tidak ada kategori dengan id : ${id}`);

  await result.deleteOne();
  return result;
};

const checkingCategories = async (id) => {
  const result = await Categories.findOne({ _id: id });
  if (!result) throw new NotFoundError(`Tidak ada kategori dengan id: ${id}`);
  return result;
};

module.exports = {
  getAllCategories,
  createCategories,
  getOneCategories,
  updateCategories,
  deleteCategories,
  checkingCategories,
};
