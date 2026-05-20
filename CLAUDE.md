# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Landing page for "Gaby, Invitaciones Digitales" - a digital invitations service. Single-page application with multiple sections (Hero, Pricing, Gallery, Testimonials, TikTok embeds, Contact).

## Tech Stack

- Next.js 15.3.8 (App Router)
- React 19
- TypeScript 5
- Tailwind CSS v4
- shadcn/ui (new-york style)
- Lucide React icons
- Geist font (Google Fonts)

## Commands

```bash
# Development (uses Turbopack)
npm run dev

# Production build
npm run build

# Start production server
npm run start

# Linting
npm run lint
```

No test runner is configured.

## Architecture

### Single-File Structure
The entire application is in `app/page.tsx` (~830 lines). This is intentional - it's a marketing landing page with all sections in one client component.

### Component Patterns
- shadcn/ui components in `components/ui/` (Button, Input)
- Utility function `cn()` in `lib/utils.ts` for Tailwind class merging
- Components use Radix UI primitives via shadcn

### Styling
- Tailwind CSS v4 with PostCSS (`@tailwindcss/postcss`)
- Custom primary color: `#85cfa3` (mint green)
- CSS variables for theming in `globals.css`
- Custom animations defined with `<style jsx global>` in page.tsx
- Mobile detection hook for conditional hover effects

### Path Aliases
```
@/components -> ./components
@/lib -> ./lib
@/components/ui -> ./components/ui
```

### Key Implementation Details
- `app/page.tsx` is a Client Component ("use client") for animations
- Uses `useState`/`useEffect` for: typing animation, mouse tracking, testimonial carousel, counter animation
- Images are in `public/images/` (JPEG/PNG)
- TikTok embeds use iframes with specific video IDs
- WhatsApp contact link: `https://wa.me/3321916387`

### Tailwind Config Notes
- Custom `animate-fade-in-up` keyframes for scroll animations
- Color scheme uses CSS variables mapped to HSL values
- Container max-width: `1400px` (2xl breakpoint)

## File Structure

```
app/
  layout.tsx       # Root layout with Geist font, metadata
  page.tsx         # Main landing page (all sections)
  globals.css      # Tailwind imports + CSS variables
components/
  ui/              # shadcn/ui components (button, input)
lib/
  utils.ts         # cn() helper for Tailwind classes
public/
  images/          # Static images (invitations, testimonials)
```

## Adding shadcn Components

This project uses the "new-york" style. To add components:
```bash
npx shadcn add <component-name>
```
