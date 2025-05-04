
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CategoryNav from '../components/CategoryNav';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Smile, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import EventCard from '../components/EventCard';

const comedyEvents = [
  {
    id: "c2", // Correct ID for Kevin Hart from EventDetail.tsx
    title: "Kevin Hart - Comedy Tour",
    date: "Sep 3, 2025",
    location: "Madison Square Garden, New York",
    image: "/lovable-uploads/ce21b6df-d3ae-4cba-9271-fc0c96450673.png",
    price: "$85",
    category: "Comedy"
  },
  {
    id: "comedy-dave", // New unique ID
    title: "Dave Chappelle Live",
    date: "Oct 15, 2025",
    location: "The O2, London",
    image: "https://images.unsplash.com/photo-1585647347483-22b66260dfff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "$95",
    category: "Comedy"
  },
  {
    id: "comedy-trevor", // New unique ID
    title: "Trevor Noah World Tour",
    date: "Nov 8, 2025",
    location: "Sydney Opera House, Australia",
    image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "$75",
    category: "Comedy"
  },
  {
    id: "comedy-mulaney", // New unique ID
    title: "John Mulaney - From Scratch",
    date: "Dec 1, 2025",
    location: "Radio City Music Hall, New York",
    image: "https://images.unsplash.com/photo-1485178575877-1a13bf489dfe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "$80",
    category: "Comedy"
  },
  {
    id: "comedy-gervais", // New unique ID
    title: "Ricky Gervais: SuperNature",
    date: "Jan 20, 2026",
    location: "Royal Albert Hall, London",
    image: "https://images.unsplash.com/photo-1523251343397-9225e4cb6319?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "$90",
    category: "Comedy"
  },
  {
    id: "comedy-schumer", // New unique ID
    title: "Amy Schumer Live",
    date: "Feb 14, 2026",
    location: "Hollywood Bowl, Los Angeles",
    image: "https://images.unsplash.com/photo-1508252592163-5d3c3c559269?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "$70",
    category: "Comedy"
  }
];

const Comedy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <CategoryNav />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-yellow-500 to-orange-500 py-12 text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="flex items-center justify-center mb-4">
              <Smile size={36} className="mr-2" />
              <h1 className="text-3xl md:text-4xl font-bold">Comedy Shows</h1>
            </div>
            <p className="text-lg max-w-2xl mx-auto">
              Laugh out loud with the best comedians from around the world.
            </p>
          </div>
        </section>

        {/* Comedy Events List */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">Upcoming Comedy Shows</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {comedyEvents.map((event) => (
                <EventCard 
                  key={event.id}
                  id={event.id}
                  title={event.title}
                  date={event.date}
                  location={event.location}
                  image={event.image}
                  category={event.category}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Comedy;
