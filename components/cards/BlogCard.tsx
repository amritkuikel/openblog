import Image from "next/image";
import Link from "next/link";
import React from "react";
interface BlogCardProps {
  title: string;
  author: string;
  image: string;
  content: string;
  id:String;
}
const BlogCard: React.FC<BlogCardProps> = ({title,author,image,id}) => {
  return (
    <div>
      <Link href={`/blog-page/${id}`}>
      <div className="absolute h-60 w-96 ">
        <Image
          className="rounded-lg"
          fill
          alt="image of blog"
          src={image}
        ></Image>
      </div>
      <div className="relative h-60 w-96 rounded-lg bg-black/80 p-5 opacity-0 hover:opacity-100">
        <div className="line-clamp-2  text-2xl font-bold text-white">
          {title}
        </div>
        <div className="pt-5 text-white">{author}</div>
      </div>
      </Link>
      
    </div>
  );
};

export default BlogCard;
