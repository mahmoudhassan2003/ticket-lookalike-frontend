
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CategoryNav from '../components/CategoryNav';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Theater as TheaterIcon } from "lucide-react";

const theaterEvents = [
  {
    id: "t1",
    title: "Hamilton",
    date: "Jun 15-30, 2025",
    location: "Victoria Palace Theatre, London",
    image: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "t2",
    title: "The Phantom of the Opera",
    date: "Jul 5-20, 2025",
    location: "Her Majesty's Theatre, London",
    image: "https://images.unsplash.com/photo-1503095396549-807759245b35?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "t3",
    title: "Les Misérables",
    date: "Aug 10-25, 2025",
    location: "Sondheim Theatre, London",
    image: "https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "t4",
    title: "The Lion King",
    date: "Sep 5-20, 2025",
    location: "Lyceum Theatre, London",
    image: "https://images.unsplash.com/photo-1583004231508-e462638c634a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "t5",
    title: "Wicked",
    date: "Oct 10-25, 2025",
    location: "Apollo Victoria Theatre, London",
    image: "https://images.unsplash.com/photo-1568085874298-f67cb4fbd92f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "t6",
    title: "Matilda The Musical",
    date: "Nov 5-20, 2025",
    location: "Cambridge Theatre, London",
    image: "https://images.unsplash.com/photo-1553481187-be93c21490a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

const Theater = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <CategoryNav />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-ticket-darkOrange to-red-500 py-12 text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="flex items-center justify-center mb-4">
              <TheaterIcon size={36} className="mr-2" />
              <h1 className="text-3xl md:text-4xl font-bold">Theater</h1>
            </div>
            <p className="text-lg max-w-2xl mx-auto">
              Experience the magic of live performances from award-winning shows and productions.
            </p>
          </div>
        </section>

        {/* Theater Events List */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">Upcoming Theater Shows</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {theaterEvents.map((event) => (
                <Card key={event.id} className="h-full hover:shadow-lg transition-shadow">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-4">
                    <Badge variant="outline" className="mb-2">Theater</Badge>
                    <h3 className="font-semibold text-lg mb-1">{event.title}</h3>
                    <div className="flex items-center text-sm text-gray-500 mb-1">
                      <Calendar size={14} className="mr-1" />
                      <span>{event.date}</span>
                    </div>
                    <p className="text-sm text-gray-500 mb-3">{event.location}</p>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-sm font-medium text-ticket-blue">From $55</span>
                      <Button size="sm" variant="outline" className="text-ticket-blue border-ticket-blue hover:bg-ticket-blue hover:text-white">
                        View Tickets
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Theater;
