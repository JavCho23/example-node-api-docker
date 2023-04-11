module.exports = function (request, response) {
  console.log(request)
  const headers = request.headers 
  const token = headers.authorization
  if(!token) return response.json(403, {message:"Manda token oe"})
  return response.json({message: "Bienvenido"})
}