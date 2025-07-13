# Deployment Guide

## Prerequisites
1. Install Node.js (v18 or higher) from https://nodejs.org/
2. Verify installation: `node --version` and `npm --version`

## Local Development
```bash
# Install dependencies
npm install

# Run in development mode
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Deployment Options

### Option 1: Vercel (Recommended for full-stack)
1. Connect your GitHub repository to Vercel
2. Set build command: `npm run build`
3. Set start command: `npm start`
4. Deploy

### Option 2: Netlify (For static hosting)
1. Build the project: `npm run build`
2. Upload the `dist/public` folder to Netlify
3. Set publish directory to `dist/public`

### Option 3: Railway/Render (Full-stack hosting)
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set start command: `npm start`
4. Ensure PORT environment variable is set to 5000

## Environment Variables
Make sure to set these in your deployment platform:
- `NODE_ENV=production`
- Any database connection strings if using the contact form

## Troubleshooting
- Ensure Node.js is installed locally
- Run `npm install` before building
- Check that `dist` directory is created after build
- Verify the server starts on port 5000
