const Product = require("../../models/products/Products");
const createError = require("../../middlewares/createError");

module.exports.createProduct = async (req, res, next) => {
  const product = new Product(req.body);
  try {
    await product.save();
    res.json({ message: "success", product });
  } catch (error) {
    next(createError(400, error));
  }
};

module.exports.getAllProducts = async (req, res, next) => {
  try {
    const products = await Product.find();
    res.json({ message: "success", length: products.length, products });
  } catch (error) {
    next(createError(400, "not get products"));
  }
};

module.exports.getProduct = async (req, res, next) => {
  const { id } = req.params;
  try {
    const product = await Product.findById(id);
    res.json({ message: "success", product });
  } catch (error) {
    next(createError(400, "not get product"));
  }
};

module.exports.updateProduct = async (req, res, next) => {
  const { id } = req.params;
  try {
    const product = await Product.findByIdAndUpdate(
      id,
      { ...req.body },
      {
        new: true,
      }
    );
    res.json({ message: "update success", product });
  } catch (error) {
    next(createError(400, error));
  }
};

module.exports.deleteProduct = async (req, res, next) => {
  const { id } = req.params;
  try {
    await Product.findByIdAndDelete(id);
    res.json({ message: "delete success" });
  } catch (error) {
    next(createError(400, "not delete product"));
  }
};
