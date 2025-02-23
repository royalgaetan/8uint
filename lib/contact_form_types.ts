import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string({
      invalid_type_error: "Please enter your real name or company name",
      required_error: "Name or Company Name is required!",
    })
    .min(3)
    .max(50),
  email: z
    .string({
      invalid_type_error: "Please enter a correct email!",
      required_error: "Email is required!",
    })
    .email(),
  message: z
    .string({
      invalid_type_error: "Please enter a correct message",
      required_error: "A message is required",
    })
    .min(2)
    .max(2000),
});
