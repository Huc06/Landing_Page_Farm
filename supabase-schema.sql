-- Create tables directly on Supabase SQL Editor
-- Copy and paste this into Supabase Dashboard > SQL Editor > New Query

-- Create enum for user roles
CREATE TYPE "Role" AS ENUM ('ADMIN', 'EDITOR');

-- Create User table
CREATE TABLE "User" (
  id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
  email TEXT UNIQUE NOT NULL,
  name TEXT,
  password TEXT NOT NULL,
  role "Role" DEFAULT 'EDITOR' NOT NULL,
  "createdAt" TIMESTAMP DEFAULT NOW() NOT NULL,
  "updatedAt" TIMESTAMP DEFAULT NOW() NOT NULL
);

-- Create Post table
CREATE TABLE "Post" (
  id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  category TEXT NOT NULL,
  "readTime" TEXT NOT NULL,
  published BOOLEAN DEFAULT FALSE NOT NULL,
  "publishedAt" TIMESTAMP,
  "authorId" TEXT NOT NULL REFERENCES "User"(id),
  image TEXT,
  tags TEXT[] DEFAULT '{}',
  "createdAt" TIMESTAMP DEFAULT NOW() NOT NULL,
  "updatedAt" TIMESTAMP DEFAULT NOW() NOT NULL
);

-- Create indexes
CREATE INDEX "Post_slug_idx" ON "Post"(slug);
CREATE INDEX "Post_published_idx" ON "Post"(published);
CREATE INDEX "Post_category_idx" ON "Post"(category);

-- Create Category table
CREATE TABLE "Category" (
  id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
  name TEXT UNIQUE NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  color TEXT DEFAULT '#00ff00' NOT NULL
);

-- Insert default user
INSERT INTO "User" (email, name, password, role)
VALUES ('team@overguild.com', 'OverGuild Team', 'not-used', 'ADMIN');

-- Insert categories
INSERT INTO "Category" (name, slug, color) VALUES
  ('Announcement', 'announcement', '#00ff00'),
  ('Guide', 'guide', '#00ffff'),
  ('Feature', 'feature', '#ff00ff'),
  ('Tutorial', 'tutorial', '#ffff00');

-- Insert sample posts
INSERT INTO "Post" (title, slug, excerpt, content, category, "readTime", published, "publishedAt", "authorId", tags)
SELECT 
  'Welcome to OverGuild: The Future of Web3 Collaboration',
  'welcome-to-overguild',
  'Discover how OverGuild is revolutionizing the way builders connect, contribute, and earn in the Web3 ecosystem.',
  '# Welcome to OverGuild

OverGuild is revolutionizing how builders connect, contribute, and earn in the Web3 ecosystem.

## What is OverGuild?

- **Connect**: Meet fellow builders
- **Contribute**: Participate in hackathons
- **Conquer**: Earn rewards on-chain',
  'Announcement',
  '5 min',
  TRUE,
  '2026-03-01'::timestamp,
  (SELECT id FROM "User" WHERE email = 'team@overguild.com'),
  ARRAY['announcement', 'web3']::TEXT[];

-- Success message
SELECT 'Database schema created successfully!' as message;
