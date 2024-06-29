const fs = require("fs"); // fs = file system

// יצור קובץ טקסט של בוקס ויכניס לתוכו את הפרמטר 
// השני
// אם לא קיים ייצר את הקובץ , אם קיים יעדכן את הקובץ
fs.appendFile("books.txt","Bible\n",(err) => {
  if(err){return console.log(err)}
  console.log("file created/updated");
})


// ניתן לייצר קובץ 
// HTML
// חדש דרך הנוד ג'יי אס
fs.writeFile("page1.html", `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <h2>Create from NODEJS WITH FS</h2>
</body>
</html>

`,(err) => {
  if(err){return console.log(err)}
  console.log("file created/updated");
})