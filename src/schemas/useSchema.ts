import { z } from "zod";

const countrys = ["argentina", "colombia", "mexico", "brazil"] as const;

export type Country = (typeof countrys)[number];

export const mappedCountrys: { [key in Country]: string } = {
  argentina: "Argentina",
  colombia: "Colombia",
  mexico: "Mexico",
  brazil: "Brazil",
};

export const userSchema = z
  .object({
    name: z
      .string()
      .min(6, { message: "Name must be at least 6 character long" })
      .max(30, {
        message: "Name must be at less 30 character long",
      }),
    email: z.string().email({
      message: "Invalid email",
    }),
    password: z.string().min(6, {
      message: "Password must be at least 6 character long",
    }),
    confirmPassword: z.string().min(6, {
      message: "Password must be at least 6 character long",
    }),
    dateOfBirth: z
      .string()
      .refine((dob) => new Date(dob).toString() !== "invalid date", {
        message: "Invalid date",
      }),
    age: z.string().refine((age) => !isNaN(parseFloat(age))),
    country: z.enum(countrys, {
      errorMap: () => ({ message: "Invalid country" }),
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
