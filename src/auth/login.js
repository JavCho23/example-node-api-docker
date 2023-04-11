const jwt = require("jose")
const secret = new TextEncoder().encode(
  process.env.JWT_SECRET_KEY,
)

async function sign(payload) {
  return new jwt.SignJWT(payload).setProtectedHeader({ alg: "HS256" }).
    sign(secret)
}


const user = {
  username: "luchoba",
  password: "cpulba2016",
};

async function login(req, res) {
  const { username, password } = req.body;

  if (!(user.username == username && user.password == password)) {
    return res.json(401, { message: "Credenciales inválidas" });
  }

  const token = await sign(user)
  return res.json({ user, jwt: token });
}

module.exports = { login };
