const createError = require("../../middlewares/createError");
const BillRoot = require("../../models/products/BillRoot");
const Receipt = require("../../models/products/Receipt");

module.exports.createBillRoot = async (req, res, next) => {
  const billRoot = new BillRoot(req.body);
  try {
    await billRoot.save();
    res.json({ message: "success", billRoot });
  } catch (error) {
    next(createError(400, error));
  }
};

module.exports.getAllBillRoot = async (req, res, next) => {
  try {
    const billRoots = await BillRoot.find().populate(
      "shipper receipt",
      "-password"
    );
    res.json({ message: "success", length: billRoots.length, billRoots });
  } catch (error) {
    next(createError(400, error));
  }
};

module.exports.getBillRoot = async (req, res, next) => {
  const { id } = req.params;
  try {
    const billRoot = await BillRoot.findById(id).populate(
      "shipper receipt",
      "-password"
    );
    res.json({ message: "success", billRoot });
  } catch (error) {
    next(createError(400, error));
  }
};

module.exports.shipperGetBill = async (req, res, next) => {
  const { id } = req.admin;
  try {
    const bill = await BillRoot.find({ shipper: id });
    if (bill) {
      const receipt = await Promise.all(
        bill.map((item) => {
          return Receipt.findById(item.receipt);
        })
      );
      return res.json({ receipt });
    }

    res.json({ receipt: [] });
  } catch (error) {
    console.log(error);
    next(createError(400, error));
  }
};

module.exports.updateBillRoot = async (req, res, next) => {
  const { id } = req.params;
  try {
    const billRoot = await BillRoot.findByIdAndUpdate(
      id,
      { ...req.body },
      {
        new: true,
      }
    );
    res.json({ message: "update success", billRoot });
  } catch (error) {
    next(createError(400, error));
  }
};

module.exports.deleteBillRoot = async (req, res, next) => {
  const { id } = req.params;
  try {
    await BillRoot.findByIdAndDelete(id);
    res.json({ message: "delete success" });
  } catch (error) {
    next(createError(400, error));
  }
};
