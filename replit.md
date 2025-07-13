# Jinesh Abhay Singatkar - DevOps Engineer Portfolio

## Overview

This is a modern, responsive portfolio website for Jinesh Abhay Singatkar, a DevOps Engineer specializing in AWS, Docker, Terraform, and CI/CD automation. The application showcases professional experience, skills, projects, education, and provides a contact form for potential employers or collaborators.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: Radix UI components with shadcn/ui styling system
- **State Management**: React Query (TanStack Query) for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ESM modules
- **API Style**: RESTful API endpoints
- **Middleware**: Custom logging, JSON parsing, and error handling
- **Development**: Hot module replacement via Vite integration

### Database & Storage
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Database**: PostgreSQL (configured for Neon Database)
- **Schema**: Defined in shared/schema.ts with Zod validation
- **Storage Interface**: Abstracted storage layer with in-memory fallback for development

## Key Components

### Core Features
1. **Hero Section**: Introduction with social links and call-to-action buttons
2. **Skills Section**: Categorized technical skills with icons and badges
3. **Projects Section**: Showcase of DevOps projects with descriptions and technologies
4. **Education Section**: Academic background and certifications
5. **Contact Form**: Functional contact form with backend submission
6. **Theme System**: Dark/light mode toggle with persistent preferences

### UI System
- **Design System**: shadcn/ui components with Radix UI primitives
- **Theming**: CSS custom properties for consistent theming
- **Responsiveness**: Mobile-first responsive design
- **Icons**: Lucide React icons with React Icons for brand icons
- **Typography**: Inter font family for clean, professional appearance

## Data Flow

### Contact Form Flow
1. User fills out contact form (name, email, subject, message)
2. Form validation using Zod schemas
3. Frontend sends POST request to `/api/contact`
4. Backend validates and stores contact data
5. Success/error feedback displayed via toast notifications

### Theme Management
1. Theme preference stored in localStorage
2. Theme provider manages global theme state
3. CSS classes applied to document root for theme switching
4. Persistent across page refreshes

## External Dependencies

### Frontend Dependencies
- **@tanstack/react-query**: Server state management and caching
- **@radix-ui/***: Accessible UI component primitives
- **tailwindcss**: Utility-first CSS framework
- **wouter**: Lightweight routing library
- **lucide-react**: Icon library
- **react-icons**: Additional icon sets (brand icons)

### Backend Dependencies
- **express**: Web framework
- **drizzle-orm**: Type-safe ORM
- **@neondatabase/serverless**: PostgreSQL driver for Neon
- **zod**: Schema validation
- **tsx**: TypeScript execution for development

### Development Tools
- **vite**: Build tool and development server
- **typescript**: Static type checking
- **drizzle-kit**: Database schema management
- **tailwindcss**: CSS framework

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds React app to `dist/public`
2. **Backend Build**: esbuild bundles server code to `dist/index.js`
3. **Database**: Drizzle migrations in `migrations/` directory

### Environment Configuration
- **DATABASE_URL**: PostgreSQL connection string (required)
- **NODE_ENV**: Environment mode (development/production)
- **REPL_ID**: Replit-specific environment detection

### Scripts
- `dev`: Development server with hot reload
- `build`: Production build for both frontend and backend
- `start`: Production server startup
- `db:push`: Push database schema changes

### Hosting Considerations
- Static assets served from `dist/public`
- API routes handle backend functionality
- Database migrations managed via Drizzle Kit
- Environment variables required for database connection

## Technical Decisions

### Architecture Choices
- **Monorepo Structure**: Frontend, backend, and shared code in single repository
- **Type Safety**: Full TypeScript implementation with strict settings
- **Component Architecture**: Modular, reusable components with consistent design system
- **API Design**: RESTful endpoints with proper error handling and validation

### Performance Optimizations
- **Code Splitting**: Vite handles automatic code splitting
- **Lazy Loading**: Dynamic imports for non-critical components
- **Caching**: React Query provides intelligent caching and background updates
- **Build Optimization**: Vite's optimized production builds

### Development Experience
- **Hot Reload**: Vite HMR for instant feedback
- **Type Checking**: TypeScript strict mode for better code quality
- **Linting**: Configuration for consistent code style
- **Development Tools**: Replit-specific plugins and error overlays