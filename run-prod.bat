@echo off
REM Windows batch script to build and start the production server

REM Set Node.js path
set NODEJS_PATH=C:\Program Files\nodejs
set PATH=%NODEJS_PATH%;%PATH%

echo Building the project...
call "%NODEJS_PATH%\npx.cmd" vite build
if errorlevel 1 goto error

echo Building server...
call "%NODEJS_PATH%\npx.cmd" esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist
if errorlevel 1 goto error

echo Setting NODE_ENV to production...
set NODE_ENV=production

echo Starting production server...
echo Server will be available at: http://localhost:5000
"%NODEJS_PATH%\node.exe" dist/index.js

goto end

:error
echo Build failed! Please check the errors above.
pause

:end
