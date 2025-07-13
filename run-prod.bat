@echo off
REM Windows batch script to build and start the production server

echo Building the project...
call npx vite build
if errorlevel 1 goto error

echo Building server...
call npx esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist
if errorlevel 1 goto error

echo Setting NODE_ENV to production...
set NODE_ENV=production

echo Starting production server...
node dist/index.js

goto end

:error
echo Build failed! Please check the errors above.
pause

:end
