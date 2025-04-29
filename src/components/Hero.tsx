
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-ticket-blue to-ticket-darkOrange text-white">
      <div className="absolute inset-0 bg-black/10 opacity-80"></div>
      <div className="relative container mx-auto px-4 py-12 md:py-24">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            Your Next Unforgettable Experience Starts Here
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in">
            Browse thousands of events and secure your tickets with confidence
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in">
            <Button className="bg-ticket-silver text-ticket-blue hover:bg-white hover:text-ticket-darkOrange font-semibold px-6 py-3 rounded-md">
              Find Concerts
            </Button>
            <Button className="bg-transparent text-white border-2 border-white hover:bg-white/10 font-semibold px-6 py-3 rounded-md">
              Explore All Events
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
