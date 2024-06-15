const { UserService, AuthenticationService } = require('../services');
const config = require('../config');

const services = (req, res, next) => {
  const { locals: { userRepository }} = res;

  const userService = new UserService({ userRepository });

  const authenticationService = new AuthenticationService({ 
    userService ,
    config
  });

  Object.assign(res.locals, {userService, authenticationService });

  next();
}

module.exports = [services];
