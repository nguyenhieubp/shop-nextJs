const Shipper = require("../../models/auth/Shipper");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const createError = require("../../middlewares/createError");

module.exports.register = async (req, res, next) => {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(req.body.password, salt);
  const shipper = new Shipper({
    ...req.body,
    password: hash,
  });
  try {
    await shipper.save();
    res.json({ message: "Register Success" });
  } catch (error) {
    console.log(error);
    next(400, error);
  }
};

module.exports.login = async (req, res, next) => {
  const shipper = await Shipper.findOne({ email: req.body.email });
  if (shipper) {
    if (bcrypt.compareSync(req.body.password, shipper.password)) {
      const token = jwt.sign({ id: shipper._id }, process.env.APP_SECRET);
      const { password, ...rest } = shipper._doc;
      res.json({ message: "SUCCESS", shipper: rest, token });
    } else {
      return next(createError(400, "password not matches"));
    }
  } else {
    next(createError(400, "email not matches"));
  }
};

module.exports.checkShipperCurrent = async (req, res, next) => {
  if (req.shipper) {
    const shipper = await Shipper.findById(req.shipper.id);
    const { password, ...rest } = shipper;
    res.json({ message: "success", shipper: rest._doc });
  } else {
    next(createError(400, "please login"));
  }
};

module.exports.getAllShipper = async (req, res, next) => {
  const shippers = await Shipper.find();
  try {
    res.json({ message: "success", length: shippers.length, shippers });
  } catch (error) {
    next(createError(400, error));
  }
};

module.exports.getShipper = async (req, res, next) => {
  const { id } = req.params;
  try {
    const shipper = await Shipper.findById(id);
    res.json({ message: "success", shipper });
  } catch (error) {
    next(createError(400, error));
  }
};

module.exports.updateShipper = async (req, res, next) => {
  const { id } = req.params;
  try {
    const shipper = await Shipper.findByIdAndUpdate(
      id,
      { ...req.body },
      { new: true }
    );
    res.json({ message: "success", shipper });
  } catch (error) {
    next(createError(400, error));
  }
};

module.exports.deleteShipper = async (req, res, next) => {
  const { id } = req.params;
  try {
    await Shipper.findByIdAndDelete(id);
    res.json({ message: "delete success" });
  } catch (error) {
    next(createError(400, error));
  }
};
