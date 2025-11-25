# MAM Center - Modern React Website

A modern, responsive website built with React 18, Vite, Tailwind CSS, and Framer Motion. This project features smooth animations, anchor-based navigation, and a comprehensive design system with Navy Blue and White color theme.

## ✨ Design System

This project includes a **complete design system** with:
- 🎨 Custom Navy Blue (#001F3F) brand theme
- 📦 11 production-ready components (14 variations)
- 📚 Comprehensive documentation
- 🎯 Fully responsive design
- ⚡ Smooth animations throughout

**View the design system:**
- Run `npm run dev` and navigate to `/showcase`
- See `DESIGN_SYSTEM_COMPLETE.md` for full documentation
- Check `QUICK_REFERENCE.md` for developer cheat sheet

## 🚀 Features

- ⚛️ **React 18** - Latest version with functional components and hooks
- ⚡ **Vite** - Lightning-fast build tool and development server
- 🎨 **Tailwind CSS** - Utility-first CSS with custom Navy Blue theme (#001F3F)
- 🎭 **Framer Motion** - Smooth animations and transitions
- 🧭 **React Router v6** - Client-side routing with smooth anchor navigation
- 📦 **State Management** - Zustand for minimal, efficient state management
- 📝 **Form Handling** - React Hook Form for performant form validation
- 🌐 **API Integration** - Axios for HTTP requests with interceptors
- 🎯 **Scroll Animations** - React Intersection Observer for scroll-triggered animations
- 🎨 **Icons** - React Icons library for comprehensive icon support
- 🔧 **TypeScript** - Type-safe development
- 📏 **ESLint & Prettier** - Code quality and formatting tools

## 📁 Project Structure

```
mamcenter/
├── src/
│   ├── components/       # Reusable React components (Button, Card, Input, etc.)

│   ├── components/       # Reusable React components

│   ├── pages/           # Page/section components      // Remove tseslint.configs.recommended and replace with this

│   ├── hooks/           # Custom React hooks      tseslint.configs.recommendedTypeChecked,

│   │   └── useMediaQuery.ts      // Alternatively, use this for stricter rules

│   ├── utils/           # Utility functions      tseslint.configs.strictTypeChecked,

│   ├── pages/           # Page/section components (Home, ComponentShowcase)
│   ├── hooks/           # Custom React hooks (useMediaQuery)
│   ├── utils/           # Utility functions and helpers
│   │   └── api.ts       # Axios configuration
│   ├── styles/          # Global styles and Tailwind config
│   │   └── globals.css
│   ├── assets/          # Images, videos, icons
│   ├── constants/       # Colors, breakpoints, constants
│   │   ├── colors.ts
│   │   ├── breakpoints.ts
│   │   └── index.ts
│   ├── App.tsx          # Main App component
│   └── main.tsx         # Application entry point
├── public/              # Static assets
├── .env                 # Environment variables (DO NOT COMMIT)
├── .env.example         # Environment variables template
├── .prettierrc          # Prettier configuration
├── eslint.config.js     # ESLint configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
├── vite.config.ts       # Vite configuration
├── DESIGN_SYSTEM_COMPLETE.md  # Complete design system documentation
├── QUICK_REFERENCE.md         # Developer cheat sheet
└── DESIGN_SYSTEM_SUMMARY.md   # Implementation checklist
```

## 🎨 Color Theme

The project uses a custom Navy Blue and White color theme:

**Primary Colors:**
- **Navy 900 (Primary)**: `#001F3F` - Main brand color
- **Navy 800**: `#000B1A` - Dark variant
- **Navy 700**: `#003366` - Light variant
- **Navy 50-600**: Shades for backgrounds and accents

**Secondary Colors:**
- **White**: `#FFFFFF`
- **Gray 50**: `#F5F5F5` - Light backgrounds
- **Gray 100-900**: Full grayscale palette

## 📦 Components

The design system includes these production-ready components:

### Core Components
- **Button** - 3 variants (primary/secondary/tertiary), 3 sizes, loading state
- **Card** - Base card + ServiceCard, TestimonialCard, HorseCard variations
- **Input** - Input, Textarea, Select with error states and validation

### Layout Components
- **Navbar** - Responsive navigation with mobile menu
- **Footer** - Multi-section footer with social links
- **Layout** - Container, Section, SectionHeader utilities
- **Hero** - Hero banner with background image/video support

### Page Templates
- **ComponentShowcase** - Live demo of all components at `/showcase`

See `DESIGN_SYSTEM_COMPLETE.md` for complete API documentation.

## 📚 Dependencies

### Production Dependencies
- `react` & `react-dom` - React library
- `react-router-dom` - Routing for React
- `framer-motion` - Animation library
- `react-icons` - Icon library
- `axios` - HTTP client
- `react-hook-form` - Form handling
- `zustand` - State management
- `react-intersection-observer` - Scroll animations

### Development Dependencies
- `vite` - Build tool
- `typescript` - Type safety
- `tailwindcss` - CSS framework
- `autoprefixer` & `postcss` - CSS processing
- `eslint` - Code linting
- `prettier` - Code formatting

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ or 20+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd mamcenter
```

2. Install dependencies:
```bash
npm install
```

3. Copy the environment variables file:
```bash
cp .env.example .env
```

4. Update `.env` with your configuration:
```env
VITE_API_BASE_URL=http://localhost:5000/api
VITE_GOOGLE_MAPS_API_KEY=your_key_here
VITE_EMAIL_SERVICE_URL=your_url_here
```

### Development

Start the development server:
```bash
npm run dev
```

The application will open at `http://localhost:3000`

### Build

Create a production build:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## 🧹 Code Quality

### Linting

Run ESLint to check for code issues:
```bash
npm run lint
```

### Formatting

Format code with Prettier:
```bash
npm run format
```

## 🎯 Custom Hooks

### useMediaQuery

A custom hook for responsive design:

```typescript
import { useMediaQuery } from './hooks';

const isMobile = useMediaQuery('sm');
const isTablet = useMediaQuery('md');
const isDesktop = useMediaQuery('lg');
```

## 🌐 API Configuration

The project includes a pre-configured Axios instance with interceptors:

```typescript
import { api } from './utils/api';

// GET request
const data = await api.get('/endpoint');

// POST request
const response = await api.post('/endpoint', { data });
```

## 📱 Responsive Breakpoints

```typescript
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
2xl: 1536px
```

## 🎨 Tailwind Utility Classes

Custom utility classes available:

- `.section-container` - Max-width container with responsive padding
- `.btn-primary` - Primary button with Navy Blue background
- `.btn-secondary` - Secondary button with white background and Navy Blue border

## 📝 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_API_BASE_URL` | Backend API base URL | Yes |
| `VITE_GOOGLE_MAPS_API_KEY` | Google Maps API key | Optional |
| `VITE_EMAIL_SERVICE_URL` | Email service endpoint | Optional |

## 🚀 Deployment

This project can be deployed to various platforms:

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload the dist folder to Netlify
```

### GitHub Pages
Configure `vite.config.ts` with the base URL and build.

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For support, please open an issue in the repository.

---

Built with ❤️ using React, Vite, and Tailwind CSS
