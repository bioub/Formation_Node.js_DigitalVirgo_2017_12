module.exports = (req, res, next) => {
  if (req.headers.authorization === '123') {
    return next();
  }
  res.statusCode = 401;
  res.json({
    msg: 'Unauthorized',
  });
};
