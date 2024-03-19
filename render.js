const fs = require("node:fs");

module.exports = {
  RenderfromURL: function (path, res) {
    try {
      var data = fs.readFileSync(path);
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      res.write(data);
    } catch (error) {
      res.statusCode = 404;
      res.setHeader('Content-Type', 'text/html'); 
      res.write("<h1>File not found</h1>"); 
    }
    res.end(); 
  }
};
