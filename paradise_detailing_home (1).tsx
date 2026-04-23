import { Button } from "@/components/ui/button";
import { Star, MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { useState } from "react";

/**
 * Paradise Detailing Miami - Professional Car Detailing Website
 * Design: Clean, modern, gallery-focused with teal accents
 * Purpose: Showcase before/after photos, build trust, drive bookings
 */

export default function ParadiseDetailing() {
  const [selectedGallery, setSelectedGallery] = useState<string | null>(null);

  const galleryItems = [
    { id: 1, category: "Interior", title: "Deep Interior Clean", image: "https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=500&h=400&fit=crop" },
    { id: 2, category: "Exterior", title: "Full Exterior Detail", image: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=500&h=400&fit=crop" },
    { id: 3, category: "Ceramic Coating", title: "Ceramic Coat Application", image: "https://images.unsplash.com/photo-1487754180144-351b8e906e8f?w=500&h=400&fit=crop" },
    { id: 4, category: "Interior", title: "Leather Conditioning", image: "https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=500&h=400&fit=crop" },
    { id: 5, category: "Exterior", title: "Paint Protection", image: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=500&h=400&fit=crop" },
    { id: 6, category: "Ceramic Coating", title: "Window Tinting", image: "https://images.unsplash.com/photo-1487754180144-351b8e906e8f?w=500&h=400&fit=crop" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container flex items-center justify-between py-4">
          <div className="text-2xl font-bold text-primary">Paradise Detailing</div>
          <div className="flex items-center gap-8">
            <a href="#services" className="text-sm font-medium hover:text-primary transition">Services</a>
            <a href="#gallery" className="text-sm font-medium hover:text-primary transition">Gallery</a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition">Contact</a>
            <Button className="bg-primary hover:bg-primary/90">Book Now</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary/5 to-transparent">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <span className="text-sm font-semibold">100+ 5-Star Reviews</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Your Car Deserves <span className="text-primary">Perfection</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Professional car detailing that transforms your vehicle. From deep interior cleaning to ceramic coatings, we deliver showroom-quality results every time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Schedule Appointment <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button size="lg" variant="outline">
                  View Pricing
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary to-primary/50 rounded-2xl p-1">
                <img
                  src="https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=600&h=500&fit=crop"
                  alt="Luxury car detailing"
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-secondary/30">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12 text-center">Why Choose Paradise Detailing?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "✨", title: "Expert Technicians", desc: "15+ years of professional detailing experience" },
              { icon: "🛡️", title: "Premium Products", desc: "Only the best ceramic coatings and protectants" },
              { icon: "⚡", title: "Quick Turnaround", desc: "Same-day service available for most details" },
            ].map((item, i) => (
              <div key={i} className="p-8 bg-background rounded-xl border border-border hover:shadow-lg transition">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12">Our Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { name: "Interior Detailing", price: "$150", desc: "Deep cleaning of seats, carpets, and dashboard" },
              { name: "Exterior Detailing", price: "$200", desc: "Paint correction, wax, and tire shine" },
              { name: "Ceramic Coating", price: "$400", desc: "Long-lasting paint protection (2 years)" },
              { name: "Full Detail Package", price: "$500", desc: "Complete interior + exterior + ceramic coat" },
            ].map((service, i) => (
              <div key={i} className="p-8 border border-border rounded-xl hover:shadow-lg transition">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold">{service.name}</h3>
                  <span className="text-2xl font-bold text-primary">{service.price}</span>
                </div>
                <p className="text-muted-foreground mb-6">{service.desc}</p>
                <Button variant="outline" className="w-full">Add to Cart</Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-20 bg-secondary/30">
        <div className="container">
          <h2 className="text-4xl font-bold mb-4">Before & After Gallery</h2>
          <p className="text-lg text-muted-foreground mb-12">See the transformation we deliver on every vehicle</p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className="relative overflow-hidden rounded-xl cursor-pointer group"
                onClick={() => setSelectedGallery(item.id.toString())}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition">
                  <p className="text-sm text-primary font-semibold">{item.category}</p>
                  <p className="text-white font-bold">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12 text-center">What Our Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "John Martinez", text: "Best detailing service in Miami! My car looks brand new." },
              { name: "Sarah Johnson", text: "Professional, fast, and affordable. Highly recommended!" },
              { name: "Mike Chen", text: "The ceramic coating has kept my car looking perfect for months." },
            ].map((testimonial, i) => (
              <div key={i} className="p-8 bg-secondary/50 rounded-xl border border-border">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">"{testimonial.text}"</p>
                <p className="font-bold">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="py-20 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Car?</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Book your appointment today and experience the Paradise Detailing difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" variant="secondary" className="font-semibold">
              Book Appointment
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
              Call Us Now
            </Button>
          </div>

          {/* Contact Info */}
          <div className="grid md:grid-cols-3 gap-8 mt-12 pt-12 border-t border-primary-foreground/20">
            <div>
              <MapPin className="w-6 h-6 mx-auto mb-3" />
              <p className="font-semibold">Location</p>
              <p className="text-sm opacity-90">2195 NW 103rd St, Miami, FL</p>
            </div>
            <div>
              <Phone className="w-6 h-6 mx-auto mb-3" />
              <p className="font-semibold">Phone</p>
              <p className="text-sm opacity-90">(305) 851-1427</p>
            </div>
            <div>
              <Mail className="w-6 h-6 mx-auto mb-3" />
              <p className="font-semibold">Email</p>
              <p className="text-sm opacity-90">info@paradisedetailing.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 bg-secondary/30">
        <div className="container text-center text-sm text-muted-foreground">
          <p>&copy; 2026 Paradise Detailing Miami. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
