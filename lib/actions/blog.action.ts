"use server";
import { CreateBlogParams, deleteBlogParams, editBlogParams, readBlogParams } from "../types";
import mongooseConnect from "../mongoose";
import Blog from "@/database/blog.model";

export async function createBlog(params: CreateBlogParams) {
  try {
    await mongooseConnect();
    const { title, author, image, content } = params;
    await Blog.create({
      title,
      author,
      image,
      content,
    });
    console.log(params);
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function readBlogs() {
  try {
    await mongooseConnect();
    const blogs = await Blog.find();
    return { blogs };
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function readBlog(params: readBlogParams) {
  try {
    await mongooseConnect();
    const { id } = params;
    const blog = await Blog.findById(id);
    return { blog };
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function deleteBlog(params: deleteBlogParams) {
  try {
    await mongooseConnect();
    const { id } = params;
    const blog = await Blog.findByIdAndDelete(id);
    return { blog };
  } catch (error) {
    console.log(error);
    throw error;
  }
}
export async function editBlog(params: editBlogParams) {
  try {
    await mongooseConnect();
    const { title, author, image, content,id } = params;
    const blog = await Blog.findByIdAndUpdate(id,{
      title,
      author,
      image,
      content,
    });
    return { blog };
  } catch (error) {
    console.log(error);
    throw error;
  }
}
