# MAM Center - Single-Page Application Architecture

## 🎯 Overview

MAM Center is built as a **single-page application (SPA)** with smooth scroll navigation, providing a seamless user experience without page reloads. All sections are accessible through anchor-based navigation with active section detection.

---

## 📐 Application Architecture

### **Main Components**

#### 1. **App.tsx** - Application Shell
- Main application entry point
- Manages routing structure
- Minimal wrapper for the single-page layout

#### 2. **Home.tsx** - Complete Single-Page Layout
- Contains all website sections in a single page
- Manages navigation data and content
- Implements smooth scroll behavior
- Coordinates all page sections

---

## 🧭 Navigation Structure

### **Navigation Sections**
All sections are accessible via anchor links:

| Section | ID | Description |
|---------|-----|-------------|
| Home | `#home` | Hero section with main CTAs |
| About Us | `#about` | Company information and mission |
| Services | `#services` | Offered services (lessons, boarding, training) |
| Facilities | `#facilities` | Facility features and amenities |
| Our Horses | `#horses` | Horse profiles and information |
| Classes & Schedule | `#classes` | Class listings and schedules |
| Events | `#events` | Upcoming events and competitions |
| Pricing | `#pricing` | Pricing plans and packages |
| Gallery | `#gallery` | Photo gallery |
| Contact | `#contact` | Contact form and information |

---

## 🎨 Core Components

### **1. Navbar Component**
**Location:** `src/components/Navbar.tsx`

**Features:**
- ✅ Fixed/sticky positioning at the top
- ✅ Logo and branding
- ✅ Smooth scroll anchor navigation
- ✅ Active section highlighting with animated underline
- ✅ Mobile hamburger menu with animations
- ✅ Contact CTA button
- ✅ Scroll-based shadow effect

**Props:**
```typescript
interface NavbarProps {
  logo?: string;              // Logo image URL
  logoText?: string;          // Text logo (default: "MAM Center")
  links: NavLink[];           // Navigation links
  ctaText?: string;           // CTA button text
  ctaHref?: string;           // CTA button link
  onCtaClick?: () => void;    // CTA click handler
}
```

**Key Features:**
- **Active Section Detection**: Automatically highlights the current section based on scroll position
- **Smooth Scroll**: Custom scroll function with offset for fixed navbar
- **Responsive**: Desktop horizontal menu, mobile hamburger menu
- **Animated**: Framer Motion for menu transitions and active indicators

---

### **2. Footer Component**
**Location:** `src/components/Footer.tsx`

**Features:**
- ✅ Quick links to all sections
- ✅ Contact information (phone, email, address)
- ✅ Social media links (Facebook, Twitter, Instagram, LinkedIn)
- ✅ Copyright and legal links
- ✅ Multi-column responsive layout
- ✅ Smooth scroll navigation

**Props:**
```typescript
interface FooterProps {
  logo?: string;
  logoText?: string;
  description?: string;
  sections?: FooterSection[];     // Link sections
  contactInfo?: ContactInfo;      // Contact details
  socialLinks?: SocialLink[];     // Social media
  copyright?: string;
  legalLinks?: FooterLink[];      // Privacy, Terms, etc.
}
```

---

### **3. ScrollProgress Component**
**Location:** `src/components/ScrollProgress.tsx`

**Features:**
- ✅ Visual progress bar at the top of the page
- ✅ Shows scroll progress from 0% to 100%
- ✅ Fixed at the very top (z-index: 100)
- ✅ Navy blue color theme
- ✅ Smooth animation

**Usage:**
```tsx
<ScrollProgress />
```

---

### **4. BackToTop Component**
**Location:** `src/components/BackToTop.tsx`

**Features:**
- ✅ Floating button in bottom-right corner
- ✅ Appears when user scrolls down 300px
- ✅ Smooth scroll to top on click
- ✅ Animated entrance/exit
- ✅ Hover effects with scale animation

**Usage:**
```tsx
<BackToTop />
```

---

### **5. PageSection Component**
**Location:** `src/components/PageSection.tsx`

