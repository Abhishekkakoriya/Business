#!/bin/bash

# ============================================
# CAREER ACCELERATOR - DOCKER RUN SCRIPT
# ============================================
# Simple script to build and run the application in Docker

set -e

echo "🚀 CareerLaunch Docker Deployment"
echo "=================================="
echo ""

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    echo "❌ Docker is not installed. Please install Docker first."
    echo "   Visit: https://www.docker.com/products/docker-desktop"
    exit 1
fi

# Check if Docker is running
if ! docker info &> /dev/null; then
    echo "❌ Docker is not running. Please start Docker Desktop."
    exit 1
fi

echo "✅ Docker is ready!"
echo ""

# Ask user for mode
echo "Choose deployment mode:"
echo "1) Production (optimized, port 3000)"
echo "2) Development (hot-reload, port 3001)"
echo ""
read -p "Enter choice (1 or 2): " mode

case $mode in
    1)
        echo ""
        echo "📦 Building production image..."
        docker-compose build
        
        echo ""
        echo "🚀 Starting production container..."
        docker-compose up -d
        
        echo ""
        echo "✅ Application is running!"
        echo "🌐 Access at: http://localhost:3000"
        echo ""
        echo "Useful commands:"
        echo "  View logs:    docker-compose logs -f"
        echo "  Stop app:     docker-compose down"
        echo "  Restart app:  docker-compose restart"
        ;;
    2)
        echo ""
        echo "🛠️  Starting development container..."
        echo "   (Code changes will auto-reload)"
        docker-compose -f docker-compose.dev.yml up
        ;;
    *)
        echo "❌ Invalid choice. Please run again and select 1 or 2."
        exit 1
        ;;
esac
