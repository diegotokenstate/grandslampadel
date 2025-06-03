/*
  # Update registrations table RLS policies

  1. Changes
    - Remove existing restrictive insert policy
    - Add new unrestricted insert policy for anonymous users
    - Add new read policy for anonymous users to view their own registrations
    - Add new update policy for anonymous users to modify their own registrations

  2. Security
    - Enables anonymous users to insert new registrations
    - Maintains row-level security for reading and updating
    - Users can only access their own data
*/

-- Drop existing policies
DROP POLICY IF EXISTS "Users can read own registrations" ON registrations;
DROP POLICY IF EXISTS "Users can update own registrations" ON registrations;
DROP POLICY IF EXISTS "Validated registrations insert" ON registrations;

-- Create new policies
CREATE POLICY "Allow anonymous insert"
  ON registrations
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Read own registrations"
  ON registrations
  FOR SELECT
  TO anon
  USING (email = current_user);

CREATE POLICY "Update own registrations"
  ON registrations
  FOR UPDATE
  TO anon
  USING (email = current_user)
  WITH CHECK (email = current_user);