**Features:**
- ✅ Reusable section wrapper
- ✅ Scroll-triggered animations
- ✅ Consistent layout and spacing
- ✅ Background color variants (white, gray, navy)
- ✅ Section header with title and subtitle

**Props:**
```typescript
interface PageSectionProps {
  id: string;                    // Section ID for anchor links
  title: string;                 // Section title
  subtitle?: string;             // Section subtitle
  children?: ReactNode;          // Section content
  bgColor?: 'white' | 'gray' | 'navy';
  className?: string;
}
```

**Usage:**
```tsx
<PageSection
  id="about"
  title="About MAM Center"
  subtitle="Dedicated to equestrian excellence"
  bgColor="white"
>
  {/* Your content here */}
</PageSection>
```

---

## 🎭 Animation & Scroll Behavior

### **Smooth Scroll Configuration**
Global smooth scroll is configured in `src/styles/globals.css`:

```css
html {
  scroll-behavior: smooth;
}
```

### **Custom Scroll Function**
The Navbar component includes a custom scroll function with offset:

```typescript
const scrollToSection = (href: string) => {
  const id = href.replace('#', '');
  const element = document.getElementById(id);
  
  if (element) {
    const offset = 80; // Navbar height offset
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }
};
```

### **Active Section Detection**
Uses scroll event listeners to detect which section is in view:

```typescript
useEffect(() => {
  const handleScroll = () => {
    const sections = links.map((link) => {
      const id = link.href.replace('#', '');
      const element = document.getElementById(id);
      // Calculate which section is in viewport
    });
    
    // Update active section state
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, [links]);
```

### **Framer Motion Transitions**
All sections use Framer Motion for scroll-triggered animations:

```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  {/* Content */}
</motion.div>
```

---

## 📱 Responsive Design

### **Breakpoints**
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### **Navigation Behavior**
- **Desktop (lg+)**: Horizontal menu with all links visible
- **Mobile/Tablet (< lg)**: Hamburger menu with slide-down animation

### **Section Layouts**
- Most sections use responsive grid layouts
- Grid columns adjust based on screen size:
  ```tsx
  className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
  ```

---

## 🎨 Design System Integration

All components use the MAM Center design system:

