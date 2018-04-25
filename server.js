const http = require('http');
const os = require('os');
const url = require('url');
const port = 8080; 

const server = http.createServer((req, res) => {
  const hostname = os.hostname();
  const reqUrl = url.parse(req.url);
  res.end(`Request: ${reqUrl.pathname}\nHostname: ${hostname}\n`);
});

server.listen(port, (err) => {
  if (err) {
    console.log(`server failed ${err}`);
  }

  console.log(`server up on ${port}`)
})
