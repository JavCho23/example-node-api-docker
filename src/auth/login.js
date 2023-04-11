const user = {
  username: "luchoba",
  password: "cpulba2016",
};

function login(req, res) {
  const { username, password } = req.body;

  if (user.username == username && user.password == password) {
    return res.json(user);
  }
}

module.exports = { login };
