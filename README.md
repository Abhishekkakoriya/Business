# CareerLaunch - Premium Startup Website 🚀

A stunning, conversion-focused startup website built with Next.js 15, TypeScript, Tailwind CSS, Framer Motion, and Prisma.

## ✨ Features

- **Premium Design System**: Apple-level elegance with dark/light mode support
- **Smooth Animations**: Framer Motion powered micro-interactions and scroll animations
- **Fully Responsive**: Mobile-first architecture that looks perfect on all devices
- **SEO Optimized**: Comprehensive metadata and performance optimizations
- **Database Ready**: Prisma ORM with SQLite (PostgreSQL-ready for production)
- **Type-Safe**: Built with TypeScript for robust development
- **Reusable Components**: Scalable component architecture

## 📦 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Database**: Prisma + SQLite
- **Forms**: React Hook Form + Zod
- **UI Components**: Custom components with Radix UI
- **Icons**: Lucide React
- **Notifications**: Sonner

## 🚀 Getting Started

### Installation & Setup

1. **Navigate to the project**:
   ```bash
   cd career-accelerator
   ```

2. **Install dependencies** (if needed):
   ```bash
   npm install
   ```

3. **Set up database**:
   ```bash
   npx prisma migrate dev --name init
   npx prisma generate
   ```

4. **Run development server**:
   ```bash
   npm run dev
   ```

5. **Open browser**: Visit [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
career-accelerator/
├── app/                   # Next.js app directory
│   ├── about/            # About page
│   ├── contact/          # Contact page
│   ├── internships/      # Internships page
│   ├── interview-prep/   # Interview prep page
│   ├── projects/         # Projects showcase
│   ├── layout.tsx        # Root layout with navbar/footer
│   ├── page.tsx          # Home page
│   └── globals.css       # Design system & global styles
├── components/
│   ├── home/            # Home page sections
│   ├── internships/     # Internship components
│   ├── layout/          # Navbar, Footer, Loading
│   ├── providers/       # Theme provider
│   └── ui/              # Reusable UI components
├── lib/
│   ├── db.ts           # Prisma client
│   └── utils.ts        # Utility functions
├── prisma/
│   └── schema.prisma   # Database schema
└── public/             # Static assets
```

## 🎯 Pages Overview

- **Home** (`/`) - Hero with animated metrics, services grid, testimonials, founders, CTA
- **About** (`/about`) - Company story, mission, vision, values, team stats
- **Internships** (`/internships`) - Paid/unpaid tracks, benefits, timeline, application form, FAQ
- **Interview Prep** (`/interview-prep`) - DSA roadmap, mock interviews, success stories
- **Projects** (`/projects`) - Portfolio showcase with tech stacks
- **Contact** (`/contact`) - Multi-channel contact options with premium form

## 🎨 Design System

### Color Palette
- **Primary**: Electric Blue (#3b82f6)
- **Accent**: Premium Violet (#8b5cf6)
- **Secondary**: Cyan (#06b6d4)
- **Dark Mode**: Automatic system detection + manual toggle

### Typography
- **Sans**: Geist Sans
- **Mono**: Geist Mono

### Components
All components feature:
- Smooth hover effects
- Focus states for accessibility
- Framer Motion animations
- Glass morphism effects
- Premium gradients

## 🔧 Customization

### Update Branding
1. Search and replace "CareerLaunch" with your company name
2. Update logo in navbar/footer components
3. Modify colors in `app/globals.css` (`:root` section)

### Database Models
Edit `prisma/schema.prisma` to add/modify models, then run:
```bash
npx prisma migrate dev --name your_migration_name
```

### Add New Pages
1. Create folder in `app/` directory
2. Add `page.tsx` file
3. Update navbar links in `components/layout/navbar.tsx`

## 📊 Database Schema

Includes models for:
- Users (students/professionals)
- Applications (internship applications)
- Contacts (inquiries)
- Testimonials (success stories)
- Projects (portfolio items)
- AdminUsers (admin access)
- Leads (potential clients/students)
- Newsletter (email subscriptions)

### Migrate to PostgreSQL (Production)

1. Update `prisma/schema.prisma`:
   ```prisma
   datasource db {
     provider = "postgresql"
     url      = env("DATABASE_URL")
   }
   ```

2. Update `.env` with production database URL

3. Run: `npx prisma migrate deploy`

## 🚢 Deployment

### Deploy to Vercel (Recommended)
1. Push to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy automatically

### Environment Variables
```env
DATABASE_URL="your-database-url"
NEXT_PUBLIC_APP_URL="https://yourdomain.com"
```

## 📝 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm start            # Start production server
npm run lint         # Run ESLint
npx prisma studio    # Open database GUI
```

## 🎯 Next Steps

1. ✅ Add real content (replace placeholders)
2. ✅ Connect forms to backend/email service
3. ⬜ Build admin dashboard
4. ⬜ Add Google Analytics
5. ⬜ Set up email notifications
6. ⬜ Add blog section
7. ⬜ Configure production database

---

**Built with ❤️ using Next.js, TypeScript, and modern web technologies**
