const jwt = require("jsonwebtoken");

const checkShipperCurrent = (req, res, next) => {
  const Authorization = req.header("Authorization");
  if (!Authorization) {
    req.shipper = null;
    next();
  } else {
    const token = Authorization.replace("Bearer ", "");
    const { id } = jwt.verify(token, process.env.APP_SECRET);
    req.shipper = { id };
    next();
  }
};

module.exports = checkShipperCurrent;
