# MAM Center Design System & Component Library

A comprehensive design system built with React, TypeScript, Tailwind CSS, and Framer Motion, featuring Navy Blue (#001F3F) and White color scheme.

## Table of Contents

1. [Design Tokens](#design-tokens)
2. [Components](#components)
   - [Button](#button)
   - [Card](#card)
   - [Input Components](#input-components)
   - [Navigation](#navigation)
   - [Layout Components](#layout-components)
   - [Hero](#hero)
3. [Utility Classes](#utility-classes)
4. [Usage Examples](#usage-examples)

---

## Design Tokens

### Colors

```typescript
// Primary Colors
primary: '#001F3F'        // Navy Blue
primary-dark: '#000B1A'   // Darker Navy for text
primary-light: '#003366'  // Lighter Navy

// Secondary Colors
secondary: '#FFFFFF'      // White
secondary-dark: '#F5F5F5' // Light Gray
secondary-light: '#FAFAFA'

// Grays
gray-50: '#F5F7FA'
gray-100: '#F0F2F5'
gray-200: '#E5E7EB'
// ... (standard gray scale)
```

### Typography

```typescript
Font Families:
- sans: System UI stack
- heading: System UI stack (optimized for headings)

Font Sizes:
- xs: 0.75rem (12px)
- sm: 0.875rem (14px)
- base: 1rem (16px)
- lg: 1.125rem (18px)
- xl: 1.25rem (20px)
- 2xl: 1.5rem (24px)
- 3xl: 1.875rem (30px)
- 4xl: 2.25rem (36px)
- 5xl: 3rem (48px)
- 6xl: 3.75rem (60px)
- 7xl: 4.5rem (72px)
```

### Spacing

Standard Tailwind spacing scale plus custom values:
- 18: 4.5rem
- 88: 22rem
- 128: 32rem

### Border Radius

```typescript
- sm: 0.25rem
- DEFAULT: 0.375rem
- md: 0.5rem
- lg: 0.75rem
- xl: 1rem
- 2xl: 1.5rem
- 3xl: 2rem
- full: 9999px
```

### Shadows

```typescript
- navy: Custom navy-tinted shadow
- navy-lg: Larger navy-tinted shadow
- (Standard Tailwind shadows: sm, md, lg, xl, 2xl)
```

---

## Components

### Button

A versatile button component with multiple variants and sizes.

#### Props

```typescript
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  isLoading?: boolean;
  fullWidth?: boolean;
  disabled?: boolean;
  // ... all standard button HTML attributes
}
```

#### Variants

- **primary**: Navy Blue background with white text
- **secondary**: White background with Navy Blue border and text
- **tertiary**: Transparent with subtle Navy Blue border

#### Usage

```tsx
import { Button } from '@/components';

// Primary button
<Button variant="primary" size="md">
  Click Me
</Button>

// Secondary button with loading state
<Button variant="secondary" size="lg" isLoading>
  Submit
</Button>

// Full width button
<Button variant="primary" fullWidth>
  Sign Up
</Button>
```

---

### Card

Flexible card component with specialized variants for different content types.

#### Props

```typescript
interface CardProps {
  variant?: 'default' | 'service' | 'testimonial' | 'horse';
  children: ReactNode;
  className?: string;
  hoverable?: boolean;
  image?: string;
  imageAlt?: string;
}
```

#### Specialized Cards

##### ServiceCard

For displaying services with icons.

```typescript
interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
}
```

##### TestimonialCard

For customer testimonials.

```typescript
interface TestimonialCardProps {
  quote: string;
  author: string;
  role?: string;
  avatar?: string;
  className?: string;
}
```

##### HorseCard

For horse profiles.

```typescript
interface HorseCardProps {
  image: string;
  name: string;
  breed?: string;
  description: string;
  className?: string;
}
```

#### Usage

```tsx
import { ServiceCard, TestimonialCard, HorseCard } from '@/components';
import { FaHorse } from 'react-icons/fa';

// Service Card
<ServiceCard
  icon={<FaHorse className="text-5xl" />}
  title="Horse Training"
  description="Professional training services for all levels"
/>

// Testimonial Card
<TestimonialCard
  quote="Amazing service and care for my horse!"
  author="John Doe"
  role="Horse Owner"
  avatar="/path/to/avatar.jpg"
/>

// Horse Card
<HorseCard
  image="/path/to/horse.jpg"
  name="Thunder"
  breed="Arabian"
  description="Beautiful 5-year-old Arabian stallion"
/>
```

---

### Input Components

Form input components with consistent styling and validation support.

#### Input

```typescript
interface InputProps {
  label?: string;
  error?: string;
  helperText?: string;
  // ... all standard input HTML attributes
}
```

#### Textarea

```typescript
interface TextareaProps {
  label?: string;
  error?: string;
  helperText?: string;
  rows?: number;
  // ... all standard textarea HTML attributes
}
```

#### Select

```typescript
interface SelectProps {
  label?: string;
  error?: string;
  helperText?: string;
  options: SelectOption[];
  placeholder?: string;
  // ... all standard select HTML attributes
}
```

#### Usage

```tsx
import { Input, Textarea, Select } from '@/components';

// Text Input
<Input
  label="Full Name"
  placeholder="Enter your name"
  error="Name is required"
/>

// Textarea
<Textarea
  label="Message"
  rows={4}
  placeholder="Your message"
  helperText="Max 500 characters"
/>

// Select
<Select
  label="Service Type"
  placeholder="Choose a service"
  options={[
    { value: 'training', label: 'Horse Training' },
    { value: 'boarding', label: 'Boarding' },
  ]}
/>
```

---

### Navigation

Responsive navbar with mobile menu support.

#### Props

```typescript
interface NavbarProps {
  logo?: string;
  logoText?: string;
  links: NavLink[];
  ctaText?: string;
  ctaHref?: string;
  onCtaClick?: () => void;
}

interface NavLink {
  label: string;
  href: string;
}
```

#### Usage

```tsx
import { Navbar } from '@/components';

<Navbar
  logoText="MAM Center"
  links={[
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ]}
  ctaText="Book Now"
  ctaHref="/booking"
/>
```

---

### Layout Components

#### Container

Max-width container with responsive padding.

```tsx
import { Container } from '@/components';

<Container>
  <h1>Content goes here</h1>
</Container>
```

#### Section

Wrapper for page sections with consistent spacing.

```typescript
interface SectionProps {
  children: ReactNode;
  padding?: 'default' | 'small' | 'none';
  background?: 'white' | 'gray' | 'navy' | 'transparent';
  id?: string;
}
```

```tsx
import { Section } from '@/components';

<Section padding="default" background="gray" id="services">
  <h2>Our Services</h2>
</Section>
```

#### SectionHeader

Centered section headers with title and subtitle.

```tsx
import { SectionHeader } from '@/components';

<SectionHeader
  title="Our Services"
  subtitle="Comprehensive equestrian care and training"
/>
```

---

### Hero

Full-width hero banner with background image/video support.

#### Props

```typescript
interface HeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  backgroundVideo?: string;
  overlay?: boolean;
  overlayOpacity?: number;
  primaryCta?: { text: string; onClick?: () => void };
  secondaryCta?: { text: string; onClick?: () => void };
  height?: 'small' | 'medium' | 'large' | 'full';
  alignment?: 'left' | 'center' | 'right';
}
```

#### Usage

```tsx
import { Hero } from '@/components';

<Hero
  title="Welcome to MAM Center"
  subtitle="Excellence in Equestrian Care"
  backgroundImage="/hero-background.jpg"
  overlay={true}
  overlayOpacity={50}
  height="large"
  alignment="center"
  primaryCta={{
    text: "Get Started",
    onClick: () => navigate('/services')
  }}
  secondaryCta={{
    text: "Learn More",
    onClick: () => navigate('/about')
  }}
/>
```

---

### Footer

Comprehensive footer with multiple sections and social links.

#### Props

```typescript
interface FooterProps {
  logo?: string;
  logoText?: string;
  description?: string;
  sections?: FooterSection[];
  socialLinks?: SocialLink[];
  copyright?: string;
}
```

#### Usage

```tsx
import { Footer } from '@/components';

<Footer
  logoText="MAM Center"
  description="Excellence in equestrian care and services."
  sections={[
    {
      title: 'Services',
      links: [
        { label: 'Horse Training', href: '/services/training' },
        { label: 'Boarding', href: '/services/boarding' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '/about' },
        { label: 'Contact', href: '/contact' },
      ],
    },
  ]}
  socialLinks={[
    { platform: 'facebook', href: 'https://facebook.com' },
    { platform: 'instagram', href: 'https://instagram.com' },
  ]}
/>
```

---

## Utility Classes

### Container & Spacing

```css
.container-custom       /* Max-width container with padding */
.section-padding       /* py-16 md:py-20 lg:py-24 */
.section-padding-sm    /* py-12 md:py-16 lg:py-20 */
```

### Typography

```css
.hero-title           /* Large hero heading */
.hero-subtitle        /* Hero subtitle text */
.section-title        /* Section heading */
.section-subtitle     /* Section subtitle */
```

### Effects

```css
.text-gradient        /* Navy gradient text */
.bg-navy-gradient     /* Navy gradient background */
.overlay-dark         /* Dark overlay for backgrounds */
.transition-smooth    /* Smooth transition (300ms) */
```

---

## Responsive Breakpoints

```typescript
sm: 640px   // Small devices
md: 768px   // Medium devices
lg: 1024px  // Large devices
xl: 1280px  // Extra large devices
2xl: 1536px // 2x Extra large devices
```

---

## Animation & Transitions

All interactive elements include smooth transitions (300ms default). Hover effects include:

- Buttons: Scale 1.02 on hover, 0.98 on click
- Cards: Shadow elevation and translate on hover
- Links: Color transitions

Built-in animations:
- `fade-in`: Opacity fade
- `slide-up`: Slide from bottom
- `slide-down`: Slide from top
- `scale-in`: Scale from 95% to 100%

---

## Best Practices

1. **Consistency**: Always use the design system components instead of creating custom styles
2. **Accessibility**: Components include proper ARIA labels and keyboard navigation
3. **Responsiveness**: All components are mobile-first and fully responsive
4. **Performance**: Components use React.memo and lazy loading where appropriate
5. **Type Safety**: Full TypeScript support with comprehensive prop types

---

## Examples Gallery

See `/src/pages/ComponentShowcase.tsx` for a live demonstration of all components.

---

*Last Updated: October 2025*
