import mongoose from "mongoose";

import Post from "../models/posts.js";

mongoose.connect("mongodb://127.0.0.1:27017/crud").then(()=>{
    console.log("connection done with mongoDB")
}).catch(err=>{
    console.log(err);
})

const data=[
    {
        "author": "John Doe",
        "blog": "Exploring the Wonders of Nature",
        "image": "https://plus.unsplash.com/premium_photo-1719328064343-6e3acf7c6ab0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        "author": "Jane Smith",
        "blog": "A Guide to Modern Web Development",
        "image": "https://plus.unsplash.com/premium_photo-1667128696675-2e68ed3d1338?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        "author": "Alice Johnson",
        "blog": "Top 10 Travel Destinations for 2024",
        "image": "https://media.istockphoto.com/id/498805576/photo/gold-pagoda-and-lantern-hung-up-on-the-rail.jpg?s=2048x2048&w=is&k=20&c=12LfX3c24Ol0O_3wFOBIVRWYMHxYbCHE26qYhrtkW58="
    },
    {
        "author": "Bob Brown",
        "blog": "Healthy Eating: Tips and Tricks",
        "image": "https://media.istockphoto.com/id/947127960/photo/white-service-robot-is-putting-more-wood-on-the-fire-in-a-chimney-aai-robot-in-the-living-room.jpg?s=2048x2048&w=is&k=20&c=GHeNvx3mBb4MnI3acweExR4Yt-6ZJzmZvRFqo6jBmwE="
    },
    {
        "author": "Carol White",
        "blog": "The Future of Artificial Intelligence",
        "image": "https://images.unsplash.com/photo-1705096953495-8ea06879b986?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
]

 async function fn(){
    await Post.deleteMany({});
      let newData= await Post.insertMany(data);
      console.log("saved");
}

fn();