### **Colors**
- **Primary**: Navy Blue (#001F3F)
- **Secondary**: White (#FFFFFF)
- **Backgrounds**: White, Gray-50, Navy-900

### **Typography**
- **Headings**: Navy-900 (except on navy backgrounds → white)
- **Body**: Gray-600
- **Responsive sizes**: Text scales with breakpoints

### **Components Used**
- `Button` - Primary, Secondary, Tertiary variants
- `Card` - Service cards, testimonial cards, horse cards
- `Input`, `Textarea`, `Select` - Form elements
- `Hero` - Hero banner with CTAs
- `Container`, `Section` - Layout utilities

---

## 🔧 Implementation Details

### **Page Structure in Home.tsx**

```tsx
<div className="min-h-screen">
  {/* Fixed Elements */}
  <ScrollProgress />
  <Navbar links={navLinks} />
  
  {/* Page Sections */}
  <div id="home"><Hero /></div>
  <PageSection id="about">...</PageSection>
  <PageSection id="services">...</PageSection>
  <PageSection id="facilities">...</PageSection>
  <PageSection id="horses">...</PageSection>
  <PageSection id="classes">...</PageSection>
  <PageSection id="events">...</PageSection>
  <PageSection id="pricing">...</PageSection>
  <PageSection id="gallery">...</PageSection>
  <PageSection id="contact">...</PageSection>
  
  {/* Footer */}
  <Footer />
  
  {/* Floating Elements */}
  <BackToTop />
</div>
```

### **Navigation Data Structure**

```typescript
const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  // ... all sections
];

const footerSections = [
  {
    title: 'Quick Links',
    links: [
      { label: 'About Us', href: '#about' },
      // ...
    ],
  },
];
```

---

## ✨ Key Features

### **1. Smooth Navigation**
- No page reloads
- Instant section transitions
- Scroll offset for fixed navbar

### **2. Visual Feedback**
- Active section highlighting in navbar
- Scroll progress indicator
- Hover effects and transitions

### **3. Accessibility**
- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support

### **4. Performance**
- Single page load
- Lazy animation triggers
- Optimized scroll listeners

---

## 🚀 Usage Guide

### **Adding a New Section**

1. **Add to navigation links:**
```typescript
const navLinks = [
  // ... existing links
  { label: 'New Section', href: '#new-section' },
];
```

2. **Create the section in Home.tsx:**
```tsx
<PageSection
  id="new-section"
  title="New Section Title"
  subtitle="Section subtitle"
  bgColor="gray"
>
  {/* Your content */}
</PageSection>
```

3. **Add to footer links (optional):**
```typescript
const footerSections = [
  {
    title: 'Quick Links',
    links: [
      // ...
      { label: 'New Section', href: '#new-section' },
    ],
  },
];
```

### **Customizing Animations**

Modify Framer Motion props for different effects:

```tsx
// Fade in from bottom
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>

// Scale in
<motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.5 }}
  viewport={{ once: true }}
>

// Slide in from left/right
<motion.div
  initial={{ opacity: 0, x: -50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
```

---

## 📊 Component Inventory

| Component | Location | Purpose |
|-----------|----------|---------|
| Navbar | `components/Navbar.tsx` | Fixed navigation with active detection |
| Footer | `components/Footer.tsx` | Site footer with links & contact |
| ScrollProgress | `components/ScrollProgress.tsx` | Scroll progress bar |
| BackToTop | `components/BackToTop.tsx` | Scroll to top button |
| PageSection | `components/PageSection.tsx` | Reusable section wrapper |
| Hero | `components/Hero.tsx` | Hero banner component |
| Button | `components/Button.tsx` | Button with variants |
| Card | `components/Card.tsx` | Card components |
| Input | `components/Input.tsx` | Form inputs |

---

## 🎯 Best Practices

### **Section IDs**
- Use kebab-case: `#about-us`, `#contact`
- Keep them short and descriptive
- Match navigation labels

### **Scroll Offset**
- Navbar height is 80px
- Adjust if navbar height changes
- Test on all screen sizes

### **Performance**
- Use `viewport={{ once: true }}` for animations that should only trigger once
- Debounce scroll listeners if adding custom functionality
- Keep sections reasonably sized

### **Accessibility**
- Always include section IDs
- Use semantic HTML
- Provide ARIA labels for interactive elements
- Ensure keyboard navigation works

---

## 🔄 State Management

The SPA uses minimal state management:

1. **Navbar State**
   - `isMobileMenuOpen` - Mobile menu toggle
   - `activeSection` - Current active section
   - `isScrolled` - Scroll position for shadow effect

2. **Scroll State**
   - `scrollProgress` - Scroll percentage for progress bar
   - `isVisible` - BackToTop button visibility

3. **No Global State Required**
   - All data is passed as props
   - No complex state management needed
   - React hooks for local state

---

## 📈 Future Enhancements

Potential improvements:

1. **URL Hash Updates**
   - Update browser URL hash on section change
   - Support direct linking to sections

2. **Section Transitions**
   - Add page transition effects between sections
   - Parallax scrolling effects

3. **Lazy Loading**
   - Load section content as user scrolls
   - Optimize initial page load

4. **Analytics**
   - Track section views
   - Monitor scroll depth

---

## ✅ Checklist for Developers

- [x] Navbar with all 10 sections
- [x] Active section highlighting
- [x] Smooth scroll behavior
- [x] Mobile responsive menu
- [x] Scroll progress indicator
- [x] Back to top button
- [x] Footer with all links
- [x] Contact information
- [x] Social media links
- [x] Framer Motion animations
- [x] All sections created
- [x] Fully responsive design

---

## 📝 Summary

The MAM Center SPA provides a modern, smooth, and responsive user experience with:

- **10 main sections** accessible via anchor links
- **Active section detection** with visual feedback
- **Smooth scroll animations** powered by Framer Motion
- **Responsive design** for all devices
- **Comprehensive navigation** in header and footer
- **Visual enhancements** with scroll progress and back-to-top button

The architecture is clean, maintainable, and follows React best practices while providing an excellent user experience.
