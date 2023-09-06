import { z } from "zod";

export const postSchema = z.object({
  title: z
    .string()
    .min(3, { message: "El título debe tener al menos 3 caracteres" }),
  description: z.string(),
  file: z.any(),
  content: z.any(),
});
