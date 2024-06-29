const {random,shuffle} = require("lodash")

// מייצר מערך של 42 תאים ממספר 1 עד 42
let numbers_ar = [];
for(let i = 0 ; i < 42; i++){
  numbers_ar.push(i+1);
}
console.log(numbers_ar);
// מערך שמערבב את ה 42 מספרים מהנאמברס
const shuffle_ar = shuffle(numbers_ar)
console.log(shuffle_ar); 

let timer;
let counter = 0;

timer = setInterval(() => {
  console.log(shuffle_ar[counter]);
  counter++;
  if(counter >= 6){
    // עוצר את האינטרבל
    // clearInterval(timer);
  }
},800)



console.log("lotto work");

