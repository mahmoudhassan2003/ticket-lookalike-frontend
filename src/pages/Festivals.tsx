
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CategoryNav from '../components/CategoryNav';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, PartyPopper } from "lucide-react";
import { Button } from "@/components/ui/button";

const festivalEvents = [
  {
    id: "f1",
    title: "Glastonbury Festival 2025",
    date: "Jun 25-29, 2025",
    location: "Worthy Farm, Somerset, UK",
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "f2",
    title: "Coachella Valley Music & Arts Festival",
    date: "Apr 10-19, 2025",
    location: "Indio, California",
    image: "https://images.unsplash.com/photo-1535086181678-5a5c4d23aa7d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "f3",
    title: "Tomorrowland 2025",
    date: "Jul 17-26, 2025",
    location: "Boom, Belgium",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "f4",
    title: "Reading & Leeds Festival",
    date: "Aug 22-24, 2025",
    location: "Reading & Leeds, UK",
    image: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "f5",
    title: "Ultra Music Festival",
    date: "Mar 28-30, 2025",
    location: "Miami, Florida",
    image: "https://images.unsplash.com/photo-1493676304819-0d7a8d026dcf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "f6",
    title: "Burning Man",
    date: "Aug 24 - Sep 1, 2025",
    location: "Black Rock Desert, Nevada",
    image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

const Festivals = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <CategoryNav />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-600 to-pink-500 py-12 text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="flex items-center justify-center mb-4">
              <PartyPopper size={36} className="mr-2" />
              <h1 className="text-3xl md:text-4xl font-bold">Festivals</h1>
            </div>
            <p className="text-lg max-w-2xl mx-auto">
              Discover the world's most exciting music and cultural festivals.
            </p>
          </div>
        </section>

        {/* Festivals List */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">Upcoming Festivals</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {festivalEvents.map((event) => (
                <Card key={event.id} className="h-full hover:shadow-lg transition-shadow">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-4">
                    <Badge variant="outline" className="mb-2">Festival</Badge>
                    <h3 className="font-semibold text-lg mb-1">{event.title}</h3>
                    <div className="flex items-center text-sm text-gray-500 mb-1">
                      <Calendar size={14} className="mr-1" />
                      <span>{event.date}</span>
                    </div>
                    <p className="text-sm text-gray-500 mb-3">{event.location}</p>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-sm font-medium text-ticket-blue">From $120</span>
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

export default Festivals;
