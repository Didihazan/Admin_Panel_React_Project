const http = require("http");
const fs = require("fs");
// req -> מידע שהשרת קיבל לפני התגובה שלו
// res -> תגובה של השרת לצד לקוח/דפדפן
const server = http.createServer((req,res) => {
  // req.url -> מכיל את הכתובת שרשומה אחרי ה3001
  console.log(req.url);
  // מגדיר שהמידע שהצד לקוח/דפדפן מקבל הוא הטמל
  
  fs.readFile("public"+req.url, (err,data) => {
    if(err){
      res.writeHead(404, {'Content-Type': 'text/html'});
      res.write("404, page not found");
      return res.end();
    }
    // console.log(data.toString());
    // res.write("<h2>Hello from nodejs 7777</h2>");
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data.toString());
    res.end();

  })
})

// http://localhost:3001
server.listen(3001);

