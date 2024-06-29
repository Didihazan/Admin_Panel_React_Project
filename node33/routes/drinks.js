const express = require("express");
const { DrinkModel, validateDrink } = require("../models/drinkModel");
const router = express.Router();

router.get("/", async(req,res) => {
  try{
    let data = await DrinkModel.find({}).limit(20);
    res.json(data);
  }
  catch(err){
    console.log(err);
    res.status(502).json({err})
  }
})

router.get("/agg2",async(req,res) => {
  try{
    // יחזיר את כמות הפריטים לכל רשומה חוזרת
    // נניח כמה יש לימון או תפוז וכו
    const data = await DrinkModel.aggregate([
      {$match:{quantity:{$gte:5}}},
      {
      $group:{
        _id:"$item",
        // יחזיר את כמות המכירות מכל מוצר
        countItems:{$count:{}},
        // יחזיר את הממוצע של כמות המכירות הכולל
        avgQty:{$avg:"$quantity"},
        totaelQuantityItem:{$sum:"$quantity"},
        // יחזיר את המספר המקסמלי של מכירות פר מכירה אחת
        maxQty:{$max:"$quantity"},
        // יחזיר את סך כל הכסף שקיבלתי מכל מוצר
        // לפי כמות מוצרים שנמכרו כפול מחיר מוצר
        totalAllSells:{$sum:{$multiply:["$price","$quantity"]}}
      }
    },
    // לאחר שיש לנו מידע שקיבצנו נוכל לעשות פילטור איזה רשומות נרצה
    {
      $match:{"totaelQuantityItem":{$gte:15}}
    },
    // דואג למיון שאנחנו נקבע ולא מיון רנדומלי
    {
      $sort:{"totaelQuantityItem":-1}
    }
  ])
    res.json(data);
  }
  catch(err){
    console.log(err);
    res.status(502).json({err})
  }
})

router.get("/agg1",async(req,res) => {
  try{
    // יחזיר את כמות הפריטים לכל רשומה חוזרת
    // נניח כמה יש לימון או תפוז וכו
    const data = await DrinkModel.aggregate([{
      $group:{
        _id:"$item",
        // יחזיר את כמות המכירות מכל מוצר
        countItems:{$count:{}},
        // יחזיר את הממוצע של כמות המכירות הכולל
        avgQty:{$avg:"$quantity"}
      }
    }])
    res.json(data);
  }
  catch(err){
    console.log(err);
    res.status(502).json({err})
  }
})

router.get("/single/:id", async(req,res) => {
  try{
    const id = req.params.id
    let data = await DrinkModel.findOne({_id:id});
    res.json(data);
  }
  catch(err){
    console.log(err);
    res.status(502).json({err})
  }
})

router.post("/", async(req,res) => {
  let validBody = validateDrink(req.body);
  if(validBody.error) {
    return res.status(400).json(validBody.error.details);
  }
  try {
    let drink = new DrinkModel(req.body);
    await drink.save();
    res.json(drink)
  }
  catch(err) {
    console.log(err);
    res.status(502).json( {err})
  }
})

router.put("/:id", async(req,res) => {
  let validBody = validateDrink(req.body);
  if(validBody.error) {
    return res.status(400).json(validBody.error.details);
  }
  try {
   let id = req.params.id;
   let data = await DrinkModel.updateOne({_id:id},req.body);
  res.json(data)
  }
  catch(err) {
    console.log(err);
    res.status(502).json( {err})
  }
})

router.delete("/:id", async(req,res) => {
  try {
    let id = req.params.id;
    let data = await DrinkModel.deleteOne({_id:id} );
    res.json(data)
  }
  catch(err) {
    console.log(err);
    res.status(502).json( {err})
  }
})

module.exports = router;