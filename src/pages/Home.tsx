import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import heroImage from "@/assets/hero-cap.jpg";
import capBlack from "@/assets/cap-black-front.jpg";
import capBlue from "@/assets/cap-blue-front.jpg";
import capGrey from "@/assets/cap-grey-front.jpg";
import { ArrowRight, Shield, Truck, Award } from "lucide-react";

const Home = () => {
  const bestSellers = [
    { id: "1", name: "C-Zone Core Black", price: 450, image: capBlack, category: "C-Zone Core" },
    { id: "2", name: "C-Zone Royal Blue", price: 450, image: capBlue, category: "C-Zone Core" },
    { id: "3", name: "C-Zone Street Grey", price: 480, image: capGrey, category: "C-Zone Street" },
    { id: "4", name: "C-Zone Core White", price: 450, image: capBlack, category: "C-Zone Core" },
  ];

  const features = [
    { icon: Shield, title: "Premium Quality", desc: "Heavy cotton twill fabric" },
    { icon: Truck, title: "Fast Delivery", desc: "Cairo-wide shipping" },
    { icon: Award, title: "Perfect Fit", desc: "Adjustable & comfortable" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="C-Zone Cap" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-2xl animate-fade-in">
            <h1 className="font-display text-6xl md:text-8xl mb-6 leading-none">
              CAIRO IN<br />EVERY THREAD
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg">
              Urban streetwear caps crafted for the streets of Cairo. Premium quality, bold identity, everyday essential.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/shop">Shop Now</Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link to="/about">Our Story</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="container mx-auto px-4 py-20">
        <div className="flex items-center justify-between mb-12 animate-slide-up">
          <div>
            <h2 className="font-display text-5xl mb-2">BEST SELLERS</h2>
            <p className="text-muted-foreground">Most loved by the streets</p>
          </div>
          <Button variant="ghost" asChild>
            <Link to="/shop">
              View All <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {bestSellers.map((product, index) => (
            <div key={product.id} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </section>

      {/* Categories Preview */}
      <section className="bg-card py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-5xl mb-4">EXPLORE COLLECTIONS</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From classic cores to street graphics, find your Cairo identity
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["C-Zone Core", "C-Zone Street", "Cairo Series"].map((category, index) => (
              <Link
                key={category}
                to="/shop"
                className="group relative h-64 overflow-hidden border border-border hover:border-accent transition-colors animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                <img src={capBlack} alt={category} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <h3 className="font-display text-3xl mb-2">{category}</h3>
                  <p className="text-sm text-muted-foreground">View Collection →</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="font-display text-5xl mb-4">WHY C-ZONE</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div key={feature.title} className="text-center p-8 animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-accent/10 rounded-full">
                <feature.icon className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-display text-2xl mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
