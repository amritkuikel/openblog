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
    <div className="p-6">
      <div className="flex items-center gap-4 pb-3 text-2xl font-bold">
        <div className="pr-6">{result.blog.title}</div>
        <EditButton id={id} />
        <DeleteButton id={id} />
      </div>
      <div className=" pb-6">{result.blog.author}</div>
      <Image
        src={result.blog.image}
        width={200}
        height={300}
        alt="blog image"
      />
      <div className="pt-6">{result.blog.content}</div>
    </div>
  );
};

export default BlogPage;
