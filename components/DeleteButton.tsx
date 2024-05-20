"use client";

import { Button } from "@/components/ui/button";
import { deleteBlog } from "@/lib/actions/blog.action";
import React from "react";
import { useRouter } from "next/navigation";

interface DeleteButtonProps {
  id: string;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ id }) => {
  const router = useRouter();
  async function handleDeleteClick() {
    await deleteBlog({ id });
    router.push("/");
  }
  
  return <Button onClick={handleDeleteClick}>Delete</Button>;
};

export default DeleteButton;
