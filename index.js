// console.log('Hello From Nade.js...');
//person file:
// const person = require ('./person');
// console.log(person.name);

//*****
//e.g.3:
// const Person = require('./person');
// const person1 =new Person ('Samira');
// person1.greeting();

// ******
//http server localhost:5000
//            /about
const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
// //    console.log(req.url);
//    if(req.url === '/') {
//       fs.readFile(path.join(__dirname, 'public', 'index.html'),
//       (err, content) => {
//             if (err) throw err;
//             res.writeHead(200, { 'Content-Type': 'text/html'});
//             // res.end('<h1>Home</h1>');
//             res.end(content);
//         }
//     ); 
//    }
//localhost:5000/api/users
//     if(req.url === '/api/users') {
//         const users = [
//             { name:"Samira", surname:"Hmani" }, 
//             { name:"Ayoub", surname:"MM" },
//         ];
//         res.writeHead(200, {'Content-Type': 'application/json'});
//         res.end(JSON.stringify(users));
//     }  

// Build file path dynamic
     let filePath = path.join(__dirname, 'public', req.url ==='/'? 
     'index.html' : req.url);
    //   console.log(filePath);
    //  res.end();
//Extension of file
    let extname = path.extname(filePath);

//Initial Content type
    let contentType ='text/html';

//Check ext and set content type

   switch(extname) {
       case '.js':
           contentType = 'text/javascript';
           breack;
       case '.css':
           contentType = 'text/css';
           breack;
        case '.json':
        contentType = 'application/json';
        breack;
        case '.png':
            contentType = 'image/png';
            breack;
   }
//Read file
fs.readFile(filePath, (err, content)  =>{
    if(err){
        if(err.code=='ENOENT'){
            //Page Not Found
            fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
               res.writeHead(200, { 'Content-Type': 'text/html'});
               res.end(content, 'utf8');
            })
        }else {
            //Some server error
            res.writeHead(500);
            res.end(`Server Error: ${err.code}`);
        }
    } else {
          //Success resp
          res.writeHead(200, { 'Content-Type': contentType});
               res.end(content, 'utf8');
    }
});
});

const PORT = process.env.PORT || 5000;

server.listen(PORT,() =>console.log(`Server running on port ${PORT}`));
