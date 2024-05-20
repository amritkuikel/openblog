"use client";

import { Button } from "@/components/ui/button";
import { deleteBlog } from "@/lib/actions/blog.action";
import { useRouter } from "next/navigation";
import React,{ useState } from "react";

interface DeleteButtonProps {
  id: string;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ id }) => {
  const [state,setState]=useState(true)
  const router = useRouter();
  async function handleDeleteClick() {
    setState(!state)
    await deleteBlog({ id });
    router.push("/");
  }

  return (
    <Button className="w-20" onClick={handleDeleteClick}>
      {state?"Delete":"Deleting"}
    </Button>
  );
};

export default DeleteButton;
