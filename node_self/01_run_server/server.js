const http = require("http");

var app = http.createServer((request, response) =>{
    response.write("<h1>hello wrold</h1>");
    response.end();
});

app.listen(3000, () => {
    console.log("server is running");
});
