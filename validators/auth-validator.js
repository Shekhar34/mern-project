const { z } = require("zod");

//creating object schema
const signupSchema = z.object({
  name: z
    .string({ required_error: "name is required" })
    .trim()
    .min(3, { message: "nanme at least 3 charcter" })
    .max(255, { message: "name must not be more than 255 charcters" }),
    email: z
    .string({ required_error: "email is required" })
    .email()
    .trim()
    .min(5)
    .max(255, { message: "email must not be more than 255 charcters" }),
    password: z
    .string({ required_error: "password is required" })
    .trim()
    .min(7, { message: "password at least 7 charcter" })
    .max(255, { message: "password must not be more than 255 charcters" }),  
});


module.exports=signupSchema;