import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import capBlack from "@/assets/cap-black-front.jpg";
import capBlue from "@/assets/cap-blue-front.jpg";
import capGrey from "@/assets/cap-grey-front.jpg";
import { Minus, Plus, ShoppingCart, Truck, Shield, RefreshCw } from "lucide-react";

const Product = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("Black");
  const [selectedSize, setSelectedSize] = useState("Adjustable");

  // Mock product data
  const product = {
    id: id || "1",
    name: "C-Zone Core Black",
    price: 450,
    category: "C-Zone Core",
    description: "Premium streetwear cap featuring our signature C-Zone branding. Crafted with high-quality cotton twill for durability and comfort. Perfect for everyday Cairo streets.",
    images: [capBlack, capGrey, capBlue],
    colors: ["Black", "Grey", "Royal Blue"],
    sizes: ["Adjustable"],
    features: [
      "Premium heavy cotton twill fabric",
      "Breathable and durable construction",
      "Adjustable snapback closure",
      "Embroidered C-Zone logo",
      "Perfect daily fit",
    ],
    care: "Hand wash cold, air dry. Do not iron embroidery.",
  };

  const relatedProducts = [
    { id: "2", name: "C-Zone Royal Blue", price: 450, image: capBlue, category: "C-Zone Core" },
    { id: "3", name: "C-Zone Street Grey", price: 480, image: capGrey, category: "C-Zone Street" },
    { id: "4", name: "C-Zone Core White", price: 450, image: capBlack, category: "C-Zone Core" },
  ];

  return (
    <div className="container mx-auto px-4 py-24">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
        <Link to="/" className="hover:text-foreground">Home</Link>
        <span>/</span>
        <Link to="/shop" className="hover:text-foreground">Shop</Link>
        <span>/</span>
        <span className="text-foreground">{product.name}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="aspect-square bg-card border border-border overflow-hidden">
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            {product.images.map((img, index) => (
              <div key={index} className="aspect-square bg-card border border-border overflow-hidden cursor-pointer hover:border-accent transition-colors">
                <img src={img} alt={`${product.name} view ${index + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <p className="text-sm text-muted-foreground uppercase tracking-wide mb-2">{product.category}</p>
          <h1 className="font-display text-5xl mb-4">{product.name}</h1>
          <p className="text-3xl font-bold mb-6">{product.price} EGP</p>

          <p className="text-muted-foreground mb-8 leading-relaxed">{product.description}</p>

          {/* Color Selection */}
          <div className="mb-6">
            <h3 className="font-display text-lg mb-3">Color</h3>
            <div className="flex gap-3">
              {product.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`px-4 py-2 border-2 transition-colors ${
                    selectedColor === color
                      ? "border-accent bg-accent/10 text-accent"
                      : "border-border hover:border-accent"
                  }`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          {/* Size Selection */}
          <div className="mb-6">
            <h3 className="font-display text-lg mb-3">Size</h3>
            <div className="flex gap-3">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-6 py-2 border-2 transition-colors ${
                    selectedSize === size
                      ? "border-accent bg-accent/10 text-accent"
                      : "border-border hover:border-accent"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mb-8">
            <h3 className="font-display text-lg mb-3">Quantity</h3>
            <div className="flex items-center gap-4">
              <div className="flex items-center border border-border">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:bg-accent/10 transition-colors"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="px-6 font-bold">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:bg-accent/10 transition-colors"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              <Button size="lg" className="flex-1">
                <ShoppingCart className="mr-2" />
                Add to Cart
              </Button>
            </div>
          </div>

          {/* Features */}
          <div className="border-t border-border pt-8 space-y-6">
            <div className="flex items-start gap-4">
              <Truck className="h-5 w-5 text-accent mt-1" />
              <div>
                <h4 className="font-display text-sm mb-1">Fast Delivery</h4>
                <p className="text-sm text-muted-foreground">Free shipping on orders over 500 EGP</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Shield className="h-5 w-5 text-accent mt-1" />
              <div>
                <h4 className="font-display text-sm mb-1">Premium Quality</h4>
                <p className="text-sm text-muted-foreground">Crafted with high-quality materials</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <RefreshCw className="h-5 w-5 text-accent mt-1" />
              <div>
                <h4 className="font-display text-sm mb-1">Easy Returns</h4>
                <p className="text-sm text-muted-foreground">7-day return policy</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 py-12 border-t border-border">
        <div>
          <h2 className="font-display text-3xl mb-6">Features</h2>
          <ul className="space-y-3">
            {product.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-accent mt-1">•</span>
                <span className="text-muted-foreground">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-display text-3xl mb-6">Care Instructions</h2>
          <p className="text-muted-foreground leading-relaxed">{product.care}</p>
        </div>
      </div>

      {/* Related Products */}
      <div className="border-t border-border pt-12">
        <h2 className="font-display text-4xl mb-8">You Might Also Like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {relatedProducts.map((related) => (
            <ProductCard key={related.id} {...related} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
