const authMiddleware = (req, res, next) => {
  console.log("Authentication Successful");

  next();
};

module.exports = authMiddleware;