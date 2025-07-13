@echo off
REM Script to permanently add Node.js to your PATH

echo Adding Node.js to your system PATH...

REM Add to current session
set PATH="C:\Program Files\nodejs";%PATH%

REM Add permanently for current user
setx PATH "%PATH%;C:\Program Files\nodejs"

echo Node.js has been added to your PATH!
echo Please restart your command prompt for the changes to take effect.
echo After restarting, you should be able to use 'node' and 'npm' commands directly.

pause
