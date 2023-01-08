const Store = require("../../models/products/Store");
const createError = require("../../middlewares/createError");

module.exports.getStore = async (req, res, next) => {
  try {
    const store = await Store.find();
    res.json({ message: "success", store });
  } catch (error) {
    next(createError(400, error));
  }
};

module.exports.createStore = async (req, res, next) => {
  const newStore = new Store();
  try {
    newStore.save();
    res.json({ message: "success", store: newStore });
  } catch (error) {
    next(createError(400, error));
  }
};

module.exports.addProduct = async (req, res, next) => {
  try {
    const store = await Store.findByIdAndUpdate(
      req.params.id,
      { $push: { products: req.body } },
      {
        new: true,
      }
    );
    res.json({ message: "success", store });
  } catch (error) {
    next(createError(400, error));
  }
};

module.exports.removeProduct = async (req, res, next) => {
  try {
    const store = await Store.findByIdAndUpdate(
      req.params.id,
      { $pull: { products: req.body } },
      {
        new: true,
      }
    );
    res.json({ message: "success", store });
  } catch (error) {
    next(createError(400, error));
  }
};

module.exports.deleteStore = async (req, res, next) => {
  try {
    await Store.findByIdAndDelete(req.params.id);
    res.json({ message: "Delete success" });
  } catch (error) {
    next(createError(400, error));
  }
};
