'use server'

import { LoginSchema } from "@/schemas";
import { z } from "zod";

export const login = (values: z.infer<typeof LoginSchema>) => {
  console.log(values);
}