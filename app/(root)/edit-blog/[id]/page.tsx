import CreateBlog from "@/components/forms/CreateBlog";
interface BlogPageProps {
  id: string;
}

const BlogEdit = async ({ params }: { params: BlogPageProps }) => {

  const { id } = params;
  return (
    <div>
      <CreateBlog type="Edit" id={id}/>
    </div>
  );
};

export default BlogEdit;