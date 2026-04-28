@echo off
REM ============================================
REM CAREER ACCELERATOR - DOCKER RUN SCRIPT (Windows)
REM ============================================

echo.
echo ============================================
echo    CareerLaunch Docker Deployment
echo ============================================
echo.

REM Check if Docker is installed
docker --version >nul 2>&1
if errorlevel 1 (
    echo [ERROR] Docker is not installed!
    echo Please install Docker Desktop from:
    echo https://www.docker.com/products/docker-desktop
    echo.
    pause
    exit /b 1
)

REM Check if Docker is running
docker info >nul 2>&1
if errorlevel 1 (
    echo [ERROR] Docker is not running!
    echo Please start Docker Desktop and try again.
    echo.
    pause
    exit /b 1
)

echo [OK] Docker is ready!
echo.

echo Choose deployment mode:
echo.
echo   1) Production (optimized, port 3000)
echo   2) Development (hot-reload, port 3001)
echo.

set /p choice="Enter choice (1 or 2): "

if "%choice%"=="1" goto production
if "%choice%"=="2" goto development

echo.
echo [ERROR] Invalid choice. Please run again and select 1 or 2.
pause
exit /b 1

:production
echo.
echo Building production image...
docker-compose build

if errorlevel 1 (
    echo [ERROR] Build failed!
    pause
    exit /b 1
)

echo.
echo Starting production container...
docker-compose up -d

if errorlevel 1 (
    echo [ERROR] Failed to start container!
    pause
    exit /b 1
)

echo.
echo ============================================
echo   Application is running!
echo ============================================
echo.
echo   Access at: http://localhost:3000
echo.
echo Useful commands:
echo   View logs:    docker-compose logs -f
echo   Stop app:     docker-compose down
echo   Restart app:  docker-compose restart
echo.
pause
exit /b 0

:development
echo.
echo Starting development container...
echo (Code changes will auto-reload)
echo.
docker-compose -f docker-compose.dev.yml up

pause
exit /b 0
