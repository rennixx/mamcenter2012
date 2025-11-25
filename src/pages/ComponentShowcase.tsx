import {
  Button,
  ServiceCard,
  HorseCard,
  Input,
  Textarea,
  Select,
  Container,
  Section,
  SectionHeader,
} from '../components';
import { FaHorse, FaCut, FaHome, FaHeartbeat } from 'react-icons/fa';

const ComponentShowcase = () => {
  const selectOptions = [
    { value: 'training', label: 'Horse Training' },
    { value: 'boarding', label: 'Boarding Services' },
    { value: 'grooming', label: 'Grooming' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Buttons Section */}
      <Section padding="default" background="white">
        <Container>
          <SectionHeader
            title="Buttons"
            subtitle="Multiple variants and sizes for different use cases"
          />

          <div className="space-y-8">
            {/* Primary Buttons */}
            <div>
              <h3 className="text-xl font-bold text-navy-900 mb-4">
                Primary Buttons
              </h3>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary" size="sm">
                  Small
                </Button>
                <Button variant="primary" size="md">
                  Medium
                </Button>
                <Button variant="primary" size="lg">
                  Large
                </Button>
                <Button variant="primary" size="md" isLoading>
                  Loading
                </Button>
                <Button variant="primary" size="md" disabled>
                  Disabled
                </Button>
              </div>
            </div>

            {/* Secondary Buttons */}
            <div>
              <h3 className="text-xl font-bold text-navy-900 mb-4">
                Secondary Buttons
              </h3>
              <div className="flex flex-wrap gap-4">
                <Button variant="secondary" size="sm">
                  Small
                </Button>
                <Button variant="secondary" size="md">
                  Medium
                </Button>
                <Button variant="secondary" size="lg">
                  Large
                </Button>
              </div>
            </div>

            {/* Tertiary Buttons */}
            <div>
              <h3 className="text-xl font-bold text-navy-900 mb-4">
                Tertiary Buttons
              </h3>
              <div className="flex flex-wrap gap-4">
                <Button variant="tertiary" size="sm">
                  Small
                </Button>
                <Button variant="tertiary" size="md">
                  Medium
                </Button>
                <Button variant="tertiary" size="lg">
                  Large
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Cards Section */}
      <Section padding="default" background="gray">
        <Container>
          <SectionHeader
            title="Cards"
            subtitle="Versatile card components for different content types"
          />

          {/* Service Cards */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-navy-900 mb-6">
              Service Cards
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <ServiceCard
                icon={<FaHorse className="text-5xl" />}
                title="Horse Training"
                description="Professional training programs for horses of all levels and disciplines."
              />
              <ServiceCard
                icon={<FaCut className="text-5xl" />}
                title="Grooming Services"
                description="Complete grooming and maintenance services for your horse's health."
              />
              <ServiceCard
                icon={<FaHome className="text-5xl" />}
                title="Boarding"
                description="Safe and comfortable boarding facilities with 24/7 care."
              />
              <ServiceCard
                icon={<FaHeartbeat className="text-5xl" />}
                title="Health Care"
                description="Comprehensive veterinary care and health monitoring."
              />
            </div>
          </div>

          {/* Horse Cards */}
          <div>
            <h3 className="text-2xl font-bold text-navy-900 mb-6">
              Horse Cards
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <HorseCard
                image="https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=400"
                name="Thunder"
                breed="Arabian"
                description="Beautiful 5-year-old Arabian stallion with exceptional temperament."
              />
              <HorseCard
                image="https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?w=400"
                name="Starlight"
                breed="Thoroughbred"
                description="Graceful mare with champion bloodlines and gentle nature."
              />
              <HorseCard
                image="https://images.unsplash.com/photo-1598632640487-6ea4a4e8b6f0?w=400"
                name="Shadow"
                breed="Quarter Horse"
                description="Strong and versatile gelding, perfect for trail riding."
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* Forms Section */}
      <Section padding="default" background="white">
        <Container>
          <SectionHeader
            title="Form Components"
            subtitle="Accessible and user-friendly form inputs"
          />

          <div className="max-w-2xl mx-auto space-y-6">
            <Input
              label="Full Name"
              placeholder="Enter your full name"
              helperText="This will be used for your booking"
            />

            <Input
              label="Email Address"
              type="email"
              placeholder="your@email.com"
              error="Please enter a valid email address"
            />

            <Select
              label="Service Type"
              placeholder="Select a service"
              options={selectOptions}
              helperText="Choose the service you're interested in"
            />

            <Textarea
              label="Message"
              placeholder="Tell us about your needs..."
              rows={4}
              helperText="Max 500 characters"
            />

            <div className="pt-4">
              <Button variant="primary" size="lg" fullWidth>
                Submit Form
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Typography Section */}
      <Section padding="default" background="gray">
        <Container>
          <SectionHeader
            title="Typography"
            subtitle="Consistent and accessible text styles"
          />

          <div className="space-y-6">
            <div>
              <h1>Heading 1 - Navy Blue Excellence</h1>
              <h2>Heading 2 - Professional Services</h2>
              <h3>Heading 3 - Quality Care</h3>
              <h4>Heading 4 - Expert Team</h4>
            </div>

            <div className="space-y-4">
              <p className="text-lg">
                Large paragraph text - Perfect for introductions and important
                content that needs emphasis.
              </p>
              <p>
                Regular paragraph text - The foundation of readable content
                with optimal line height and spacing for comfortable reading
                experiences.
              </p>
              <p className="text-sm text-gray-600">
                Small text - Ideal for helper text, captions, and supplementary
                information.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Color Palette */}
      <Section padding="default" background="white">
        <Container>
          <SectionHeader
            title="Color Palette"
            subtitle="Navy Blue and White theme with gray accents"
          />

          <div className="space-y-8">
            {/* Primary Colors */}
            <div>
              <h3 className="text-xl font-bold text-navy-900 mb-4">
                Primary Colors
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <div className="h-24 bg-primary rounded-lg shadow-md" />
                  <p className="text-sm font-semibold">Primary</p>
                  <p className="text-xs text-gray-600">#001F3F</p>
                </div>
                <div className="space-y-2">
                  <div className="h-24 bg-primary-dark rounded-lg shadow-md" />
                  <p className="text-sm font-semibold">Primary Dark</p>
                  <p className="text-xs text-gray-600">#000B1A</p>
                </div>
                <div className="space-y-2">
                  <div className="h-24 bg-primary-light rounded-lg shadow-md" />
                  <p className="text-sm font-semibold">Primary Light</p>
                  <p className="text-xs text-gray-600">#003366</p>
                </div>
                <div className="space-y-2">
                  <div className="h-24 bg-white border-2 border-gray-300 rounded-lg shadow-md" />
                  <p className="text-sm font-semibold">White</p>
                  <p className="text-xs text-gray-600">#FFFFFF</p>
                </div>
              </div>
            </div>

            {/* Gray Scale */}
            <div>
              <h3 className="text-xl font-bold text-navy-900 mb-4">
                Gray Scale
              </h3>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                {[50, 100, 200, 300, 400, 500].map((shade) => (
                  <div key={shade} className="space-y-2">
                    <div
                      className={`h-20 bg-gray-${shade} rounded-lg shadow-md border border-gray-300`}
                    />
                    <p className="text-xs font-semibold">Gray {shade}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default ComponentShowcase;
