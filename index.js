const http = require('http')
const http = require('http')
const url = require('url')

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true)
  const pathname = parsedUrl.pathname
  const method = req.method.toLocaleLowerCase()

  res.setHeader('Content-Type', 'text/html')
  res.end(`Pathname: ${pathname} dan method: ${method}`)
})

server.listen(3000, () => {
  console.log("Server running on port 3000")
})