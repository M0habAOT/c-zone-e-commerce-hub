import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Instagram, Mail, MessageCircle } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="container mx-auto px-4 py-24">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="font-display text-6xl mb-4">GET IN TOUCH</h1>
          <p className="text-xl text-muted-foreground">
            Have a question? Want to collaborate? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="font-display text-3xl mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <Input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your name"
                  required
                  className="bg-card"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your.email@example.com"
                  required
                  className="bg-card"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us what's on your mind..."
                  rows={6}
                  required
                  className="bg-card"
                />
              </div>
              <Button type="submit" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="font-display text-3xl mb-6">Other Ways to Connect</h2>
            <div className="space-y-8">
              <div className="flex items-start gap-4 p-6 border border-border hover:border-accent transition-colors">
                <div className="bg-accent/10 p-3 rounded-lg">
                  <Instagram className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-display text-xl mb-2">Instagram</h3>
                  <p className="text-muted-foreground mb-3">Follow us for the latest drops and Cairo street style</p>
                  <a
                    href="https://instagram.com/czone"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    @czone
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 border border-border hover:border-accent transition-colors">
                <div className="bg-accent/10 p-3 rounded-lg">
                  <MessageCircle className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-display text-xl mb-2">WhatsApp</h3>
                  <p className="text-muted-foreground mb-3">Quick questions? Chat with us directly</p>
                  <a
                    href="https://wa.me/201234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    +20 123 456 7890
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 border border-border hover:border-accent transition-colors">
                <div className="bg-accent/10 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-display text-xl mb-2">Email</h3>
                  <p className="text-muted-foreground mb-3">For inquiries and collaborations</p>
                  <a
                    href="mailto:hello@c-zone.com"
                    className="text-accent hover:underline"
                  >
                    hello@c-zone.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
