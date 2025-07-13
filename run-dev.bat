@echo off
REM Windows batch script to run the development server

REM Set Node.js path and add to PATH
set NODEJS_PATH=C:\Program Files\nodejs
set PATH=%NODEJS_PATH%;%PATH%

echo Setting NODE_ENV to development...
set NODE_ENV=development

echo Starting development server...
cd "c:\Users\Jinesh Singatkar\Downloads\PersonalPortfolio\Jinesh_Singatkar_Portfolio_Devops"
node_modules\.bin\tsx.cmd server/index.ts

pause
