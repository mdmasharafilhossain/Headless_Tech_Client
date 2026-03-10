import { z } from "zod";

export const feedbackSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  Email: z.email("Enter a valid email").optional(),
});

export type FeedbackInput = z.infer<typeof feedbackSchema>;