const db = require('./db');

function getUser(req) {
  return db.query("SELECT * FROM users WHERE id = " + req.params.id);
}

module.exports = { getUser };
