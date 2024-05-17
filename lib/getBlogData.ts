import { readBlog } from "@/lib/actions/blog.action";

export async function getBlogData(id: string) {
  return await readBlog({ id });
}