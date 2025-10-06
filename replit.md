# Overview

This is a romantic web application designed as an animated long-distance love story experience. The application creates an immersive, emotional journey through password-protected access, a scrolling narrative story, an interactive proposal page, and a celebration response page. Built with a modern React stack and designed with a dreamy, minimalistic aesthetic featuring soft lavender and rose color palettes.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

**Framework**: React with TypeScript using Vite as the build tool and development server.

**UI Component Library**: Shadcn UI components built on Radix UI primitives, providing accessible and customizable components with a "new-york" style theme.

**Styling Approach**: Tailwind CSS with a custom design system featuring:
- Dark mode as the primary theme with soft lavender (#280 70% 75%) and romantic rose (#340 60% 70%) accent colors
- Custom CSS variables for consistent theming across light/dark modes
- Typography using Playfair Display (headings), Inter (body), and Cormorant Garamond (poetic text)
- Spacing primitives based on Tailwind's 4px increments

**Animation Library**: Framer Motion for page transitions, scroll-based reveals, and interactive UI elements like floating particles and heart animations.

**State Management**: Local React state using useState hooks. The app follows a linear state machine pattern with four states: "locked" → "story" → "proposal" → "yes".

**Routing**: Single-page application with conditional rendering based on app state rather than traditional routing.

## Backend Architecture

**Server Framework**: Express.js running on Node.js with TypeScript.

**Development Setup**: Custom Vite middleware integration for HMR (Hot Module Replacement) in development, with production builds serving static assets.

**API Structure**: RESTful API design with routes prefixed with `/api`. Currently minimal backend logic with room for expansion through the storage interface.

**Data Layer**: Abstracted storage interface (`IStorage`) with in-memory implementation (`MemStorage`). Designed to be swappable with database implementations.

**Session Management**: Express session handling prepared with connect-pg-simple for PostgreSQL session store (currently not actively used but configured).

## Data Storage Solutions

**ORM**: Drizzle ORM configured for PostgreSQL integration via `@neondatabase/serverless`.

**Database**: PostgreSQL (Neon serverless) with configuration in `drizzle.config.ts`. Schema defined in `shared/schema.ts`.

**Current Schema**: Minimal schema with password validation types using Zod for runtime type safety. User model defined but not actively used in current implementation.

**Migration Strategy**: Drizzle Kit for schema migrations with files output to `./migrations` directory.

## Authentication & Authorization

**Password Protection**: Client-side password gate using hardcoded password "divine grace" for access control. This is intentionally simple for the romantic/personal nature of the application.

**Future Considerations**: User model exists in schema but authentication flow is not implemented. The storage interface supports user creation and retrieval by username/id for potential future expansion.

## Design System

**Color System**: HSL-based color variables allowing alpha channel manipulation. Dual theme support (light/dark) with dark mode as primary experience.

**Component Variants**: CVA (Class Variance Authority) for type-safe component variants across buttons, badges, alerts, and other UI primitives.

**Responsive Design**: Mobile-first approach with Tailwind breakpoints. Custom mobile hook (`useIsMobile`) for conditional rendering.

**Animation Patterns**:
- Floating particles background effect
- Scroll-based opacity transforms for story sections
- Interactive button animations (proposal page "No" button)
- Heart beat and pulse glow animations

## Build & Deployment

**Build Process**: 
- Frontend: Vite builds React app to `dist/public`
- Backend: esbuild bundles Express server to `dist/index.js` with ESM format
- TypeScript compilation checking via `tsc --noEmit`

**Development Mode**: Vite dev server with proxy to Express backend, includes Replit-specific plugins for error overlay and dev banner.

**Path Aliases**: Configured aliases for cleaner imports:
- `@/` → `client/src/`
- `@shared/` → `shared/`
- `@assets/` → `attached_assets/`

# External Dependencies

## Core Framework Dependencies
- **React 18**: UI library with modern hooks and concurrent features
- **Express**: Web server framework
- **Vite**: Frontend build tool and dev server
- **TypeScript**: Type safety across frontend and backend

## UI & Styling Libraries
- **Tailwind CSS**: Utility-first CSS framework
- **Radix UI**: Unstyled, accessible component primitives (20+ components imported)
- **Shadcn UI**: Pre-built component patterns using Radix UI
- **Framer Motion**: Animation library for React
- **Lucide React**: Icon library

## Data & Validation
- **Drizzle ORM**: TypeScript ORM for SQL databases
- **Drizzle Zod**: Zod schema generation from Drizzle schemas
- **Zod**: Runtime type validation
- **@neondatabase/serverless**: Neon PostgreSQL serverless driver

## State Management & Data Fetching
- **@tanstack/react-query**: Server state management and caching
- **React Hook Form**: Form state management
- **@hookform/resolvers**: Validation resolver for React Hook Form

## Developer Experience
- **@replit/vite-plugin-runtime-error-modal**: Error overlay for development
- **@replit/vite-plugin-cartographer**: Replit integration
- **@replit/vite-plugin-dev-banner**: Development mode banner

## Utilities
- **clsx & tailwind-merge**: Conditional className utilities
- **class-variance-authority**: Component variant management
- **date-fns**: Date manipulation library
- **nanoid**: Unique ID generation

## Database & Sessions
- **connect-pg-simple**: PostgreSQL session store for Express
- **PostgreSQL via Neon**: Serverless PostgreSQL database (configured but may be added later during development)