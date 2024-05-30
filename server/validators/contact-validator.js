const z = require('zod');

const contactValidator = z.object({
    username: z
        .string({required_error:"Username is required"})
        .trim()
        .min(3,{message:"Minimum 3 characters arae requried for username"})
        .max(255,{message:"maximum of 255 characters are allowed"}),
    email: z
        .string({required_error:"Email is required"})
        .trim()
        .email()
        .min(3,{message:"Minimum 3 characters arae requried for username"})
        .max(255,{message:"maximum of 255 characters are allowed"}),
    message: z
        .string({required_error:"Message is required"})
        .trim()
        .min(3,{message:"Minimum 3 characters arae requried for username"})
        .max(255,{message:"maximum of 255 characters are allowed"})
});

module.exports = contactValidator;
