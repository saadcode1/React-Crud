import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import Post from "./models/posts.js";
import bodyParser from "body-parser";
const app=express();
const port=5000;
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
mongoose.connect("mongodb://127.0.0.1:27017/crud").then(()=>{
    console.log("connection done with mongoDB")
}).catch(err=>{
  res.status(400).json({ error: err.message }); // Return a JSON error response
})

app.get("/posts", async (req,res)=>{
  try{
    let response= await Post.find({});
    res.send(response);
  }
   catch(err){
    res.status(400).json({ error: err.message }); // Return a JSON error response
   }
})

app.get("/posts/:id",async (req,res)=>{
  try{
    let id=req.params.id;
    let data=await Post.findById(id);
    res.send(data);
  }catch(err){
    res.status(400).json({ error: err.message }); // Return a JSON error response
  }
      
})
app.post("/posts", async (req, res) => {
  try {
    let { author, blog, image } = req.body;
    let data = new Post({
      author,
      blog,
      image,
    });
    await data.save();
    res.send(data);
  } catch (err) {
    res.status(400).json({ error: err.message }); // Return a JSON error response
  }
});

app.delete("/posts/:id",async (req,res)=>{
  try{
    console.log("back end")
    let id=req.params.id;
    let response= await Post.findByIdAndDelete(id);
    res.send(response);
  }catch(err){
    res.status(400).json({ error: err.message }); // Return a JSON error response
  }

})

app.get("/update/:id",async (req,res)=>{
    try{
      let {id}=req.params.id;
      let response= await Post.findById(id);
      res.send(response);
    }catch(err){
      res.status(400).json({ error: err.message }); // Return a JSON error response
    }
  
  })

  app.patch("/update/:id", async (req, res) => {
    try{
      const { author, blog, image } = req.body;
  
      let { id } = req.params;
      let response = await Post.findByIdAndUpdate(id, { $set: { author, blog, image } });
      res.send(response);
    }catch(err){
      res.status(400).json({ error: err.message }); // Return a JSON error response
    }
   
  });
app.listen(port,()=>{
    console.log(`Server is Listening To Port ${port}`);
});