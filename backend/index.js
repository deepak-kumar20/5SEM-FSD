const http = require('http');
const fs = require('fs/promises');   // ✅ IMPORTANT
const PORT = 4005;

const apidata = require('./apiCalling');
const { dataWrite, dataRead, deleteFile, readFileAsync } = require('./userfsmodule');

const server = http.createServer(async (req, res) => {

    try {

        // CORS
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS, PATCH, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type');
        res.setHeader('Access-Control-Allow-Credentials', true);

        if (req.method === "OPTIONS") {
            res.writeHead(200);
            res.end();
            return;
        }

        // ROUTES

        if (req.url === "/msg" && req.method === "GET") {
            res.setHeader("Content-Type", "text/html");
            res.end("<h2>Greeting of the day!!</h2>");
        }

        else if (req.url === "/register" && req.method === "POST") {

            let body = "";

            req.on('data', chunk => {
                body += chunk;
            });

            req.on('end', async () => {

                const { name, email, password } = JSON.parse(body);

                let arr = [];

                try {
                    const fileData = await fs.readFile('student.json', 'utf-8');
                    arr = JSON.parse(fileData);
                } catch (err) {
                    // file does not exist → create empty array
                    arr = [];
                }

                const userExists = arr.find(user => user.email === email);

                if (userExists) {
                    res.setHeader("Content-Type", "application/json");
                    res.end(JSON.stringify({ msg: "Student already exists!!!" }));
                } else {
                    arr.push({ name, email, password });

                    await fs.writeFile('student.json', JSON.stringify(arr, null, 2));

                    res.setHeader("Content-Type", "application/json");
                    res.end(JSON.stringify({ msg: "Student added successfully!!!" }));
                }

                console.log("Registered:", name, email);
            });
        }
        else if(req.url=="/login" && req.method=="POST"){           
            let body = "";  
            req.on('data', chunk => {   
                body += chunk;
            });
            req.on('end', async () => {
                const { email, password } = JSON.parse(body);
                try {
                    const fileData = await fs.readFile('student.json', 'utf-8');
                    const arr = JSON.parse(fileData);
                    const user = arr.find(user => user.email === email && user.password === password);
                    if (user) {
                        res.setHeader("Content-Type", "application/json");
                        res.end(JSON.stringify({ msg: "Login successful!!!" }));
                    } else {
                        res.setHeader("Content-Type", "application/json");
                        res.end(JSON.stringify({ msg: "Invalid email or password!!!" }));
                    }
                } catch (err) {
                    res.setHeader("Content-Type", "application/json");
                    res.end(JSON.stringify({ msg: "Error reading user data!!!" }));
                }
            });
        }
        else {
            res.setHeader("Content-Type", "text/html");
            res.end("<h2 style='color:red'>Invalid request</h2>");
        }

    } catch (error) {
        console.error(error);
        res.statusCode = 500;
        res.end("Internal Server Error");
    }

});

server.listen(PORT, () => {
    console.log("Server is listening on " + PORT);
});