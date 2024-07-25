import mongoose, { mongo } from "mongoose";
const Schema=mongoose.Schema;

const postSchema={
    author:{
        type:String,
        required:true,
    },
    blog:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    }
}

const Post=mongoose.model("Post",postSchema);

export default Post;