"use client"
 
import { z } from "zod"
 
export const BlogValidation = z.object({
  title: z.string().min(2).max(130),
  author: z.string().min(5).max(50),
  content: z.string().min(30),
})