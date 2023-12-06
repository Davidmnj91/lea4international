import { z } from 'zod';

export const contactUsSchema = z.object({
  name: z.string().min(1),
  email: z.string().email().min(1),
  message: z.string().min(1).max(255),
});
