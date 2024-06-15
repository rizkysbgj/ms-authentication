const { AuthenticationService } = require('../services');
const config = require('../config');

const services = (req, res, next) => {
  const { locals: { userConnector }} = res;

  const authenticationService = new AuthenticationService({ 
    userConnector ,
    config
  });

  Object.assign(res.locals, { authenticationService });

  next();
}

module.exports = [services];
