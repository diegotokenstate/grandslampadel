import { z } from 'zod';

const shirtSizeSchema = z.object({
  gender: z.enum(['masculino', 'femenino'], {
    errorMap: () => ({ message: 'Género inválido' })
  }),
  size: z.enum(['XS', 'S', 'M', 'L', 'XL', 'XXL'], {
    errorMap: () => ({ message: 'Talla inválida' })
  })
});

export const registrationSchema = z.object({
  player1Name: z.string().min(1, 'Nombre del jugador 1 es requerido'),
  player2Name: z.string().min(1, 'Nombre del jugador 2 es requerido'),
  email: z.string().email('Email inválido'),
  player1Age: z.string().transform(val => parseInt(val, 10)),
  player2Age: z.string().transform(val => parseInt(val, 10)),
  captainWhatsapp: z.string().min(1, 'WhatsApp del capitán es requerido'),
  teamName: z.string().optional(),
  category: z.enum([
    '2da-hombres',
    '3ra-hombres',
    '4ta-hombres',
    '5ta-hombres',
    'a-mujeres',
    'b-mujeres'
  ], { errorMap: () => ({ message: 'Categoría inválida' }) }),
  player1Gender: z.enum(['masculino', 'femenino'], {
    errorMap: () => ({ message: 'Género del jugador 1 es requerido' })
  }),
  player1ShirtSize: z.enum(['XS', 'S', 'M', 'L', 'XL', 'XXL'], {
    errorMap: () => ({ message: 'Talla del jugador 1 es requerida' })
  }),
  player2Gender: z.enum(['masculino', 'femenino'], {
    errorMap: () => ({ message: 'Género del jugador 2 es requerido' })
  }),
  player2ShirtSize: z.enum(['XS', 'S', 'M', 'L', 'XL', 'XXL'], {
    errorMap: () => ({ message: 'Talla del jugador 2 es requerida' })
  })
});

export type RegistrationFormData = z.infer<typeof registrationSchema>;