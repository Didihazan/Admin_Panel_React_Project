const {random,shuffle,sortBy} = require("lodash")
console.log("npm start porject");

console.log(random(100,200));
console.log(random(1,6));

const products_ar = [
  {name:"apple",price:8},
  {name:"banana",price:10},
  {name:"kiwi",price:5},
  {name:"lemon",price:15},
]
// ימיין מהקטן לגדול
// const sort_ar = sortBy(products_ar,"price");
// כדי למיין מהגדול קטן
const sort_ar = sortBy(products_ar,"price").reverse();
console.log(sort_ar);

const abc_ar = ["a","b","c","d"];
// יערבב את המערך של איי בי סי בתוך השאפל
const shuffle_ar = shuffle(abc_ar)
console.log(shuffle_ar);



setInterval(()=>{},1000)