const http = require('http');
const fs = require('fs'); 
const path = require('path');


const app = http.createServer(
        (request, response) => {
         if (request.url === "/") {
             response.writeHead(200, {"Content-Type": "text/html"});
             response.write("hello world");
             response.end();
         }   
         if (request.url === "/json") {
             response.writeHead(200, {"Content-Type": "application/json"});
             var data = {"Content-Type": "application/json"};
             response.write(JSON.stringify(data));
             response.end();
         }   
         if (request.url === "/students") {
             fs.readFile(
                     path.join(__dirname, '../data/student.csv'),
                     {encoding: "utf8"},
                     (error, data) => { 
                         if (error) { throw error; }
                         var students = [];
                         var rows = data.split("\n");
                         for (var rowIndex=0; rowIndex<rows.length-1; rowIndex++) {

                               var row = rows[rowIndex];
                               var columns = row.split(",");
                               if (rowIndex === 0) {
                                   var headers = columns;
                                   var headersCount = headers.length;
                               }else {
                                   var student = {};
                                   for (var headerIndex=0; headerIndex<headersCount; headerIndex++) {
                                       student[headers[headerIndex]] = columns[headerIndex];
                                   }
                               students.push(student); 
                               }   
                         }

                         response.writeHead(200, {"Content-Type": "application/json"});
                         response.write(JSON.stringify(students));
                         response.end();

                     }
        
        )};
}).listen(3000);
