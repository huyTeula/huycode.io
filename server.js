const http = require('node:http');
const url = require('node:url');
const render = require('./render');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  let path = url.parse(req.url, true).pathname; 
  console.log(path);

  if (path === "/" || path === "/home") { 
    render.RenderfromURL('./views/home.html', res); 
  } else if (path === "/about") { 
    render.RenderfromURL('./views/about.html', res);
  } else if (path === "/contact") {
    render.RenderfromURL('./views/contact.html', res);
  } else if (path === "/users") {
    render.RenderfromURL('./views/users.html', res);
  } else {
    render.RenderfromURL('./views/notfound.html', res); 
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
