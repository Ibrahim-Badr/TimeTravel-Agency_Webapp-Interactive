# TimeTravel Agency - Premium Luxury Time Travel Webapp

A sophisticated, premium luxury time travel agency website built with React, TypeScript, and Tailwind CSS. Features dark mode aesthetics with gold accents, glassmorphism effects, and smooth animations powered by Framer Motion.

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Features](#features)
- [Installation](#installation)
- [Development](#development)
- [Building](#building)
- [Component Documentation](#component-documentation)
- [Styling & Design System](#styling--design-system)
- [Performance Optimizations](#performance-optimizations)

## Overview

TimeTravel Agency is a premium luxury brand website showcasing a fictional time travel booking service. The application emphasizes elegance through:

- **Dark Mode Design**: Sophisticated gray-900 background with gold/amber accents
- **Glassmorphism Effects**: Backdrop blur effects with semi-transparent layers
- **Smooth Animations**: Scroll-triggered and interactive animations via Framer Motion
- **Responsive Layout**: Mobile-first design with optimal breakpoints
- **Premium UX**: Intuitive interactions with hover states and micro-animations

## Tech Stack

### Core Dependencies
- **React 18.3.1**: UI framework with hooks
- **TypeScript 5.5.3**: Type-safe JavaScript
- **Vite 5.4.2**: Modern build tool
- **Tailwind CSS 3.4.1**: Utility-first CSS framework
- **Framer Motion 12.34.4**: Animation library
- **Lucide React 0.344.0**: Icon library

### Development Dependencies
- **ESLint 9.9.1**: Code linting
- **TypeScript ESLint**: TypeScript-specific linting
- **PostCSS 8.4.35**: CSS processing
- **Autoprefixer 10.4.18**: Vendor prefixing

## Project Structure

```
src/
├── App.tsx                    # Main application component
├── main.tsx                   # React entry point
├── index.css                  # Global styles
├── vite-env.d.ts             # Vite type definitions
└── components/
    ├── Hero.tsx              # Full-screen hero section
    ├── Destinations.tsx      # Interactive destination cards
    ├── Quiz.tsx              # 4-step AI recommendation quiz
    ├── ChatWidget.tsx        # Floating chat interface
    └── Footer.tsx            # Footer with links

Configuration Files:
├── vite.config.ts            # Vite configuration
├── tailwind.config.js        # Tailwind CSS configuration
├── postcss.config.js         # PostCSS configuration
├── tsconfig.json             # TypeScript configuration
└── eslint.config.js          # ESLint configuration
```

## Features

### 1. Hero Section (`Hero.tsx`)
- Full-screen background with gradient overlay
- Animated logo and title
- Staggered entrance animations
- Call-to-action button with hover effects
- Animated scroll indicator

**Key Technologies**: Framer Motion animations, gradient backgrounds, responsive typography

### 2. Destinations Section (`Destinations.tsx`)
Three interactive cards showcasing:
- **Paris 1889** (Belle Époque)
- **Crétacé -65M** (Dinosaures)
- **Florence 1504** (Renaissance)

**Features**:
- Image hover zoom effect
- Glassmorphism overlay on hover
- Dynamic content reveal animation
- Highlight badges
- "Book now" action button

**Key Technologies**: Framer Motion scroll triggers, gradient overlays, responsive grid

### 3. AI Quiz Component (`Quiz.tsx`)
Four-step interactive questionnaire that:
- Assesses user preferences (Culture, Adventure, Elegance)
- Displays progress bar
- Reveals destination recommendation based on answers
- Provides personalized description and booking option

**Features**:
- Step-by-step navigation
- Progress tracking
- Animated transitions between steps
- Result calculation based on answer frequency
- Reset functionality

### 4. Chat Widget (`ChatWidget.tsx`)
Floating chat interface for customer support:
- Fixed position in bottom-right corner
- Expandable/collapsible modal
- Message history display
- Auto-response system
- Smooth open/close animations

**Features**:
- CORS-ready for external integration
- Responsive chat window
- Icon animation on toggle
- Message timestamps

### 5. Footer (`Footer.tsx`)
Professional footer with:
- Brand information
- Quick navigation links
- Social/resource links
- Copyright notice
- Open source credits

## Installation

### Prerequisites
- Node.js 16+
- npm or yarn

### Setup Steps

```bash
# Clone the repository
git clone <repository-url>
cd timetravel-agency

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run type checking
npm run typecheck

# Run linting
npm run lint
```

## Development

### Development Server
```bash
npm run dev
```
Runs the Vite development server with hot module replacement (HMR). The app will be available at `http://localhost:5173`.

### Type Checking
```bash
npm run typecheck
```
Validates TypeScript without emitting files using `tsc --noEmit`.

### Linting
```bash
npm run lint
```
Runs ESLint to check code quality and style consistency.

## Building

### Production Build
```bash
npm run build
```
Creates an optimized production build in the `dist/` directory. The build includes:
- Code splitting and minification
- CSS optimization
- Asset optimization
- Source map generation

### Build Output
```
dist/
├── index.html                 # Main HTML file
├── _redirects                 # Netlify redirects configuration
└── assets/
    ├── index-[hash].js       # Minified JavaScript bundle
    └── index-[hash].css      # Minified CSS bundle
```

## Component Documentation

### Hero Component

**Props**: None (self-contained)

**State**: None

**Key Features**:
- Initial page load animation with staggered elements
- Gradient text effect using Tailwind `bg-clip-text`
- Smooth scroll indicator animation
- Fully responsive typography scaling

**Animation Details**:
- Title: 1s delay, fade + slide up
- Subtitle: 0.4s additional delay
- CTA Button: 0.6s additional delay
- Scroll indicator: 2s delay with infinite pulse

### Destinations Component

**Props**: None

**State**: None

**Data Structure**:
```typescript
interface Destination {
  id: number;
  title: string;
  era: string;
  description: string;
  image: string;
  date: string;
  highlights: string[];
}
```

**Key Features**:
- Viewport-triggered animations (`whileInView`)
- Group hover states for card interactions
- Image zoom on hover (1.1x scale)
- Staggered card animations with 0.2s delays
- Responsive grid: 1 column (mobile) to 3 columns (desktop)

### Quiz Component

**Props**: None

**State**:
```typescript
currentStep: number         // Current question index (0-3)
answers: array             // Array of user answers
showResult: boolean        // Whether to show results
isStarted: boolean         // Whether quiz has started
```

**Data Structure**:
```typescript
interface Question {
  id: number;
  question: string;
  options: Array<{
    text: string;
    value: 'culture' | 'adventure' | 'elegance';
  }>;
}
```

**Recommendation Logic**:
- Counts occurrences of each preference type
- Returns destination with highest count
- Falls back to first if tie

**Key Features**:
- 4-step progression
- Animated progress bar
- Exit animation between steps using `AnimatePresence`
- Auto-response simulation after 1s

### ChatWidget Component

**Props**: None

**State**:
```typescript
isOpen: boolean            // Chat window visibility
messages: Message[]        // Chat message history
inputValue: string         // Current input text
```

**Message Structure**:
```typescript
interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}
```

**Key Features**:
- Persistent floating button with animated icon toggle
- Modal animation with scale and fade
- Auto-scroll to latest messages
- Enter key support for sending
- Simulated bot responses with 1s delay

## Styling & Design System

### Color Palette

**Primary Colors**:
- Background: `bg-gray-900`, `bg-gray-800`, `bg-gray-950`
- Accent: `text-amber-500`, `text-amber-400`, `text-amber-600`
- Text: `text-white`, `text-gray-300`, `text-gray-400`

**Gradients**:
```css
/* Gold accent gradient */
from-amber-400 via-amber-300 to-amber-500

/* Button gradient */
from-amber-500 to-amber-600
```

### Typography

- **Headings**: Bold weights (600-700), 2.5rem-3rem (mobile) to 4rem-6rem (desktop)
- **Body Text**: 1rem base size, `text-gray-300` for secondary text
- **Font Smoothing**: Antialiased via Tailwind

### Spacing System

Based on 8px grid:
- `py-24`: Major sections (192px)
- `px-4`: Default padding
- `gap-8`: Component spacing
- `p-6`: Card padding
- `rounded-2xl` to `rounded-3xl`: Border radius

### Effects & Animations

**Glassmorphism**:
```css
backdrop-blur-xl bg-white/5 border border-white/10
```

**Shadows**:
- Standard: `shadow-2xl`
- Interactive: `hover:shadow-amber-500/50`

**Transitions**:
- Smooth: `transition-all duration-300`
- Hover states with color and transform

## Performance Optimizations

### Build Optimization
- **Code Splitting**: Automatic route-based splitting via Vite
- **Tree Shaking**: Unused code elimination
- **CSS Purging**: Tailwind removes unused styles
- **Image Optimization**: Unsplash images are externally hosted

### Runtime Optimization
- **Framer Motion**: Optimized render cycles
- **Lazy Animation**: Viewport-triggered animations reduce initial load
- **CSS Grid**: Hardware-accelerated layout
- **Transform & Opacity**: GPU-accelerated animations only

### Bundle Size
```
dist/assets/index-[hash].js   ~93.60 kB (gzipped)
dist/assets/index-[hash].css  ~4.05 kB (gzipped)
Total                         ~97.65 kB (gzipped)
```

## Deployment

### Netlify Deployment
1. Connect repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`
4. The `_redirects` file handles SPA routing

### Environment Variables
Currently no environment variables required. If adding backend integrations:
- Supabase URLs and keys can be added to `.env`
- ChatWidget can connect to backend API

## Future Enhancements

- Supabase integration for booking management
- Backend API for chat widget
- User authentication system
- Booking calendar functionality
- Payment processing (Stripe)
- Dynamic destination content from database

## License

Open Source - See LICENSE file for details

## Credits

- Icons: [Lucide React](https://lucide.dev)
- Animations: [Framer Motion](https://www.framer.com/motion)
- Styling: [Tailwind CSS](https://tailwindcss.com)
- Images: [Unsplash](https://unsplash.com)
