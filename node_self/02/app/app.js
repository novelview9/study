
const fs = require("fs")
const path = require("path")

fs.readFile(
    path.join(__dirname, "../data/simple.txt"),
    {encoding: "utf8"},
    (error, data) => {
    if (error) { throw error;}
    console.log("data1" + data);
});

const data2 = fs.readFileSync(
    path.join(__dirname, "../data/simple.txt"), 
    {encoding: "utf8"}
    )

console.log("data2" + data2);

fs.readFile(
    path.join( __dirname, "../data/student.csv"),
        {encoding: "utf8"},
        (error, data) => {
            if (error) { throw error; }
            const rows = data.split("\n");
            let students = [];
            for (let i=0; i<rows.length-1; i++) {
                const row = rows[i];
                const columns = row.split(",");
                
                if (i === 0) {
                    var header = columns;
                    var headerCount = columns.length;
                } else {
                    var student = {};
                    for (let i=0; i< headerCount; i++) {
                        student[header[i]] = columns[i];
                    }
                    students.push(student);
                  }
            console.log(students);
            }
        }
        )
