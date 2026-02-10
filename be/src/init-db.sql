-- Database initialization script for Hubspot Backend

-- Create deals table
CREATE TABLE IF NOT EXISTS deals (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  amount VARCHAR(50),
  stage VARCHAR(50) NOT NULL DEFAULT 'new',
