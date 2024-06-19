const z = require("zod");

const loginSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email address" })
    .min(3, { message: "Email must be at least 3 characters long" })
    .max(255, { message: "Email must be lesser than 255 characters" }),
  password: z
    .string({ required_error: "Password is required" })
    .trim()
    .min(6, { message: "Password must be at least 6 characters long" })
    .max(255, { message: "Password must be lesser than 255 characters" }),
});

const signupSchema = loginSchema.extend({
  username: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Name must be at least 3 characters long" })
    .max(255, { message: "Name must be lesser than 255 characters" }),
  phone: z
    .string({ required_error: "Phone is required" })
    .trim()
    .min(10, { message: "Phone must be at least 10 characters long" })
    .max(255, { message: "Phone must be lesser than 255 characters" }),
});

module.exports = { signupSchema, loginSchema };
