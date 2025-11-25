# Design System Quick Reference

## Component Imports

```tsx
import {
  Button,
  Card,
  ServiceCard,
  TestimonialCard,
  HorseCard,
  Input,
  Textarea,
  Select,
  Navbar,
  Footer,
  Container,
  Section,
  SectionHeader,
  Hero,
} from '@/components';
```

## Quick Examples

### Button
```tsx
<Button variant="primary" size="md">Click Me</Button>
<Button variant="secondary" size="lg">Secondary</Button>
<Button variant="tertiary" isLoading>Loading...</Button>
```

### Cards
```tsx
<ServiceCard
  icon={<FaIcon />}
  title="Service Name"
  description="Description here"
/>

<TestimonialCard
  quote="Great service!"
  author="John Doe"
  role="Customer"
/>
```

### Forms
```tsx
<Input label="Name" placeholder="Enter name" />
<Textarea label="Message" rows={4} />
<Select label="Type" options={options} />
```

### Layout
```tsx
<Section padding="default" background="gray">
  <Container>
    <SectionHeader title="Title" subtitle="Subtitle" />
    {/* Content */}
  </Container>
</Section>
```

## Utility Classes

```css
.btn-primary          /* Primary button */
.btn-secondary        /* Secondary button */
.card-service         /* Service card */
.section-padding      /* Section spacing */
.hero-title           /* Hero heading */
.text-gradient        /* Gradient text */
```

## Color Classes

```css
.bg-primary          /* Navy Blue */
.bg-primary-dark     /* Darker Navy */
.text-navy-900       /* Text color */
.bg-gray-50          /* Light gray */
```

See DESIGN_SYSTEM.md for complete documentation.
