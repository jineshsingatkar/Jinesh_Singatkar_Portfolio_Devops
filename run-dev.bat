@echo off
REM Windows batch script to run the development server

echo Setting NODE_ENV to development...
set NODE_ENV=development

echo Starting development server...
npx tsx server/index.ts

pause
