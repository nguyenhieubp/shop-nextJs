const createError = require("../../middlewares/createError");
const Receipt = require("../../models/products/Receipt");
const Product = require("../../models/products/Products");
const { $where } = require("../../models/products/Receipt");

module.exports.getReceipt = async (req, res, next) => {
  try {
    const receipts = await Receipt.find();
    res.json({
      message: "success",
      length: receipts.length,
      receipts: receipts,
    });
  } catch (error) {
    next(createError(400, error));
  }
};

module.exports.createReceipt = async (req, res, next) => {
  const receipt = new Receipt(req.body);
  try {
    receipt.save();
    res.json({ message: "success", receipt });
  } catch (error) {
    next(createError(400, error));
  }
};
