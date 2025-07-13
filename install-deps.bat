@echo off
REM Windows batch script to install dependencies

REM Set Node.js path
set NODEJS_PATH="C:\Program Files\nodejs"
set PATH=%NODEJS_PATH%;%PATH%

echo Installing project dependencies...
"%NODEJS_PATH%\npm.cmd" install

if errorlevel 1 (
    echo Error installing dependencies!
    pause
    exit /b 1
)

echo Dependencies installed successfully!
echo You can now run:
echo - run-dev.bat for development
echo - run-prod.bat for production build and start

pause
