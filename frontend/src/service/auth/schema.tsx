import { z } from 'zod'



export const LoginSchema = z.object({
    email : z.string().email(),
    password : z.string()
})



export const RegisterSchema = z.object({
    email: z.string(),
    password: z.string(),
    confirmPassword: z.string(),
    firstname: z.string(),
    lastname: z.string(),
    address1: z.string(),
    address2: z.string(),
    suburbCity: z.string(),
    country: z.string(),
    province: z.string(),
    zipCode: z.string(),
    phoneNumber: z.string(),
})


export type LoginType = z.infer<typeof LoginSchema>
export type RegisterType = z.infer<typeof RegisterSchema>