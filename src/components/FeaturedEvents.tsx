
import React from 'react';
import EventCard from './EventCard';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from 'react-router-dom';

// Sample event data with updated images and IDs matching the EventDetail page
const featuredEvents = [
  {
    id: "c1",
    title: "Taylor Swift | The Eras Tour",
    date: "Jun 12, 2025",
    location: "SoFi Stadium, Los Angeles",
    image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Concerts",
    isFeatured: true
  },
  {
    id: "s1",
    title: "NBA Finals 2025 - Home Game 1",
    date: "May 29, 2025",
    location: "TD Garden, Boston",
    image: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Sports",
    isFeatured: true
  },
  {
    id: "t1",
    title: "Hamilton - The Musical",
    date: "Jul 5-10, 2025",
    location: "Richard Rodgers Theatre, New York",
    image: "https://images.unsplash.com/photo-1503095396549-807759245b35?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Theater",
    isFeatured: true
  },
  {
    id: "f2", // Updated from f1 to f2 to match new IDs in Festivals.tsx
    title: "Coachella Valley Music and Arts Festival",
    date: "Apr 10-19, 2025",
    location: "Empire Polo Club, Indio",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Festivals",
    isFeatured: true
  }
];

const FeaturedEvents = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-bold">Featured Events</h2>
          <Button variant="link" className="text-ticket-blue flex items-center" asChild>
            <Link to="/concerts">
              View all <ArrowRight size={16} className="ml-1" />
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredEvents.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedEvents;
