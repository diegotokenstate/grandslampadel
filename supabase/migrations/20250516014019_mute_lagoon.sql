/*
  # Create registrations table

  1. New Tables
    - `registrations`
      - `id` (uuid, primary key)
      - `player1_name` (text)
      - `player2_name` (text)
      - `email` (text)
      - `player1_age` (integer)
      - `player2_age` (integer)
      - `captain_whatsapp` (text)
      - `team_name` (text)
      - `category` (text)
      - `created_at` (timestamptz)
      - `status` (text)

  2. Security
    - Enable RLS on `registrations` table
    - Add policy for authenticated users to read their own data
    - Add policy for anon users to insert data
*/

CREATE TABLE IF NOT EXISTS registrations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  player1_name text NOT NULL,
  player2_name text NOT NULL,
  email text NOT NULL,
  player1_age integer NOT NULL,
  player2_age integer NOT NULL,
  captain_whatsapp text NOT NULL,
  team_name text,
  category text NOT NULL,
  created_at timestamptz DEFAULT now(),
  status text DEFAULT 'pending'
);

ALTER TABLE registrations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert registrations"
  ON registrations
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Users can read own registrations"
  ON registrations
  FOR SELECT
  TO anon
  USING (email = current_user);