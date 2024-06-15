class UserRepository {
  constructor(options) {
    Object.assign(this, options);
  }

  async getUserByQuery(query) {
    const [user] = await this.db('users')
      .where({
        ...query
      });

    return user;
  }
}

module.exports = UserRepository;
