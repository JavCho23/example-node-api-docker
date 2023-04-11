const jwt = require("jose")
const secret = new TextEncoder().encode(
  process.env.JWT_SECRET_KEY,
)

async function verifyToken(token) {
  return jwt.jwtVerify(token, secret)
}

async function validate(request, response, next) {
  try {
    const headers = request.headers
    const token = headers.authorization
    if (!token) return response.json(403, { message: "Manda token oe" })
    await verifyToken(token)
    next()
  } catch (error) {
    console.log(error)
    return response.json(401, { message: "Token invalido" })
  }
}

module.exports = { validate }
