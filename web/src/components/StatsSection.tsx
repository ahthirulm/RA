import { TrendingUp, Users, Award, Leaf } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    {
      icon: TrendingUp,
      number: '8+',
      label: 'Years of Excellence',
      description: 'Proven track record in sustainable metal recycling'
    },
    {
      icon: Users,
      number: '500+',
      label: 'Satisfied Clients',
      description: 'Businesses trust our reliable services'
    },
    {
      icon: Award,
      number: '4.9',
      label: 'Client Satisfaction',
      description: 'Consistently rated excellence by our partners'
    },
    {
      icon: Leaf,
      number: '0+',
      label: 'Carbon Emissions',
      description: 'Committed to environmental sustainability'
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-background to-metal-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gradient">OUR ACHIEVEMENTS</span>
          </h2>
          <p className="text-lg text-industrial max-w-2xl mx-auto">
            Numbers that reflect our commitment to excellence and environmental responsibility in the recycling industry.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className="text-center group animate-scale-in hover-lift"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-green-light rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-[var(--shadow-glow)]">
                <stat.icon className="w-10 h-10 text-primary-foreground" />
              </div>
              <div className="text-4xl lg:text-5xl font-bold text-gradient mb-2 group-hover:scale-105 transition-transform">
                {stat.number}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{stat.label}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-48 mx-auto">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-up">
          <div className="card-industrial p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Start your sustainable waste management journey today
            </h3>
            <p className="text-industrial mb-8 max-w-2xl mx-auto">
              Join hundreds of businesses who trust RA Scrap Trading for their metal recycling needs. 
              Get a free consultation and discover how we can help optimize your waste management.
            </p>
            <button className="btn-hero text-lg px-8 py-4">
              Get Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;