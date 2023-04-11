module.exports = function (request, response) {
  console.log(request)
  const headers = request.headers 
  return response.end(JSON.stringify(headers))
}