@echo off
REM Quick test script to start the already-built production server

REM Set Node.js path
set NODEJS_PATH=C:\Program Files\nodejs
set PATH=%NODEJS_PATH%;%PATH%

echo Testing production server...
echo Setting NODE_ENV to production...
set NODE_ENV=production

echo Starting server on http://localhost:5000...
echo Press Ctrl+C to stop the server
"%NODEJS_PATH%\node.exe" dist/index.js

pause
