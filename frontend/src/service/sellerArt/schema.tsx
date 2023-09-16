import { z } from 'zod'




export const AddArtSchema = z.object({
    title : z.string(),
    description : z.string(),
    author:z.string(),
    imageUrl: z.string().optional(),
    price:z.string(),
    canvasSize:z.string(),
    category:z.string(),
    genre:z.string(),
})


export type AddArtType = z.infer<typeof AddArtSchema>