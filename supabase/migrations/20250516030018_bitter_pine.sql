/*
  # Update registrations table RLS policies

  1. Changes
    - Add validation checks for the insert policy
    - Ensure email format is valid
    - Validate age ranges (18-26 years old)
    - Validate required fields
    - Add policy for updating own registrations

  2. Security
    - Maintain existing RLS enabled status
    - Add policy for users to update their own registrations
    - Keep existing select policy
*/

-- Drop existing insert policy
DROP POLICY IF EXISTS "Anyone can insert registrations" ON registrations;

-- Create new insert policy with validation
CREATE POLICY "Validated registrations insert"
ON registrations
FOR INSERT
TO anon
WITH CHECK (
  -- Validate email format
  email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'
  -- Validate age ranges (18-26 years old)
  AND player1_age BETWEEN 18 AND 26
  AND player2_age BETWEEN 18 AND 26
  -- Validate required fields are not empty
  AND player1_name IS NOT NULL AND player1_name != ''
  AND player2_name IS NOT NULL AND player2_name != ''
  AND captain_whatsapp IS NOT NULL AND captain_whatsapp != ''
  AND category IS NOT NULL AND category != ''
  -- Validate category is one of the allowed values
  AND category IN (
    '2nda-hombres',
    '3ra-hombres',
    '4ta-hombres',
    '5ta-hombres',
    'a-mujeres',
    'b-mujeres'
  )
);

-- Add policy for users to update their own registrations
CREATE POLICY "Users can update own registrations"
ON registrations
FOR UPDATE
TO anon
USING (email = current_user)
WITH CHECK (email = current_user);