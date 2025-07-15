import { defineCollection, z } from "astro:content";

const personalInfoCollection = defineCollection({
    type: "data",
    schema: z.object({
        edad: z.number(),
        nacionalidad: z.string(),
        correo: z.string(),
        estudios: z.string(),
        telefono: z.string(),
        ingles: z.string(),
        estado: z.string()
    })
});

const experiencesCollection = defineCollection({
    type: "data",
    schema: z.array(z.object({
        empresa: z.string(),
        fecha_inicio: z.string(),
        fecha_fin: z.string(),
        puesto: z.string(),
        responsabilidades: z.string()
    }))
})

export const collections = {
    personalInfo: personalInfoCollection,
    experiences: experiencesCollection
};