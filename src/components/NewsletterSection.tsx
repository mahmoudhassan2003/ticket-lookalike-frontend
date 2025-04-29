
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const NewsletterSection = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-ticket-blue to-ticket-silver text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Never Miss an Event</h2>
          <p className="mb-6 opacity-90">
            Subscribe to our newsletter and be the first to know about ticket releases, 
            exclusive presales and special offers.
          </p>
          <div className="flex flex-col md:flex-row gap-3 max-w-lg mx-auto">
            <Input 
              type="email" 
              placeholder="Your email address" 
              className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
            />
            <Button className="bg-ticket-darkOrange text-white hover:bg-ticket-softOrange hover:text-ticket-darkOrange">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
