import { z } from 'zod';

export const registrationSchema = z.object({
  player1Name: z.string().min(1, 'Nombre del jugador 1 es requerido'),
  player2Name: z.string().min(1, 'Nombre del jugador 2 es requerido'),
  email: z.string().email('Email inválido'),
  player1Age: z.string().transform(val => parseInt(val, 10)),
  player2Age: z.string().transform(val => parseInt(val, 10)),
  captainWhatsapp: z.string().min(1, 'WhatsApp del capitán es requerido'),
  teamName: z.string().optional(),
  category: z.enum([
    '2nda-hombres',
    '3ra-hombres',
    '4ta-hombres',
    '5ta-hombres',
    'a-mujeres',
    'b-mujeres'
  ], { errorMap: () => ({ message: 'Categoría inválida' }) }),
});

export type RegistrationFormData = z.infer<typeof registrationSchema>;