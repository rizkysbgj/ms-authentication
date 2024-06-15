class UserConnector {
  constructor(options) {
    Object.assign(this, options);
  }

  async getUserByUserId(userId) {
    const url = `/users/${userId}`

    const { data } = await this.client.get(url, {});
    
    return data;
  }
}

module.exports = UserConnector;
