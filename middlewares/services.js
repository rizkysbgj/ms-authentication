const services = (req, res, next) => {
  const { locals: { }} = res;

  Object.assign(res.locals, { });

  next();
}

module.exports = [services];
