import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { createClient } from 'npm:@supabase/supabase-js@2.39.7';
import { z } from 'npm:zod@3.22.4';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

const registrationSchema = z.object({
  player1_name: z.string().min(1, 'Nombre del jugador 1 es requerido'),
  player2_name: z.string().min(1, 'Nombre del jugador 2 es requerido'),
  email: z.string().email('Email inválido'),
  player1_age: z.number(),
  player2_age: z.number(),
  captain_whatsapp: z.string().min(1, 'WhatsApp del capitán es requerido'),
  team_name: z.string().optional().nullable(),
  category: z.enum([
    '2da-hombres',
    '3ra-hombres',
    '4ta-hombres',
    '5ta-hombres',
    'a-mujeres',
    'b-mujeres'
  ], { errorMap: () => ({ message: 'Categoría inválida' }) }),
  status: z.enum(['pending', 'approved', 'rejected'], {
    errorMap: () => ({ message: 'Estado inválido' })
  }).default('pending'),
  player1_shirt_size: z.string(),
  player2_shirt_size: z.string()
});

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL');
    const supabaseAnonKey = Deno.env.get('SUPABASE_ANON_KEY');

    if (!supabaseUrl || !supabaseAnonKey) {
      return new Response(
        JSON.stringify({ error: 'Error de configuración del servidor' }),
        {
          status: 200,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    const supabase = createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    });

    const body = await req.json();
    
    try {
      const validatedData = registrationSchema.parse(body);
      
      const { data, error } = await supabase
        .from('registrations')
        .insert([validatedData])
        .select()
        .single();

      if (error) {
        console.error('Database error:', error);
        return new Response(
          JSON.stringify({ error: 'Error al procesar la inscripción' }),
          {
            status: 200,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          }
        );
      }

      return new Response(
        JSON.stringify({ data }),
        {
          status: 200,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    } catch (validationError) {
      if (validationError instanceof z.ZodError) {
        const errors = validationError.errors.map(err => ({
          field: err.path.join('.'),
          message: err.message,
        }));

        return new Response(
          JSON.stringify({ error: 'Datos inválidos', details: errors }),
          {
            status: 200,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          }
        );
      }
      throw validationError;
    }
  } catch (error) {
    console.error('Error:', error);
    return new Response(
      JSON.stringify({ error: 'Error interno del servidor' }),
      {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});