#!/bin/bash

# Parrot CTFs Hubspot - Authentication Setup Script
# Run this from the project root directory

set -e  # Exit on error

echo "🚀 Setting up Parrot CTFs Hubspot Authentication..."
echo ""

# Navigate to frontend
cd fe

echo "📦 Installing packages..."
npm install better-auth @prisma/client
npm install -D prisma

echo ""
echo "✅ Packages installed!"
echo ""

# Check if .env.local exists
if [ ! -f .env.local ]; then
    echo "⚠️  .env.local not found. Creating template..."
    cat > .env.local << 'EOF'
# Database Configuration
DATABASE_URL="postgresql://username:password@localhost:5432/hubspot_db"

# Better Auth Configuration
# Generate a random secret with: openssl rand -base64 32
BETTER_AUTH_SECRET="replace-with-random-32-plus-character-secret"
