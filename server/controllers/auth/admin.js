const Admin = require("../../models/auth/Admin");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const createError = require("../../middlewares/createError");

module.exports.register = async (req, res) => {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(req.body.password, salt);
  const admin = new Admin({
    ...req.body,
    password: hash,
  });
  try {
    await admin.save();
    res.json({ message: "Register Success" });
  } catch (error) {}
};

module.exports.login = async (req, res, next) => {
  const admin = await Admin.findOne({ email: req.body.email });
  if (admin) {
    if (bcrypt.compareSync(req.body.password, admin.password)) {
      const token = jwt.sign({ id: admin._id }, process.env.APP_SECRET, {
        // expiresIn: "1m",
      });
      const { password, ...rest } = admin._doc;
      res.json({ message: "SUCCESS", admin: rest, token });
    } else {
      return next(createError(400, "password not matches"));
    }
  } else {
    next(createError(400, "email not matches"));
  }
};
