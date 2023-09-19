import { z } from 'zod'

const ratingSchema = z.object({
    userId: z.number(),
    rating: z.number(),
    feedback: z.string(),
})

const frameDesignSchema = z.object({
    frameMaterial: z.string(),
    frameType: z.string(),
    frameImage: z.string(), // Assuming frameImage is a URL or file path
})

export const ArtSchema = z.object({
    id: z.number().optional(),
    title: z.string(),
    author:z.string().optional(),
    description: z.string(),
    imageUrl: z.string(), // Assuming imageUrl is a URL or file path
    ratings: z.array(ratingSchema).optional(),
    price: z.number(),
    canvasSize: z.string(),
    category: z.string(),
    genre:z.string(),
    approve: z.string().optional(),
    frameDesigns: z.array(frameDesignSchema).optional(),
    uploadBy:z.string().optional()
})





export type ArtType = z.infer<typeof ArtSchema>
