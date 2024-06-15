const createError = require('http-errors')

class UserService {
  constructor(options) {
    Object.assign(this, options);
  }

  async getUser(payload) {
    try {
      const user = await this.userRepository.getUserByQuery(payload);

      if (!user) {
        throw createError(401, 'User is not found on db', { code: 'USER_NOT_FOUND' });
      }

      return user;
    } catch (error) {
      console.log(error, 'failed to get user');
  
      throw error;
    }
  }
}

module.exports = UserService;
