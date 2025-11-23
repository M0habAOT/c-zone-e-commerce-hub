import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-cap.jpg";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="About C-Zone" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 text-center">
          <h1 className="font-display text-6xl md:text-8xl mb-4">OUR STORY</h1>
          <p className="text-xl text-muted-foreground">Cairo in Every Thread</p>
        </div>
      </section>

      {/* Story */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto">
          <div className="mb-16 animate-fade-in">
            <h2 className="font-display text-5xl mb-6">Born from Cairo Streets</h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                C-Zone started with a simple idea: create everyday essential caps that represent the authentic spirit of Cairo's urban culture. We're not just making caps – we're crafting pieces of identity for a generation that lives and breathes the city.
              </p>
              <p>
                Every cap we create tells a story of Cairo's neighborhoods, from the bustling streets of Nasr City to the laid-back vibes of Maadi. Our designs are inspired by the raw energy, diverse culture, and unapologetic boldness of Egypt's capital.
              </p>
            </div>
          </div>

          <div className="mb-16 animate-slide-up">
            <h2 className="font-display text-5xl mb-6">Premium Quality, No Compromise</h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                We believe streetwear should be both stylish and functional. That's why every C-Zone cap is crafted from premium heavy cotton twill, designed to withstand Cairo's heat while keeping you comfortable all day long.
              </p>
              <p>
                From the stitching to the embroidery, from the fit to the finish – we obsess over every detail to ensure you're getting quality that lasts.
              </p>
            </div>
          </div>

          <div className="mb-16 animate-slide-up">
            <h2 className="font-display text-5xl mb-6">Our Mission</h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                To deliver everyday essential caps that blend premium quality with urban identity. We want every person wearing a C-Zone cap to feel confident, comfortable, and connected to the vibrant culture of Cairo.
              </p>
            </div>
          </div>

          <div className="animate-slide-up">
            <h2 className="font-display text-5xl mb-6">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border border-border p-6">
                <h3 className="font-display text-2xl mb-3">Authenticity</h3>
                <p className="text-muted-foreground">Stay true to Cairo's urban spirit</p>
              </div>
              <div className="border border-border p-6">
                <h3 className="font-display text-2xl mb-3">Comfort</h3>
                <p className="text-muted-foreground">Premium materials, perfect daily fit</p>
              </div>
              <div className="border border-border p-6">
                <h3 className="font-display text-2xl mb-3">Urban Identity</h3>
                <p className="text-muted-foreground">Represent your city with pride</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-card py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-5xl mb-6">Ready to Rep Cairo?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Explore our collections and find your perfect cap
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/shop">Shop Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;
