function login(user, input) {
  return user.password == input;
}

module.exports = { login };
