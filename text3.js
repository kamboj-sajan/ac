const { exec } = require('child_process');

function ping(req, res) {
  exec('ping -c 1 ' + req.query.host, (err, out) => res.send(out));
}

module.exports = { ping };
