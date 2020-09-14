const passport = require('passport');
const createError = require('http-errors');

module.exports = (req, res, next) => {
  passport.authenticate('local', function (err, user, info) {
    if (err) {
      return next(err);
    }
    if (!user) {
      return next(createError(400, info));
    }
    for (key in info) {
      req.headers[key] = info[key]
    }
    return next()
  })(req, res, next);
}