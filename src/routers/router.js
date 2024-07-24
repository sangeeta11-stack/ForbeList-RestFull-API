const express =require("express")
const router = new express.Router();
const RichRanking = require("../model/forbes")



//+++++++++++++++++++++++++++++++++++++++Create Data++++++++++++++++++++++//

router.post("/forbe",async (req,res)=>{

    try {
    const addRecords= new RichRanking(req.body)
     console.log(req.body);
     const addData= await addRecords.save();
     res.status(201).send(addData)
 
    } catch (error) {
     res.status(400).send("Your data is not insert:",error);
    }
 })
 
 
 //++++++++++++++++++++++++++++++++++++++++++++++++++read Data+++++++++++++++++++++++++++///
 
 router.get("/forbe",async (req, res)=>{
 
    try {
   const readForbe= await RichRanking.find({}).sort({"ranking": 1});
     res.status(201).send(readForbe)
 
    } catch (error) {
     res.status(400).send("Your data is not insert:",error);
    }
 })
 
 ////// find a particular person data 
 router.get("/forbe/:id",async (req, res)=>{
 
     try {
         const _id = req.params.id;
         console.log(_id);
    const readindForbe= await RichRanking.findById(_id);
      res.status(201).send(readindForbe)
  
     } catch (error) {
      res.status(400).send("Your data is not insert:",error);
     }
  })
 
 
 //+++++++++++++++++++++++++++++++++++++++++++++++++++++update +++++++++++++++++++++++++++++++++++++++++++///
 router.patch("/forbe/:id",async (req, res)=>{
 
     try {
         const _id = req.params.id;
         console.log(_id);
    const updateForbe= await RichRanking.findByIdAndUpdate(_id,req.body,{
     new: true
    });
      res.status(201).send(updateForbe)
  
     } catch (error) {
      res.status(500).send("Your data is not insert:",error);
     }
  })
 
 
 
  ///++++++++++++++++++++++++++++++++++++++++++++++++++++delete request++++++++++++++++++++++//
 
  router.delete("/forbe/:id",async (req, res)=>{
 
     try {
         const _id = req.params.id;
    const updateForbe= await RichRanking.findByIdAndDelete(_id);
      res.status(201).send(updateForbe)
  
     } catch (error) {
      res.status(500).send("Your data is not insert:",error);
     }
  })
 

  module.exports =router;