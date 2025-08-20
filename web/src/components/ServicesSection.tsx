import { 
  Recycle, 
  Truck, 
  Scale, 
  Shield, 
  Clock, 
  Award,
  CheckCircle 
} from 'lucide-react';
import servicesImage from '@/assets/services-facility.jpg';

const ServicesSection = () => {
  const services = [
    {
      icon: Recycle,
      title: 'Scrap Facility',
      description: 'State-of-the-art recycling facility with advanced sorting and processing capabilities'
    },
    {
      icon: Truck,
      title: 'FREE pick up',
      description: 'Complimentary collection service for scrap metal across UAE with professional handling'
    },
    {
      icon: Scale,
      title: '24/7 support system',
      description: 'Round-the-clock customer support and emergency pickup services available'
    },
    {
      icon: Shield,
      title: 'Residential & Consulting',
      description: 'Comprehensive consulting for industrial, commercial and residential scrap management'
    },
    {
      icon: Clock,
      title: 'Quick shipment period',
      description: 'Efficient logistics and fast processing for timely delivery and pickup schedules'
    },
    {
      icon: Award,
      title: 'Unparalleled Quality',
      description: 'ISO certified processes ensuring highest quality standards in metal recycling'
    }
  ];

  const whyChooseUs = [
    'Competitive Pricing',
    'Local & International Experience', 
    'Quick Shipment Period',
    'Unparalleled Quality'
  ];

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gradient">OUR SERVICES</span>
          </h2>
          <p className="text-lg text-industrial max-w-3xl mx-auto">
            We provide comprehensive scrap metal recycling solutions with cutting-edge technology 
            and sustainable practices for businesses across the Middle East.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="card-service animate-fade-up hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-green-light rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Who We Are Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-slide-right">
            <h3 className="text-sm font-semibold text-primary mb-2 tracking-wider">WHO WE ARE</h3>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-700">
              RA Scrap Trading FZE
            </h2>
            <p className="text-gray-700 mb-8 leading-relaxed">
              We are one of the leading scrap metal companies in the UAE with over 8 years of experience. 
              Our team consists of highly trained professionals who specialize in efficient metal recycling, 
              waste management, and sustainable trading practices. We serve both local and international 
              markets with dedication to environmental responsibility.
            </p>

            <div className="space-y-6 mb-8">
              <h4 className="text-xl font-semibold text-primary">WHY CHOOSE US</h4>
              <div className="grid sm:grid-cols-2 gap-4">
                {whyChooseUs.map((item) => (
                  <div key={item} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-hero">Learn More About Us</button>
              <button className="btn-outline-hero">View Our Certifications</button>
            </div>
          </div>

          <div className="relative animate-scale-in">
            <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-elegant)]">
              <img 
                src={servicesImage} 
                alt="Modern recycling facility interior"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
            </div>
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-8 -right-8 card-industrial p-6 bg-primary/95 backdrop-blur-sm">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-foreground mb-1">2+</div>
                <div className="text-xs text-primary-foreground/80">Million Tons Recycled</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;