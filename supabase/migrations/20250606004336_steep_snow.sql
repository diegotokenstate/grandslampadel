/*
  # Add shirt size fields to registrations table
  
  1. Changes
    - Add player1_shirt_size column (text, nullable)
    - Add player2_shirt_size column (text, nullable)
    
  2. Notes
    - Columns are nullable to maintain compatibility with existing records
    - Values will be stored in format "Masc-L" or "Fem-M"
*/

ALTER TABLE registrations 
ADD COLUMN IF NOT EXISTS player1_shirt_size text,
ADD COLUMN IF NOT EXISTS player2_shirt_size text;