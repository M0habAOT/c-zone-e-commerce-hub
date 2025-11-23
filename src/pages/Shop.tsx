import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import capBlack from "@/assets/cap-black-front.jpg";
import capBlue from "@/assets/cap-blue-front.jpg";
import capGrey from "@/assets/cap-grey-front.jpg";

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "C-Zone Core",
    "C-Zone Street",
    "C-Zone Black Label",
    "Cairo Series",
    "C-Zone Night Mode",
  ];

  const products = [
    { id: "1", name: "C-Zone Core Black", price: 450, image: capBlack, category: "C-Zone Core" },
    { id: "2", name: "C-Zone Royal Blue", price: 450, image: capBlue, category: "C-Zone Core" },
    { id: "3", name: "C-Zone Street Grey", price: 480, image: capGrey, category: "C-Zone Street" },
    { id: "4", name: "C-Zone Core White", price: 450, image: capBlack, category: "C-Zone Core" },
    { id: "5", name: "Zamalek Edition", price: 520, image: capBlack, category: "Cairo Series" },
    { id: "6", name: "Maadi Edition", price: 520, image: capGrey, category: "Cairo Series" },
    { id: "7", name: "Black Label Minimal", price: 580, image: capBlack, category: "C-Zone Black Label" },
    { id: "8", name: "Night Mode Shadow", price: 500, image: capBlack, category: "C-Zone Night Mode" },
  ];

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="container mx-auto px-4 py-24">
      <div className="mb-12">
        <h1 className="font-display text-6xl mb-4">SHOP ALL CAPS</h1>
        <p className="text-muted-foreground text-lg">Find your perfect Cairo streetwear cap</p>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-3 mb-12 pb-6 border-b border-border">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            onClick={() => setSelectedCategory(category)}
            className="uppercase text-sm"
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredProducts.map((product, index) => (
          <div key={product.id} className="animate-fade-in" style={{ animationDelay: `${index * 50}ms` }}>
            <ProductCard {...product} />
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-20">
          <p className="text-muted-foreground text-lg">No products found in this category.</p>
        </div>
      )}
    </div>
  );
};

export default Shop;
