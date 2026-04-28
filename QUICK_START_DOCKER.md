# 🚀 Quick Start with Docker - CareerLaunch

Run the entire application on **ANY laptop** with just Docker installed. No Node.js, npm, or any other dependencies required!

---

## ⚡ Super Quick Start (3 Steps)

### 1️⃣ Install Docker

Download and install Docker Desktop for your operating system:

- **Windows**: https://www.docker.com/products/docker-desktop
- **Mac**: https://www.docker.com/products/docker-desktop  
- **Linux**: https://docs.docker.com/engine/install/

### 2️⃣ Run the Application

**Windows:**
```bash
# Double-click run-docker.bat
# OR run in Command Prompt:
run-docker.bat
```

**Mac/Linux:**
```bash
# Make script executable (first time only)
chmod +x run-docker.sh

# Run the script
./run-docker.sh
```

**Alternative (Manual):**
```bash
docker-compose up -d
```

### 3️⃣ Open Your Browser

Navigate to: **http://localhost:3000**

**That's it! 🎉** The application is now running!

---

## 🎯 What Gets Installed?

**Nothing on your system!** Everything runs inside a Docker container:
- ✅ Node.js 20
- ✅ Next.js 16.2.4
- ✅ All project dependencies
- ✅ Optimized production build

Your system stays clean! 🧹

---

## 🛑 Stopping the Application

```bash
# Stop the container
docker-compose down
```

Or simply close Docker Desktop.

---

## 📊 Viewing Logs

```bash
# See what's happening
docker-compose logs -f
```

Press `Ctrl+C` to exit log view.

---

## 🔄 Restarting

```bash
# Restart the application
docker-compose restart
```

---

## 🆕 Updating the Application

When you get new code changes:

```bash
# Stop current container
docker-compose down

# Rebuild and restart
docker-compose up --build -d
```

---

## 💡 Development Mode

Want to make changes with live reload?

```bash
docker-compose -f docker-compose.dev.yml up
```

Access at: **http://localhost:3001**

---

## ❓ Troubleshooting

### Port 3000 Already in Use?

**Option 1:** Stop the conflicting service

**Option 2:** Edit `docker-compose.yml` and change:
```yaml
ports:
  - "8080:3000"  # Change 3000 to 8080 or any free port
```

Then access at: http://localhost:8080

### Docker Not Running?

Make sure Docker Desktop is open and running. Look for the Docker icon in your system tray.

### Need to Start Fresh?

```bash
# Remove everything and start clean
docker-compose down -v
docker-compose up --build -d
```

---

## 📦 Sharing with Others

### Save the Application:
```bash
docker save career-accelerator:latest | gzip > career-accelerator.tar.gz
```

### Load on Another Computer:
```bash
docker load < career-accelerator.tar.gz
docker run -d -p 3000:3000 career-accelerator:latest
```

---

## ✅ Benefits

- ✅ **No Installation Needed**: Just Docker!
- ✅ **Works Everywhere**: Windows, Mac, Linux
- ✅ **Always Clean**: No system pollution
- ✅ **Production-Ready**: Optimized build
- ✅ **Easy Updates**: Just rebuild
- ✅ **Portable**: Run anywhere

---

## 📚 More Information

See `DOCKER_GUIDE.md` for advanced usage and detailed documentation.

---

**Questions?** Check the logs: `docker-compose logs -f`
