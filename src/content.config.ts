import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    cover: z.string().optional(),
    coverAlt: z.string().optional(),
    category: z.string().optional(),
    // Resilient tags: handles array of strings, comma-separated string, or single string
    tags: z
      .union([
        z.array(z.string()),
        z.string().transform((str) =>
          str
            .split(',')
            .map((t) => t.trim())
            .filter(Boolean)
        ),
      ])
      .default([]),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
  }),
});

export const collections = { posts };
