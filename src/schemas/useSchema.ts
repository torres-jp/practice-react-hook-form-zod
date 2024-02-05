import { z } from "zod";

const userSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Name must be at least 3 character long" })
    .max(30, {
      message: "Name must be at less 30 character long",
    }),
});
