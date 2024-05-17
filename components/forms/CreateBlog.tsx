"use client";
import React, { useRef, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { BlogValidation } from "@/lib/validations";
import { z } from "zod";
import { UploadButton } from "../uploadthing";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Editor } from "@tinymce/tinymce-react";
import { createBlog, editBlog } from "@/lib/actions/blog.action";
import { useRouter } from "next/navigation";

interface Props {
  type: string;
  id: string;
}
const CreateBlog = ({ type, id }: Props) => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [imageUploaded, setImageUploaded] = useState<boolean>(false);
  const [uploadedImageUrl, setUploadedImageUrl] = useState<string>("");
  const editorRef = useRef(null);
  const form = useForm<z.infer<typeof BlogValidation>>({
    resolver: zodResolver(BlogValidation),
    defaultValues: {
      title: "",
      author: "",
      content: "",
    },
  });
  async function onSubmit(values: z.infer<typeof BlogValidation>) {
    if (!imageUploaded) {
      toast.error("Image upload is required!");
      return;
    }
    const htmlString = values.content;
    const tagRegex = /<[^>]*>/g;
    const innerText = htmlString.replace(tagRegex, "");
    values.content = innerText;
    console.log(uploadedImageUrl);
    setIsSubmitting(!isSubmitting);
    if (type === "create") {
      await createBlog({
        title: values.title,
        author: values.author,
        image: uploadedImageUrl,
        content: values.content,
      });
    } else {
      await editBlog({
        id,
        title: values.title,
        author: values.author,
        image: uploadedImageUrl,
        content: values.content,
      });
    }

    toast("Successful");
    router.push("/");
    router.refresh();
  }
  return (
    <div className="px-5">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Your title goes here." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="author"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="Plz Input Your Name." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Content</FormLabel>
                <FormControl>
                  <Editor
                    apiKey="htif4opazmjxpi80ulimdmybouhmd92xfk1w9exjg07582mj"
                    onInit={(evt, editor) => {
                      // @ts-ignore
                      editorRef.current = editor;
                    }}
                    onBlur={field.onBlur}
                    onEditorChange={(content) => field.onChange(content)}
                    initialValue={""}
                    init={{
                      height: 250,
                      menubar: false,
                      plugins: [
                        "advlist",
                        "autolink",
                        "lists",
                        "link",
                        "image",
                        "charmap",
                        "preview",
                        "anchor",
                        "searchreplace",
                        "visualblocks",
                        "codesample",
                        "fullscreen",
                        "insertdatetime",
                        "media",
                        "table",
                        "wordcount",
                      ],
                      toolbar:
                        "undo redo | " +
                        "codesample | bold italic forecolor | alignleft aligncenter |" +
                        "alignright alignjustify | bullist numlist outdent indent",
                      content_style:
                        "body { font-family:Inter; font-size:16px }",
                      skin: "oxide",
                      content_css: "light",
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div>
            <div className="flex justify-around">
              <div className="flex  flex-col items-center justify-between">
                <UploadButton
                  endpoint="imageUploader"
                  onClientUploadComplete={(res) => {
                    setImageUploaded(!imageUploaded);
                    console.log("Files: ", res);
                    setUploadedImageUrl(res[0].url);
                    toast("Upload Completed");
                  }}
                  onUploadError={(error: Error) => {
                    console.log(error);
                    toast(`ERROR! ${error.message}`);
                  }}
                />
              </div>
              <div>
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>{type === "Edit" ? "Editing..." : "Submiting..."}</>
                  ) : (
                    <>{type === "Edit" ? "Edit" : "Submit"}</>
                  )}
                </Button>
              </div>
            </div>
            <ToastContainer />
          </div>
        </form>
      </Form>
    </div>
  );
};

export default CreateBlog;
