import {defineCollection, z} from "astro:content"

const postsCollection = defineCollection({
    schema: () =>
        z.object({
            image: z.string().optional(),
            index: z.number(),
        }),
})

export const collections = {
    html: postsCollection,
    flutter: postsCollection,
}
