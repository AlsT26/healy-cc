const logRequest = (req, res, next) => {
  console.log("Ada log di path ini :", req.path);
  next();
};

module.exports = logRequest;
