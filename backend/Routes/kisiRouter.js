const express = require('express');
const kisiRouter = express.Router();
const dbConfig=require("../DbModels/dbConnectConfig");
const sql = require("mssql");

kisiRouter.get("/",async(req,res)=>{
    try {
        let  pool = await sql.connect(dbConfig);
        let  result = await  pool.request().query("SELECT * from Kisi");
        res.send(result.recordsets[0]);
      } catch(err)
      {
          res.send(err);
         
      }
})


kisiRouter.post("/yeniUye",async(req,res)=>{
    console.log(req.body);
    const aktif=req.body.aktif ? 1 :0;
    try {
        let  pool = await sql.connect(dbConfig);
        let  result = await  pool.request().query("exec Uye_INSERT '"+req.body.ad+"','"+req.body.tel+"',"+aktif);
        console.log(result);
        res.send("ok");
      } catch(err)
      {
          res.send(err);
       
      }
})
kisiRouter.delete('/UyeSil/:IDUser',async(req,res)=>{
    console.log(req.params.IDUser);
    try {
        let  pool = await sql.connect(dbConfig);
        let  result = await  pool.request().query("Delete from Kisi Where IDUser= "+req.params.IDUser);
        console.log(result);
        res.send("ok");
      } catch(err)
      {
          res.send(err);
        
      }
})
module.exports=kisiRouter;