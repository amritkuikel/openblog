// a
import { getBlogData } from "@/lib/getBlogData";
import Image from "next/image";
import React from "react";
import DeleteButton from "@/components/DeleteButton";
import EditButton from "@/components/EditButton";
interface BlogPageProps {
  id: string;
}

const BlogPage = async ({ params }: { params: BlogPageProps }) => {
  const { id } = params;
  const result = await getBlogData(id);

  return (
    <div className="flex flex-col items-center justify-center p-6">
      <div className="relative h-80 w-96 ">
        <Image
          src={result.blog.image}
          fill
          className="rounded-2xl"
          alt="blog image"
        />
      </div>

      <div className="pb-2 pt-6 text-2xl font-bold">
        <div>{result.blog.title}</div>
      </div>
      <div className=" pb-6 ">{result.blog.author}</div>

      <div className="line-clamp-6 max-w-80 pb-6">{result.blog.content}</div>
      <div className="flex gap-4">
        <EditButton id={id} />
        <DeleteButton id={id} />
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default BlogPage;
