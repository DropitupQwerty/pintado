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

export const UserTokenSchema = z.object({
    address1: z.string(),
    address2: z.string(),
    confirmPassword: z.string(),
    country: z.string(),
    email: z.string().email(),
    firstname: z.string(),
    lastname: z.string(),
    password: z.string(),
    phoneNumber: z.string(),
    province: z.string(),
    suburbCity: z.string(),
    userId: z.string(),
    userType: z.string(),
    zipCode: z.string(),
})
  


export type UserTokenType = z.infer<typeof UserTokenSchema>
export type LoginType = z.infer<typeof LoginSchema>
export type RegisterType = z.infer<typeof RegisterSchema>