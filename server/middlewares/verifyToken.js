const jwt = require("jsonwebtoken");
const createError = require("./createError");

const verifyToken = (req, res, next) => {
  const Authorization = req.header("Authorization");
  if (!Authorization) {
    next(createError(400, "Not admin"));
  }
  const token = Authorization.replace("Bearer ", "");
  const { id } = jwt.verify(token, process.env.APP_SECRET);
  req.admin = { id };
  next();
};

module.exports = verifyToken;
