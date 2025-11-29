import { defineCollection, z } from 'astro:content';

const artworksCollection = defineCollection({
  type: 'data',
  schema: () => z.object({
    title: z.string(),
    description: z.string(),
    technique: z.enum(['Acryl', 'Öl', 'Mischtechnik', 'Aquarell', 'Collage']),
    size: z.object({
      width: z.number(),
      height: z.number(),
      depth: z.number().optional(),
      unit: z.enum(['cm', 'mm']).default('cm')
    }),
    year: z.number(),
    price: z.number().optional(),
    availability: z.enum(['available', 'reserved', 'sold']).default('available'),
    image: z.string(),
    images: z.array(z.string()).optional(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional()
  })
});

const workshopsCollection = defineCollection({
  type: 'data',
  schema: () => z.object({
    title: z.string(),
    description: z.string(),
    longDescription: z.string().optional(),
    date: z.coerce.date(),
    endDate: z.coerce.date().optional(),
    duration: z.number(), // in hours
    location: z.string(),
    address: z.object({
      street: z.string(),
      city: z.string(),
      zip: z.string(),
      country: z.string().default('Deutschland')
    }).optional(),
    maxParticipants: z.number(),
    currentParticipants: z.number().default(0),
    price: z.number(),
    materials: z.array(z.string()).default([]),
    requirements: z.array(z.string()).default([]),
    image: z.string().optional(),
    featured: z.boolean().default(false),
    status: z.enum(['upcoming', 'booking', 'full', 'completed', 'cancelled']).default('upcoming'),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional()
  })
});

const testimonialsCollection = defineCollection({
  type: 'data',
  schema: () => z.object({
    name: z.string(),
    role: z.string().optional(),
    company: z.string().optional(),
    text: z.string(),
    rating: z.number().min(1).max(5).optional(),
    image: z.string().optional(),
    type: z.enum(['artwork', 'workshop', 'commission', 'general']).default('general'),
    featured: z.boolean().default(false),
    createdAt: z.coerce.date()
  })
});

export const collections = {
  'artworks': artworksCollection,
  'workshops': workshopsCollection,
  'testimonials': testimonialsCollection
};

