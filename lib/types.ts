export interface CreateBlogParams  {
    title: string;
    author: string;
    image: string;
    content: string;
  }
  export interface readBlogParams  {
    id: string;
  }
  export interface deleteBlogParams  {
    id: string;
  }
  export interface editBlogParams  {
    id:string;
    title: string;
    author: string;
    image: string;
    content: string;
  }