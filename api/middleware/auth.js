const { ValidateSignature } = require("../../utils");
module.exports = async (req, res, next) => {
  try {
    // Skip authorization check and allow all requests
    req.user = {}; // Optionally, you can add a mock `user` object here
    return next(); // Proceed to the next middleware or route handler
  } catch (error) {
    // In case of any unexpected error, still allow access
    return next();
  }
};
