import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone Number',
      details: ['+971 50 122 1584', '+971 50 122 1584'],
      href: 'tel:+971501221584'
    },
    {
      icon: Mail,
      title: 'Email Address',
      details: ['info@rascraptrading.com', 'sales@rascraptrading.com'],
      href: 'mailto:info@rascraptrading.com'
    },
    {
      icon: MapPin,
      title: 'Location',
      details: ['Dubai Industrial Area', 'United Arab Emirates'],
      href: '#'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon - Sat: 8:00 AM - 6:00 PM', 'Sunday: Emergency Only'],
      href: '#'
    }
  ];

  const services = [
    'Scrap facility',
    'Steel scrap trading',
    'HMS1&2',
    'Shear scrap',
    'Cut and bundles',
    'HRP (Heavy Rail Scrap)',
    'Vessel Bulk',
    'Aluminum Scrap',
    'Copper Millberry',
    'Brass & Phosphor bronze Scrap',
    'Aluminum Oxide',
    'Vessel scrap',
    '3rd cutting and sizing after you order',
    'Steel rod of sizing',
    'Thick delivery',
    'Zinc scrap',
    'Nic Alloy Scrap',
    'Electric Motor Scrap',
    'Eddy & Transformers',
    'Radiator Scrap',
    'Insulated Copper Wire',
    'Bare Aluminum Wire',
    'ACSR',
    'Rains & Recovers sorting',
    'Auto & Transformer',
    'Eddy & Electromagnets'
  ];

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gradient">GET IN TOUCH</span>
          </h2>
          <p className="text-lg text-industrial max-w-2xl mx-auto">
            Ready to start your sustainable waste management journey? Contact our expert team for 
            customized solutions and competitive pricing.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="card-industrial p-8 animate-slide-right">
              <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Full Name *
                    </label>
                    <Input 
                      placeholder="Your full name"
                      className="bg-secondary border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input 
                      type="email"
                      placeholder="your.email@company.com"
                      className="bg-secondary border-border focus:border-primary"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Phone Number
                    </label>
                    <Input 
                      placeholder="+971 XX XXX XXXX"
                      className="bg-secondary border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Company Name
                    </label>
                    <Input 
                      placeholder="Your company name"
                      className="bg-secondary border-border focus:border-primary"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Message *
                  </label>
                  <Textarea 
                    placeholder="Tell us about your scrap metal recycling needs..."
                    rows={6}
                    className="bg-secondary border-border focus:border-primary resize-none"
                  />
                </div>
                <Button className="btn-hero w-full group">
                  <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Info & Services */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="card-industrial p-6 animate-scale-in">
              <h3 className="text-xl font-bold mb-6 text-gradient">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <a
                    key={info.title}
                    href={info.href}
                    className="flex items-start space-x-4 p-3 rounded-lg hover:bg-secondary/50 transition-colors group"
                  >
                    <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                      {info.details.map((detail, index) => (
                        <p key={index} className="text-sm text-muted-foreground">{detail}</p>
                      ))}
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Services List */}
            <div className="card-industrial p-6 animate-scale-in">
              <h3 className="text-xl font-bold mb-6 text-gradient">WE BUY SCRAP CATEGORIES</h3>
              <div className="grid grid-cols-1 gap-2 max-h-80 overflow-y-auto scrollbar-thin scrollbar-thumb-primary/30">
                {services.map((service, index) => (
                  <div 
                    key={index}
                    className="flex items-center space-x-2 text-sm hover:text-primary transition-colors"
                  >
                    <div className="w-1 h-1 bg-primary rounded-full"></div>
                    <span>{service}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <Button className="btn-hero w-full">Get Full Price List</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;