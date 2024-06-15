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
      const user = await this.userConnector.getUserByUserId(userId);
      const { 
        id,
        userId: userIdFromDb,
        email,
        corporateAccountId,
        password: passwordFromDb
      } = user;

      if (!user) {
        throw createError(401, 'User is not found on db', { code: 'USER_NOT_FOUND' });
      }

      if(accountId !== corporateAccountId) {
        throw createError(401, 'User corporate account id is not match', { code: 'INVALID_ACCOUNT_ID' });
      }

      if(password !== passwordFromDb) {
        throw createError(401, 'User password is not match', { code: 'INVALID_PASSWORD' });
      }

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
