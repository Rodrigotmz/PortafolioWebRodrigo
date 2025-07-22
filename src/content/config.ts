import { defineCollection, reference, z } from "astro:content";

const projectCollection = defineCollection({
    type: "content",
    schema: ({ image }) =>
        z.object({
            id: z.string(),
            title: z.string(),
            description: z.string(),
            publishDate: z.date(),
            cover: image(),
            techs: z.string().array(),
            category: z.array(reference("categoriesProjects")),
            url: z.string().url(),
            author: reference("authors"),
            isRelevant: z.boolean(),
        }),
});

export const collections = {
    projects: projectCollection,
};