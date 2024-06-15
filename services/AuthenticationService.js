const createError = require('http-errors');
const jwt = require('jsonwebtoken');

class AuthenticationService {
  constructor(options) {
    Object.assign(this, options);
  }

  async loginUser(payload) {
    const { accountId, userId, password } = payload;
    const { security: { secretKey } } = this.config;
    
    try {
      const user = await this.userService.getUser(payload);
      const { id, userId: userIdFromDb, email, corporateAccountId } = user;

      const token = jwt.sign(
        { id, userId: userIdFromDb, email, corporateAccountId },
        secretKey,
        { expiresIn: '1h' }
      );

      return { accessToken: token };
    } catch (error) {
      console.log(error, 'failed to login user');
  
      throw error;
    }
  }
}

module.exports = AuthenticationService;
