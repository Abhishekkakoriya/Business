# 🐳 Docker Deployment Guide - CareerLaunch

Complete guide to running CareerLaunch in Docker containers on any machine.

---

## 📋 Prerequisites

**Only Docker is required!** No Node.js, npm, or any other dependencies needed.

### Install Docker:
- **Windows**: [Docker Desktop for Windows](https://www.docker.com/products/docker-desktop)
- **Mac**: [Docker Desktop for Mac](https://www.docker.com/products/docker-desktop)
- **Linux**: [Docker Engine](https://docs.docker.com/engine/install/)

### Verify Installation:
```bash
docker --version
docker-compose --version
```

---

## 🚀 Quick Start (Production Mode)

### Option 1: Using Docker Compose (Recommended)

```bash
# 1. Navigate to project directory
cd career-accelerator

# 2. Build and start the container
docker-compose up -d

# 3. Open your browser
# Visit: http://localhost:3000
```

**That's it!** 🎉 Your application is running!

### Option 2: Using Docker CLI

```bash
# 1. Build the image
docker build -t career-accelerator .

# 2. Run the container
docker run -d -p 3000:3000 --name career-accelerator-app career-accelerator

# 3. Open your browser
# Visit: http://localhost:3000
```

---

## 🛠️ Development Mode (With Hot Reload)

For development with live code changes:

```bash
# Start development container
docker-compose -f docker-compose.dev.yml up

# Your app will be available at http://localhost:3001
# Code changes will automatically reload!
```

---

## 📦 Managing Containers

### View Running Containers:
```bash
docker ps
```

### View Logs:
```bash
# Using docker-compose
docker-compose logs -f

# Using docker CLI
docker logs -f career-accelerator-app
```

### Stop Container:
```bash
# Using docker-compose
docker-compose down

# Using docker CLI
docker stop career-accelerator-app
```

### Restart Container:
```bash
# Using docker-compose
docker-compose restart

# Using docker CLI
docker restart career-accelerator-app
```

### Remove Container:
```bash
# Stop and remove with docker-compose
docker-compose down -v

# Using docker CLI
docker stop career-accelerator-app
docker rm career-accelerator-app
```

---

## 🔧 Advanced Usage

### Build with Custom Tag:
```bash
docker build -t career-accelerator:v1.0.0 .
```

### Run on Different Port:
```bash
docker run -d -p 8080:3000 --name career-accelerator-app career-accelerator
# Access at: http://localhost:8080
```

### Pass Environment Variables:
```bash
docker run -d \
  -p 3000:3000 \
  -e NODE_ENV=production \
  -e CUSTOM_VAR=value \
  --name career-accelerator-app \
  career-accelerator
```

### View Container Resource Usage:
```bash
docker stats career-accelerator-app
```

---

## 📤 Sharing Your Application

### Save Image to File:
```bash
docker save career-accelerator:latest | gzip > career-accelerator.tar.gz
```

### Load Image on Another Machine:
```bash
docker load < career-accelerator.tar.gz
docker run -d -p 3000:3000 career-accelerator:latest
```

---

## 🐛 Troubleshooting

### Port Already in Use:
```bash
# Option 1: Stop the conflicting service
# Option 2: Use a different port
docker run -d -p 3001:3000 --name career-accelerator-app career-accelerator
```

### Container Won't Start:
```bash
# Check logs for errors
docker logs career-accelerator-app

# Inspect container
docker inspect career-accelerator-app
```

### Rebuild from Scratch:
```bash
# Remove old containers and images
docker-compose down -v
docker system prune -a

# Rebuild
docker-compose up --build -d
```

---

## 📁 Project Structure

```
career-accelerator/
├── Dockerfile              # Production build configuration
├── .dockerignore          # Files to exclude from Docker build
├── docker-compose.yml     # Production deployment
├── docker-compose.dev.yml # Development with hot-reload
└── DOCKER_GUIDE.md        # This file
```

---

## ✅ Benefits of Docker Deployment

- ✅ **Zero Configuration**: No Node.js or npm installation required
- ✅ **Consistent Environment**: Works exactly the same on any machine
- ✅ **Isolated**: Doesn't interfere with other software
- ✅ **Production-Ready**: Optimized multi-stage build
- ✅ **Portable**: Easy to share and deploy anywhere
- ✅ **Secure**: Runs as non-root user

---

## 🎯 Summary Commands

```bash
# Production Mode (Recommended)
docker-compose up -d              # Start
docker-compose logs -f            # View logs
docker-compose down               # Stop

# Development Mode
docker-compose -f docker-compose.dev.yml up    # Start with hot-reload

# Docker CLI Alternative
docker build -t career-accelerator .           # Build
docker run -d -p 3000:3000 career-accelerator  # Run
```

---

## 🌐 Access Your Application

- **Production**: http://localhost:3000
- **Development**: http://localhost:3001

---

**Need help?** Check the logs with `docker-compose logs -f` or `docker logs career-accelerator-app`
