import { z } from 'zod'




export const ChangePasswordSchema = z.object({
    password: z.string(),
    confirmPassword: z.string(),
})


export type ChangePasswordType = z.infer<typeof ChangePasswordSchema>