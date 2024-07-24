import { defineCollection, z } from "astro:content";

const job_collection = defineCollection({
  type: "content",
  schema: z.object({
    company: z.string(),
    slug: z.string(),
    roles: z
      .object({
        name: z.string(),
        start: z.string(),
        end: z.string().optional(),
      })
      .array(),
  }),
});

export const collections = {
  job: job_collection,
};
