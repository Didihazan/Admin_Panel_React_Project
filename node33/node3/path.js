const path = require("path");

const url = "https://monkeys.co.il/_images/monkeys.jpg"

console.log(path.dirname(url)); // מחזיר את הכתובת ללא שם הקובץ
console.log(path.basename(url)); // מחזיר רק את שם הקובץ
console.log(path.extname(url)); // מחזיר את הסיומת של הקובץ


console.log(__dirname); // מחזיר את הקובץ הנוכחי של התכנות את המיקום שלו

const newAddress = path.join(__dirname,"public");
console.log(newAddress); // מחבר תיקייה נוספת למיקום מסויים 
// מבחינת כתיבת הכתובת החדשה עם התיקייה עובד לפי מערכת ההפעלה שהוא נמצא עליו