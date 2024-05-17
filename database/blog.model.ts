import { Schema, model, models } from "mongoose";

export interface IQuestion extends Document {
    title: string;
    author: string;
    image: string;
    content: string;
    createdAt: Date;
  }

const BlogSchema = new Schema({
    title:{type:String,required:true},
    author:{type:String,required:true},
    image:{type:String,required:true},
    content: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
})

const Blog = models.Blog || model<IQuestion>("Blog",BlogSchema)

export default Blog;