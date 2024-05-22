import { z } from "zod";
import { EValidationErrors } from "./constants";

const cardNumberTransformer = z
  .string()
  .min(1, { message: EValidationErrors.required })
  .transform((num) => num.replace(/\s+/g, ""));

export const orderInfoSchema = z.object({
  email: z
    .string()
    .min(1, { message: EValidationErrors.required })
    .email(EValidationErrors.invalidEmail),
  firstName: z.string().min(1, { message: EValidationErrors.required }),
  lastName: z.string().min(1, { message: EValidationErrors.required }),
  address: z.string().min(1, { message: EValidationErrors.required }),
  city: z.string().min(1, { message: EValidationErrors.required }),
  state: z.string().min(1, { message: EValidationErrors.required }),
  postalCode: z.number({
    required_error: EValidationErrors.required,
    invalid_type_error: EValidationErrors.numberRequired,
  }),
  country: z.string().min(1, { message: EValidationErrors.required }),
  cardNumber: cardNumberTransformer.refine((val) => val.length === 16, {
    message: EValidationErrors.cardNumberLength,
  }),
  expiration: z
    .string()
    .min(1, { message: EValidationErrors.required })
    .regex(/^(0[1-9]|1[0-2])\/\d{2}$/, {
      message: EValidationErrors.expirationFormat,
    }),
  securityCode: z
    .string()
    .min(1, { message: EValidationErrors.required })
    .length(3, { message: EValidationErrors.securityLength }),
  nameOnCard: z.string().min(1, { message: EValidationErrors.required }),
});
