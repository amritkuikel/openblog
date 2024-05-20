"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { useRouter } from "next/navigation";
import { revalidatePath } from "next/cache";

interface EditButtonProps {
  id: string;
}

const EditButton: React.FC<EditButtonProps> = ({ id }) => {
  const router = useRouter();
  async function handleEditClick() {
    router.push(`/edit-blog/${id}`);
    revalidatePath("/")
  }

  return <Button onClick={handleEditClick}>Edit</Button>;
};

export default EditButton;
