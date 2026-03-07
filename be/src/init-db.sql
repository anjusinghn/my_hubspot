-- Database initialization script for Hubspot Backend

-- Create deals table
CREATE TABLE IF NOT EXISTS deals (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  amount VARCHAR(50),
  stage VARCHAR(50) NOT NULL DEFAULT 'new',
  owner VARCHAR(255),
  close_date DATE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create meeting_links table
CREATE TABLE IF NOT EXISTS meeting_links (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  duration VARCHAR(20) NOT NULL,
  created_by VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create booked_meetings table
CREATE TABLE IF NOT EXISTS booked_meetings (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  attendee_name VARCHAR(255) NOT NULL,
  attendee_email VARCHAR(255) NOT NULL,
  scheduled_date TIMESTAMP NOT NULL,
  duration VARCHAR(20) NOT NULL,
  link_used VARCHAR(255),
  description TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_deals_stage ON deals(stage);
CREATE INDEX IF NOT EXISTS idx_deals_owner ON deals(owner);
CREATE INDEX IF NOT EXISTS idx_deals_created ON deals(created_at);

CREATE INDEX IF NOT EXISTS idx_meeting_links_slug ON meeting_links(slug);
CREATE INDEX IF NOT EXISTS idx_meeting_links_created ON meeting_links(created_at);

