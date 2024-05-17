import { readBlogs } from "@/lib/actions/blog.action";
import React from "react";
import BlogCard from "../cards/BlogCard";

const BlogLayout = async () => {
  const result: any = await readBlogs();
  return (
    <div className="p-6 text-center">
      <div className="pb-6 text-2xl font-bold">Create. Share. Inspire.</div>
      <div className="pb-12 font-semibold">
        Welcome to our blogging platform, where you can create compelling
        stories, share your unique voice, and inspire a community of readers.
        Whether you are a seasoned writer or just starting out, our easy-to-use
        tools and supportive community will help you bring your ideas to life.
        Join us in fostering a space where creativity thrives, connections are
        made, and inspiration is shared by all.
      </div>
      <div className="grid grid-cols-1 justify-items-center gap-6  md:grid-cols-2 xl:grid-cols-3">
        {result.blogs.map((blog: any) => (
          <div key={blog._id}>
            <BlogCard
              title={blog.title}
              author={blog.author}
              content={blog.content}
              image={blog.image}
              id={blog._id}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogLayout;
