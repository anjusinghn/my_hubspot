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
BETTER_AUTH_URL="http://localhost:3000"
NEXT_PUBLIC_BETTER_AUTH_URL="http://localhost:3000"

# Google OAuth Credentials
# Get these from https://console.cloud.google.com/
GOOGLE_CLIENT_ID="your-client-id.apps.googleusercontent.com"
GOOGLE_CLIENT_SECRET="your-google-client-secret"
EOF
    echo "📝 Created .env.local template"
    echo "⚠️  IMPORTANT: Edit fe/.env.local with your actual credentials!"
    echo ""
else
    echo "✅ .env.local already exists"
    echo ""
fi

echo "🗄️  Setting up database..."
echo "Make sure PostgreSQL is running first!"
echo ""

# Prompt for database creation
read -p "Create database 'hubspot_db'? (y/n) " -n 1 -r
echo ""
if [[ $REPLY =~ ^[Yy]$ ]]; then
    createdb hubspot_db 2>/dev/null || echo "⚠️  Database might already exist, continuing..."
    echo "✅ Database ready"
fi

echo ""
echo "🔄 Running Prisma migrations..."
npx prisma migrate dev --name init

echo ""
echo "🎨 Generating Prisma Client..."
npx prisma generate

echo ""
echo "✅ Setup complete!"
echo ""
echo "📋 Next steps:"
echo "1. Edit fe/.env.local with your credentials"
echo "2. Get Google OAuth credentials from https://console.cloud.google.com/"
echo "3. Run: cd fe && npm run dev"
echo "4. Visit: http://localhost:3000"
echo ""
echo "📚 Documentation:"
echo "- QUICK_START.md - Fast setup guide"
echo "- README_AUTH.md - Complete authentication guide"
echo "- CSP_WARNINGS_EXPLAINED.md - About console warnings"
