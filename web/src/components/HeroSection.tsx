import { ArrowRight, Play, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-industrial.jpg';
import logo from '@/assets/logo.png';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-24 scroll-mt-24">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Industrial scrap metal recycling facility"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/50"></div>
        <div className="absolute inset-0 bg-hero-pattern"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center lg:text-left">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-up">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
              <CheckCircle className="w-4 h-4 text-primary mr-2" />
              <span className="text-primary font-semibold text-sm">Middle East's Leading Scrap Trading Company</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-gradient"> RA Scrap</span>
                <br />
                <span className="text-foreground">Trading</span>
                <br />
                <span className="text-foreground">FZE</span>
              </h1>
              <h2 className="text-2xl lg:text-3xl font-semibold text-muted-foreground">
                WE ARE THE SCRAP METAL RECYCLERS IN U.A.E
              </h2>
            </div>

            {/* Description */}
            <p className="text-lg text-industrial max-w-2xl">
              Middle East's leading scrap trading company located in Dubai, U.A.E. 
              We specialize in sustainable metal waste management and recycling solutions 
              for industrial and commercial clients.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-hero group">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="btn-outline-hero group">
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Watch Our Process
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-gradient">8+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-gradient">4.9</div>
                <div className="text-sm text-muted-foreground">Customer Rating</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-gradient">0+</div>
                <div className="text-sm text-muted-foreground">Carbon Emission</div>
              </div>
            </div>
          </div>

          {/* Right side feature card */}
          <div className="lg:block hidden animate-scale-in">
            <div className="card-industrial p-8 bg-primary/10 backdrop-blur-sm">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Teamwork</h3>
                <p className="text-muted-foreground text-sm">
                  Serving the environment in all fields, we only 
                  work directly with recyclers and large exporters, 
                  specializing the trading in domestic and 
                  for the purpose of advancement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;