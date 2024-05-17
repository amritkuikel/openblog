import CreateBlog from "@/components/forms/CreateBlog";
import React from "react";

interface BlogPageProps {
  id: string;
}

const BlogEdit = async ({ params }: { params: BlogPageProps }) => {
  const { id } = params;
  return (
    <div>
      <CreateBlog type="edit" id={id}/>
    </div>
  );
};

export default BlogEdit;