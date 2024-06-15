const loginHandler = async (req, res, next) => {
  const {
    body
  } = req;
  const {
    locals: {
      authenticationService
    },
  } = res;

  try {
    const token = await authenticationService.loginUser(body);
  
    res.send(token);
  } catch (error) {
    next(error);
  }
};

module.exports = {
    loginHandler
};